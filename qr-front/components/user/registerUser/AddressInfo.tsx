import React from 'react'
import { Controller } from 'react-hook-form'
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';

interface Props {
    control: any;
}

export const AddressInfo = ({ control }: Props) => {
    return (
        <div className='w-full'>
            <div className="mb-3">
                <label className='pl-32'>Dirección: </label>
                <div className='flex gap-5 justify-evenly'>
                <div>
                <div className="mb-2 mt-2">
                    <Controller
                        control={ control }
                        name='address.postalCode'
                        render={
                            ({ field }) => {
                                return (
                                    <TextField label='Código postal' color='secondary' { ...field } />
                                )
                            }
                        }
                    />
                </div>
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
                                    <TextField 
                                     
                                        label='Nombre de Calle' 
                                        color='secondary' 
                                        {...field} 
                                    />
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
                                    <TextField 
                                     
                                        label='Número' 
                                        color='secondary' 
                                        {...field} 
                                    />
                                )
                            }
                        }
                    ></Controller>
                </div>
                </div>
                <div className='mt-2'>
                <div className="mb-2">
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
                </div>
                <div className="mb-2">
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
                </div>
                <div className="mb-2">
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
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}
