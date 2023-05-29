import React, { use, useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { InputLabel, MenuItem, Select, TextField, FormControl, SelectChangeEvent } from '@mui/material';
import { Col, Row } from '@nextui-org/react';
import { FormControlBox } from '@/components/boxes/FormControlBox';
import { City, Province, State } from '@/interfaces/user.interface';
import { ObjectUtil } from '@/util/objectUtils';
import stateApi from '@/api/state.api';
import provinceApi from '@/api/province.api';
import cityApi from '@/api/city.api';

interface Props {
    control: any;
    watch: any;
}

export const AddressInfo = ({ control, watch }: Props) => {

    const [addressValues, setaddressValues] = useState({
        city: 0,
        province: 0,
        state: 0
    });
    const [states, setStates] = useState<State[]>([] as State[]);
    const [provinces, setProvinces] = useState<Province[]>([] as Province[]);
    const [cities, setCities] = useState<City[]>([] as City[]);
    const [city, setCity] = useState({} as City);
    const [cp, setCp] = useState(0);

    useEffect(() => {
        stateApi.getStatesByCountry(1).then(setStates);
    }, []);

    useEffect(() => {
        provinceApi.getProvincesByState(addressValues.state).then(setProvinces);
    }, [addressValues.state]);

    useEffect(() => {
        cityApi.getCitiesByProvince(addressValues.province).then(setCities);
    }, [addressValues.province]);

    useEffect(() => {
        setCity(cities?.find(c => c.id == addressValues.city)!)
        setCp(city?.postalCode?.split(',')?.map(Number)[1]);
    }, [addressValues.city]);

    useEffect(() => {
        if (cp > 10000) {
            setCity(cities?.find(c => c.postalCode === `${cp}`)!);
        }
    }, [cp])

    const handleChangeState = ({ target }: SelectChangeEvent) => setaddressValues(val => ({ ...val, state: Number(target.value) }));
    const handleChangeProvince = ({ target }: SelectChangeEvent) => setaddressValues(val => ({ ...val, province: Number(target.value) }));
    const handleChangeCity = ({ target }: SelectChangeEvent) => setaddressValues(val => ({ ...val, city: Number(target.value) }));

    return (
        <div className='w-full'>
            <div className="mb-3">
                <div className='flex gap-5 justify-evenly'>
                    <Col>
                        <FormControlBox>
                            <InputLabel id='label-state'>Comunidad autónoma</InputLabel>
                            <Controller
                                control={control}
                                name='address.state'
                                render={
                                    ({ field }) => {
                                        return (
                                            <Select
                                                label='Comunidad autónoma'
                                                labelId='label-state'
                                                fullWidth
                                                color='secondary'
                                                displayEmpty
                                                sx={{
                                                    width: '235px'
                                                }}
                                                { ...field }
                                                onChange={ handleChangeState }
                                            >
                                                {
                                                    states.map(state => (
                                                        <MenuItem key={state.id} value={state.id}> { state.name } </MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        )
                                    }
                                }
                            />
                        </FormControlBox>
                        <FormControlBox>
                            <InputLabel id='province-label'>Provincia</InputLabel>
                            <Controller
                                control={control}
                                name='address.province'
                                render={
                                    ({ field }) => {
                                        return (
                                            <Select
                                                { ...field }
                                                label='Provincia'
                                                labelId='province-label'
                                                fullWidth
                                                color='secondary'
                                                sx={{
                                                    width: '235px',
                                                }}
                                                hidden={ObjectUtil.isIdCero(addressValues.state)}
                                                onChange={handleChangeProvince}
                                            >
                                                {
                                                    provinces.map(province => (
                                                        <MenuItem key={province.id} value={province.id}>
                                                            {province.name}
                                                        </MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        )
                                    }
                                }
                            />
                        </FormControlBox>
                        <FormControlBox>
                            <InputLabel id='city-label'>Ciudad</InputLabel>
                            <Controller
                                control={control}
                                name='address.city'
                                render={
                                    ({ field }) => {
                                        return (
                                            <Select
                                                {...field}
                                                label='Ciudad'
                                                labelId='city-label'
                                                fullWidth
                                                color='secondary'
                                                sx={{
                                                    width: '235px'
                                                }}
                                                onChange={ handleChangeCity }
                                                hidden={ ObjectUtil.isIdCero(addressValues.province) }
                                            >
                                                {
                                                    cities.map(city => (
                                                        <MenuItem key={city.id} value={city.id}>
                                                            { city.name }
                                                        </MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        )
                                    }
                                }
                            />
                        </FormControlBox>
                        <FormControlBox>
                            <Controller
                                control={control}
                                name='address.postalCode'
                                defaultValue={city?.postalCode?.split(',')[1]}
                                render={
                                    ({ field }) => {
                                        return (
                                            <TextField 
                                                label='Código postal' 
                                                color='secondary' 
                                                {...field}
                                                value={cp}
                                                onChange={ e => setCp(Number(e.target.value)) }
                                                hidden={ ObjectUtil.isIdCero(addressValues.province) }
                                                focused={ city?.postalCode?.length > 0 }
                                            />
                                        )
                                    }
                                }
                            />
                        </FormControlBox>
                        <FormControlBox>
                            <InputLabel id='dir-type'> Tipo de vía </InputLabel>
                            <Controller
                                control={control}
                                name='address.addrType'
                                render={
                                    ({ field }) => {
                                        return (
                                            <Select
                                                label='Tipo de vía'
                                                labelId='dir-type'
                                                {...field}
                                                fullWidth
                                                color='secondary'
                                                sx={{
                                                    width: '235px'
                                                }}
                                                hidden={ ObjectUtil.isEmpty(addressValues.city) }
                                            >
                                                <MenuItem value='calle'>Calle</MenuItem>
                                                <MenuItem value='plaza'>Plaza</MenuItem>
                                                <MenuItem value='via'>Vía</MenuItem>
                                                <MenuItem value='paseo'>Paseo</MenuItem>

                                            </Select>
                                        )
                                    }
                                }
                            ></Controller>
                        </FormControlBox>
                        <FormControlBox>
                            <Controller
                                control={control}
                                name='address.streetName'
                                rules={{ required: true }}
                                render={
                                    ({ field }) => {
                                        return (
                                            <TextField
                                                label='Nombre de Calle'
                                                color='secondary'
                                                {...field}
                                                hidden={ ObjectUtil.isEmpty(addressValues.city) }
                                            />
                                        )
                                    }
                                }
                            ></Controller>
                        </FormControlBox>
                        <FormControlBox>
                            <Controller
                                control={control}
                                name='address.streetNumber'
                                rules={{ required: true }}
                                render={
                                    ({ field }) => {
                                        return (
                                            <TextField

                                                label='Número'
                                                color='secondary'
                                                {...field}
                                                hidden={ ObjectUtil.isEmpty(addressValues.city) }
                                            />
                                        )
                                    }
                                }
                            ></Controller>
                        </FormControlBox>
                    </Col>
                    <Col className='mt-2'>
                        <FormControlBox>
                            <Controller
                                control={control}
                                name='address.floor'
                                rules={{ required: false }}
                                render={
                                    ({ field }) => {
                                        return (
                                            <TextField
                                                label='Planta'
                                                color='secondary'
                                                {...field}
                                            />
                                        )
                                    }
                                }
                            ></Controller>
                        </FormControlBox>
                        <FormControlBox>
                            <Controller
                                control={control}
                                name='address.door'
                                rules={{ required: false }}
                                render={
                                    ({ field }) => {
                                        return (
                                            <TextField

                                                label='Puerta'
                                                color='secondary'
                                                {...field}
                                            />
                                        )
                                    }
                                }
                            ></Controller>
                        </FormControlBox>
                        <FormControlBox>
                            <Controller
                                control={control}
                                name='address.extraInfo'
                                rules={{ required: false }}
                                render={
                                    ({ field }) => {
                                        return (
                                            <TextField

                                                label='Información extra'
                                                color='secondary'
                                                multiline
                                                rows={4}
                                                {...field}
                                            />
                                        )
                                    }
                                }
                            ></Controller>
                        </FormControlBox>
                    </Col>
                </div>
            </div>
        </div>
    )
}
