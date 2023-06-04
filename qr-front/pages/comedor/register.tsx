import { Layout } from "@/base/Layout";
import { FormControlBox } from "@/components/boxes/FormControlBox";
import { RoundedBox } from "@/components/boxes/RoundedBox";
import { Button, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { TabPanel } from '@/components/tabs/TabPanel';
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Col, Container, Row } from "@nextui-org/react";
import { City, Province, State } from "@/interfaces/user.interface";
import stateApi from "@/api/state.api";
import provinceApi from "@/api/province.api";
import cityApi from "@/api/city.api";
import { AddressSelects } from "@/components/address/AddressSelects";
import { AddressInfo } from "@/components/user/registerUser/AddressInfo";
import commPlaceApi from "@/api/commPlace.api";


export default function ComedorRegister() {

    const { register, control, watch, formState: { errors }, handleSubmit, setValue } = useForm();
    const [tab, setTab] = useState(0);

    const onsubmit = (data: any) => commPlaceApi.createPlace(data);

    return (
        <Layout>
            <RoundedBox>
                <form
                    className="w-full pt-10"
                    onSubmit={handleSubmit(onsubmit)}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Tabs
                            textColor="secondary"
                            indicatorColor="secondary"
                            value={tab}
                            onChange={(event, newValue) => setTab(newValue)}
                        >
                            <Tab label="Datos" />
                            <Tab label='Dirección' />
                        </Tabs>
                    </Box>
                    <TabPanel value={tab} index={0}>
                        <FormControlBox>
                            <Controller
                                control={control}
                                name='name'
                                rules={{ required: true }}
                                render={
                                    ({ field }) => (
                                        <TextField
                                            {...field}
                                            label='Nombre'
                                            color='secondary'
                                        />
                                    )
                                }
                            />
                        </FormControlBox>
                        <FormControlBox>
                            <Controller
                                control={control}
                                name='cif'
                                rules={{ required: true }}
                                render={
                                    ({ field }) => (
                                        <TextField
                                            {...field}
                                            label="CIF"
                                            color='secondary'
                                        />
                                    )
                                }
                            />
                        </FormControlBox>
                        <FormControlBox>
                            <InputLabel color='secondary' id='type_id'>Tipo de lugar</InputLabel>
                            <Controller
                                control={control}
                                name='type'
                                rules={{ required: false }}
                                render={
                                    ({ field }) => (
                                        <Select
                                            {...field}
                                            color='secondary'
                                            fullWidth
                                            label="Tipo de lugar"
                                            labelId='type_id'
                                            displayEmpty
                                            sx={{
                                                width: '235px'
                                            }}
                                        >
                                            <MenuItem value='community kitchen'>Comedor</MenuItem>
                                            <MenuItem value='company store'>Economato</MenuItem>
                                        </Select>
                                    )
                                }
                            />
                        </FormControlBox>
                    </TabPanel>
                    <TabPanel value={tab} index={1}>
                        <AddressInfo control={control} watch={watch} setValue={setValue} />
                    </TabPanel>
                    <div>
                        <Button
                            variant='outlined'
                            color="secondary"
                            type='submit'
                        >
                            Enviar
                        </Button>
                    </div>
                </form>
            </RoundedBox>
            <pre>
                {JSON.stringify(watch(), null, 2)}
            </pre>
        </Layout>
    )
}