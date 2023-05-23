import { Controller, useForm } from 'react-hook-form';
import { Layout } from '@/base/Layout';
import { TextField, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Col, Button } from '@nextui-org/react';
import { RoundedBox } from '@/components/boxes/RoundedBox';
import { FormControlBox } from '@/components/boxes/FormControlBox';
import { EntityRequest } from '@/interfaces/entity.interface';
import { useRouter } from 'next/router';
import entityApi from '@/api/entity.api';

export default function EntidadRegister() {

    const { control, handleSubmit, watch, formState: { errors } } = useForm();
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <RoundedBox
                        sx={{
                            height: '35vh'
                        }}
                    >
                        <Col 
                            className='h-full'
                        >
                            <FormControlBox
                                rowStyle={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
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
                            <FormControlBox
                                rowStyle={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Controller
                                    control={control}
                                    name='nif'
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
                            </FormControlBox>
                            <FormControlBox
                                rowStyle={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <InputLabel id='tarifa'>Tarifa aplicable</InputLabel>
                                <Controller
                                    control={control}
                                    name='applicableRate'
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
                        <div className="mb-3 pt-3 pl-28 absolute bottom-2">
                            <button
                                type='submit'
                                className='pt-2 pb-2 pl-3 pr-3 border rounded-lg bg-green-600 text-white font-bold shadow-lg hover:bg-purple-500 active:bg-purple-400 active:translate-y-2 transition-all ease-in-out duration-200'
                            >
                                Enviar
                            </button>
                        </div>
                    </RoundedBox>
                </form>
            </div>
        </Layout>
    )

}