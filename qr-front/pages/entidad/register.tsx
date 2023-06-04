import entityApi from '@/api/entity.api';
import { Layout } from '@/base/Layout';
import { FormControlBox } from '@/components/boxes/FormControlBox';
import { RoundedBox } from '@/components/boxes/RoundedBox';
import { TabPanel } from '@/components/tabs/TabPanel';
import { Entity } from '@/interfaces/entity.interface';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, InputLabel, MenuItem, Select, Tab, Tabs, TextField, Typography } from '@mui/material';
import { Col, Container, Radio, Row } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().optional(),
    nif: yup.string().required(),
    applicableRate: yup.number().required().default(0.5),
    responsiblePerson: yup.object({
        name: yup.string().required(),
        surname: yup.string().optional(),
        telephone: yup.string().required(),
    })
});

export default function EntidadRegister() {

    const [tab, setTab] = useState(0);
    const [addPlaces, setAddPlaces] = useState(false);
    const { control, handleSubmit, watch, formState: { errors, isDirty } } = useForm<Entity>({
        resolver: yupResolver(schema),
    });
    const { push } = useRouter();
    const onSubmitTest = (data: any) => console.log(data);
    const onSubmit = async (data: any) => {
        await entityApi.createEntity({
            ...data,
            applicableRate: Number(data.applicableRate) as any
        });
        push({
            pathname: '/entidad/all'
        });
    }

    return (
        <Layout>
            <div>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontSize: '30px',
                        fontWeight: 'bolder'
                    }}
                    className='pb-5'
                >
                    Registro de entidades
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full pt-10'>
                    <RoundedBox sx={{ height: '40vh' }} row={false}>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Tabs
                                textColor='secondary'
                                indicatorColor='secondary'
                                value={tab}
                                onChange={(event, newValue) => setTab(newValue)}
                            >
                                <Tab label='Datos' />
                                <Tab label='Lugares' />
                            </Tabs>
                        </Box>
                        <TabPanel value={tab} index={0}>
                            <Row>
                                <Col>
                                    <Typography>
                                        Datos de la entidad:
                                    </Typography>
                                    <FormControlBox>
                                        <Controller
                                            control={control}
                                            name='name'
                                            render={
                                                ({ field }) => {
                                                    return (
                                                        <TextField
                                                            label='Nombre'
                                                            color='secondary'
                                                            {...field}
                                                        />
                                                    )
                                                }
                                            }
                                        />
                                    </FormControlBox>
                                    <FormControlBox>
                                        <Controller
                                            control={control}
                                            name='nif'
                                            rules={{ required: true }}
                                            render={
                                                ({ field }) => {
                                                    return (
                                                        <TextField
                                                            label='NIF'
                                                            color='secondary'
                                                            {...field}
                                                        />
                                                    )
                                                }
                                            }
                                        />
                                        {errors.nif && (
                                            <small className='text-red-600'>
                                                Requerido
                                            </small>
                                        )}
                                    </FormControlBox>
                                    <FormControlBox>
                                        <InputLabel id='tarifa'>Tarifa aplicable</InputLabel>
                                        <Controller
                                            control={control}
                                            name='applicableRate'
                                            rules={{ required: true }}
                                            render={
                                                ({ field }) => {
                                                    return (
                                                        <Select
                                                            label='Tarifa aplicable'
                                                            labelId='tarifa'
                                                            color='secondary'
                                                            autoWidth
                                                            sx={{
                                                                minWidth: '235px'
                                                            }}
                                                            {...field}
                                                        >
                                                            <MenuItem value='0.5'>0.5</MenuItem>
                                                            <MenuItem value='0.75'>0.75</MenuItem>
                                                            <MenuItem value='2.5'>2.5</MenuItem>
                                                        </Select>
                                                    )
                                                }
                                            }
                                        />
                                    </FormControlBox>
                                </Col>
                                <Col>
                                    <Typography>
                                        Datos de la persona responsable:
                                    </Typography>
                                    <FormControlBox>
                                        <Controller
                                            control={control}
                                            name='responsiblePerson.name'
                                            rules={{ required: true }}
                                            render={
                                                ({ field }) => {
                                                    return (
                                                        <TextField
                                                            label='Nombre del responsable'
                                                            {...field}
                                                            color='secondary'
                                                        />
                                                    )
                                                }
                                            }
                                        />
                                        {errors?.responsiblePerson?.name && (
                                            <small className='text-red-600'>
                                                Requerido
                                            </small>
                                        )}
                                    </FormControlBox>
                                    <FormControlBox>
                                        <Controller
                                            control={control}
                                            name='responsiblePerson.surname'
                                            render={
                                                ({ field }) => {
                                                    return (
                                                        <TextField
                                                            {...field}
                                                            label='Apellidos del responsable'
                                                            color='secondary'
                                                        />
                                                    )
                                                }
                                            }
                                        />
                                    </FormControlBox>
                                    <FormControlBox>
                                        <Controller
                                            control={control}
                                            name='responsiblePerson.telephone'
                                            rules={{ required: true }}
                                            render={
                                                ({ field }) => {
                                                    return (
                                                        <TextField
                                                            {...field}
                                                            label='Teléfono del responsable'
                                                            color='secondary'
                                                        />
                                                    )
                                                }
                                            }
                                        />
                                        {errors?.responsiblePerson?.telephone && (
                                            <small className='text-red-600'>
                                                Requerido
                                            </small>
                                        )}
                                    </FormControlBox>
                                </Col>
                            </Row>
                        </TabPanel>
                        <TabPanel value={tab} index={1}>
                            <Container>
                                <Row>
                                    <Col>
                                        <FormControlBox>
                                            <Typography>
                                                ¿Desea agregar lugares a esta entidad?
                                            </Typography>
                                            <Radio.Group
                                                label='Agregar lugares'
                                                defaultValue='0'
                                                onChange={e => setAddPlaces(e === '1')}
                                                value={addPlaces ? '1' : '0'}
                                            >
                                                <Radio value='1'>Si</Radio>
                                                <Radio value='0'>No</Radio>
                                            </Radio.Group>
                                        </FormControlBox>
                                    </Col>
                                        <FormControlBox>
                                            
                                        </FormControlBox>
                                    <Col>
                                    </Col>
                                </Row>
                            </Container>
                        </TabPanel>
                        <button
                            type='submit'
                            className={
                                `absolute bottom-0 pt-2 pb-2 pl-3 pr-3 border rounded-lg text-white font-bold shadow-lg hover:bg-purple-500 active:bg-purple-400 active:translate-y-2 transition-all ease-in-out duration-200 ${Object.keys(errors).length ? ' bg-red-600 ' : 'bg-green-600 '}`
                            }
                        >
                            Enviar
                        </button>
                    </RoundedBox>
                </form>
            </div>
        </Layout>
    )

}