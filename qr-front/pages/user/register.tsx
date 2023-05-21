import userApi from '@/api/user.api';
import { Layout } from '@/base/Layout';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

export default function RegisterUser() {

    const {
        control,
        reset,
        watch,
        formState:
        {
            errors,
            isSubmitSuccessful,
            isSubmitted,
            isSubmitting
        },
        handleSubmit,
        register,
    } = useForm();
    const { push } = useRouter();
    const onSubmit = (data: any) => userApi.createUser(data).then((res) => res!.status === 201 && push({ pathname: '/user/all' }));

    return (
        <Layout>
            <div className=''>
                <span
                    className='flex justify-center font-semibold text-3xl pb-10'
                > Registro de Beneficiario </span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-3 justify-around'>
                        <div>
                            <label>Datos personales:</label>
                            <div className='mb-3'>
                                <Controller
                                    control={control}
                                    name='name'
                                    rules={{ required: true }}
                                    render={
                                        ({ field }) => {
                                            return (
                                                <TextField label='Nombre' color='secondary' {...field} />
                                            );
                                        }
                                    }
                                ></Controller>
                            </div>
                            <div className="mb-3">
                                <Controller
                                    control={control}
                                    name='surname'
                                    rules={{ required: false }}
                                    render={
                                        ({ field }) => {
                                            return (
                                                <TextField label='Apellidos' color='secondary' {...field} />
                                            )
                                        }
                                    }
                                ></Controller>
                            </div>
                            <div className="mb-3">
                                <Controller
                                    control={control}
                                    name='telNumber'
                                    rules={{ required: true }}
                                    render={
                                        ({ field }) => {
                                            return <TextField label='Teléfono' color='secondary' {...field} />
                                        }
                                    }
                                ></Controller>
                            </div>
                            <div className='mb-3'>
                                <label>Documento de identidad: </label>
                                <div className="mb-2">
                                    <InputLabel color='secondary' id='doc-type'>Tipo</InputLabel>
                                    <Controller
                                        control={control}
                                        name='identityDoc.docType'
                                        render={
                                            ({ field }) => {
                                                return (
                                                    <Select
                                                        {...field}
                                                        color='secondary'
                                                        fullWidth
                                                        label='Tipo'
                                                        labelId='doc-type'
                                                    >
                                                        <MenuItem value='DNI'> DNI </MenuItem>
                                                        <MenuItem value='NIE'> NIE </MenuItem>
                                                        <MenuItem value='Passport'> Pasaporte </MenuItem>
                                                    </Select>
                                                )
                                            }
                                        }
                                    ></Controller>
                                </div>
                                <div className='mb-2'>
                                    <Controller
                                        control={control}
                                        name='identityDoc.idNumber'
                                        rules={{ required: true }}
                                        render={
                                            ({ field }) => {
                                                return (
                                                    <TextField label='Número de documento' color='secondary' {...field} />
                                                )
                                            }
                                        }
                                    ></Controller>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-3">
                                <label>Dirección: </label>
                                <div className="mb-2">
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
                                </div>
                                <div className="mb-2">
                                    <Controller
                                        control={control}
                                        name='address.streetName'
                                        rules={{ required: true }}
                                        render={
                                            ({ field }) => {
                                                return (
                                                    <TextField label='Nombre de Calle' color='secondary' {...field} />
                                                )
                                            }
                                        }
                                    ></Controller>
                                </div>
                                <div className="mb-2">
                                    <Controller
                                        control={control}
                                        name='address.streetNumber'
                                        rules={{ required: true }}
                                        render={
                                            ({ field }) => {
                                                return (
                                                    <TextField label='Número' color='secondary' {...field} />
                                                )
                                            }
                                        }
                                    ></Controller>
                                </div>
                                <div className="mb-2">
                                    <Controller
                                        control={control}
                                        name='address.floor'
                                        rules={{ required: false }}
                                        render={
                                            ({ field }) => {
                                                return (
                                                    <TextField label='Planta' color='secondary' {...field} />
                                                )
                                            }
                                        }
                                    ></Controller>
                                </div>
                                <div className="mb-2">
                                    <Controller
                                        control={control}
                                        name='address.door'
                                        rules={{ required: false }}
                                        render={
                                            ({ field }) => {
                                                return (
                                                    <TextField label='Puerta' color='secondary' {...field} />
                                                )
                                            }
                                        }
                                    ></Controller>
                                </div>
                                <div className="mb-2">
                                    <Controller
                                        control={control}
                                        name='address.extraInfo'
                                        rules={{ required: false }}
                                        render={
                                            ({ field }) => {
                                                return (
                                                    <TextField label='Información extra' color='secondary' multiline rows={4} {...field} />
                                                )
                                            }
                                        }
                                    ></Controller>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 pt-3 pl-24">
                        <button
                            type='submit'
                            className='pt-2 pb-2 pl-3 pr-3 border rounded-lg bg-green-600 text-white font-bold shadow-lg hover:bg-purple-500 active:bg-purple-400 active:translate-y-2 transition-all ease-in-out duration-200'
                        >Siguiente</button>
                    </div>
                </form>
            </div>
        </Layout>
    )

}