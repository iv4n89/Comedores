import userApi from '@/api/user.api';
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
        <div className=''>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label>Nombre: </label>
                    <Controller
                        control={control}
                        name='name'
                        rules={{ required: true }}
                        render={
                            ({ field }) => {
                                return (
                                    <input type='text' { ...field } />
                                );
                            }
                        }
                    ></Controller>
                </div>
                <div className="mb-3">
                    <label>Apellidos: </label>
                    <Controller
                        control={control}
                        name='surname'
                        rules={{ required: false }}
                        render={
                            ({ field }) => {
                                return (
                                    <input type='text' { ...field } />
                                )
                            }
                        }
                    ></Controller>
                </div>
                <div className="mb-3">
                    <label>Teléfono: </label>
                    <Controller
                        control={ control }
                        name='telNumber'
                        rules={{ required: true }}
                        render={
                            ({ field }) => {
                                return <input type='tel' { ...field } />
                            }
                        }
                    ></Controller>
                </div>
                <div className='mb-3'>
                    <label>Documento de identidad: </label>
                    <div className="mb-2">
                        <label>Tipo: </label>
                        <Controller
                            control={ control }
                            name='identityDoc.docType'
                            render={
                                ({ field }) => {
                                    return (
                                        <select {...field}>
                                            <option disabled>--Seleccione tipo--</option>
                                            <option value='DNI'>DNI</option>
                                            <option value='NIE'>NIE</option>
                                            <option value='Passport'>Passport</option>
                                        </select>
                                    )
                                }
                            }
                        ></Controller>
                    </div>
                    <div className='mb-2'>
                        <label>Número de documento: </label>
                        <Controller
                            control={control}
                            name='identityDoc.idNumber'
                            rules={{ required: true }}
                            render={
                                ({ field }) => {
                                    return (
                                        <input type='text' { ...field } />
                                    )
                                }
                            }
                        ></Controller>
                    </div>
                </div>
                <div className="mb-3">
                    <label>Dirección: </label>
                    <div className="mb-2">
                        <label>Tipo de vía: </label>
                        <Controller
                            control={control}
                            name='address.addrType'
                            render={
                                ({ field }) => {
                                    return (
                                        <select { ...field }>
                                            <option disabled>--Seleccione tipo--</option>
                                            <option value='calle'>Calle</option>
                                            <option value='plaza'>Plaza</option>
                                            <option value="via">Vía</option>
                                            <option value="paseo">Paseo</option>
                                        </select>
                                    )
                                }
                            }
                        ></Controller>
                    </div>
                    <div className="mb-2">
                        <label>Nombre de calle: </label>
                        <Controller
                            control={control}
                            name='address.streetName'
                            rules={{ required: true }}
                            render={
                                ({ field }) => {
                                    return (
                                        <input type='text' { ...field } />
                                    )
                                }
                            }
                        ></Controller>
                    </div>
                    <div className="mb-2">
                        <label>Número: </label>
                        <Controller
                            control={control}
                            name='address.streetNumber'
                            rules={{ required: true }}
                            render={
                                ({ field }) => {
                                    return (
                                        <input type='number' { ...field } />
                                    )
                                }
                            }
                        ></Controller>
                    </div>
                    <div className="mb-2">
                        <label>Planta: </label>
                        <Controller
                            control={control}
                            name='address.floor'
                            rules={{ required: false }}
                            render={
                                ({ field }) => {
                                    return (
                                        <input type='number' { ...field } />
                                    )
                                }
                            }
                        ></Controller>
                    </div>
                    <div className="mb-2">
                        <label>Puerta: </label>
                        <Controller
                            control={ control }
                            name='address.door'
                            rules={{ required: false }}
                            render={
                                ({ field }) => {
                                    return (
                                        <input type='text' { ...field } />
                                    )
                                }
                            }
                        ></Controller>
                    </div>
                    <div className="mb-2">
                        <label>Información extra: </label>
                        <Controller
                            control={control}
                            name='address.extraInfo'
                            rules={{ required: false }}
                            render={
                                ({ field }) => {
                                    return (
                                        <textarea { ...field } />
                                    )
                                }
                            }
                        ></Controller>
                    </div>
                </div>
                <div className="mb-3 pt-3">
                    <button 
                        type='submit'
                        className='pt-2 pb-2 pl-3 pr-3 border rounded-lg bg-green-600 text-white font-bold shadow-lg hover:bg-blue-600 active:bg-blue-400 active:translate-y-2 transition-all ease-in-out duration-100'
                    >Enviar</button>
                </div>
            </form>
        </div>
    )

}