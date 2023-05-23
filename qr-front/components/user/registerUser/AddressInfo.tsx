import React from 'react'
import { Controller } from 'react-hook-form'
import { InputLabel, MenuItem, Select, TextField, FormControl } from '@mui/material';
import { Col, Row } from '@nextui-org/react';
import { FormControlBox } from '@/components/boxes/FormControlBox';

interface Props {
    control: any;
}

export const AddressInfo = ({ control }: Props) => {
    return (
        <div className='w-full'>
            <div className="mb-3">
                <div className='flex gap-5 justify-evenly'>
                    <Col>
                        <FormControlBox>
                            <Controller
                                control={control}
                                name='address.postalCode'
                                render={
                                    ({ field }) => {
                                        return (
                                            <TextField label='Código postal' color='secondary' {...field} />
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
