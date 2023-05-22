import { Controller, useForm } from 'react-hook-form';
import { Layout } from '@/base/Layout';

export default function EntidadRegister() {

    const { control, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Layout>
            <div>
                <form onsubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                        <Controller
                            control={ control }
                            name='name'
                            render={
                                ({ field }) => {
                                    return (
                                        <TextField
                                            label='Nombre'
                                            color='secondary'
                                            { ...field }
                                        />
                                    )
                                }
                            }
                        />
                    </div>
                </form>
            </div>
        </Layout>
    )

}