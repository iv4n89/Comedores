import React from 'react'
import { Controller } from 'react-hook-form';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';

interface Props {
    control: any;
}

export const PersonalInfo = ({ control }: Props) => {
    return (
        <div className='w-full'>
            <label className='pl-32'>Datos personales:</label>
            <div className='flex gap-5 justify-evenly'>
                <div>
                    <div className='mb-3 mt-2'>
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
                </div>
                <div>
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
            </div>

        </div>
    )
}
