import userApi from '@/api/user.api';
import { Layout } from '@/base/Layout';
import { NextButton } from '@/components/buttons/NextButton';
import { AddressInfo } from '@/components/user/registerUser/AddressInfo';
import { PersonalInfo } from '@/components/user/registerUser/PersonalInfo';
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
                    <div className='flex flex-col gap-10' style={{
                        alignItems: 'center'
                    }}>
                        <PersonalInfo control={control} />
                        <AddressInfo control={control} />
                    </div>
                    <div className="mb-3 pt-3 pl-28">
                        <NextButton/>
                    </div>
                </form>
            </div>
        </Layout>
    )

}