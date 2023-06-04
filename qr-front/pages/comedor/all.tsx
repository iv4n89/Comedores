import commPlaceApi from "@/api/commPlace.api";
import { Layout } from "@/base/Layout";
import { CommPlace } from "@/interfaces/entity.interface";
import { Typography } from "@mui/material";
import { Card, Container, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";


export default function ComedorAll() {

    const [comedores, SetComedores] = useState([] as CommPlace[]);

    useEffect(() => {
        commPlaceApi.getAllPlaces().then(SetComedores);
    }, [])

    return (
        <Layout>
            <Container fluid>
                <Grid.Container gap={2} justify='center'>
                    {
                        comedores.map(com => (
                            <Grid xs={4} key={com.id}>
                                <Card
                                    isHoverable
                                    isPressable
                                >
                                    <Card.Header
                                        style={{
                                            backgroundColor: 'lightgreen',
                                            margin: 0
                                        }}
                                    >
                                        <Typography>
                                            {com.name}
                                        </Typography>
                                    </Card.Header>
                                    <Card.Body>
                                        <Typography>
                                            Tipo: {com.type === 'community kitchen' ? 'Comedor' : 'Economato'}
                                        </Typography>
                                        <div>
                                            <span>
                                                Dirección:
                                            </span>
                                            <div className="rounded-md border border-green-400 p3 mt-2">
                                                <label>
                                                    {com?.address?.addrType} {com?.address?.streetName} Número {com?.address?.streetNumber}
                                                </label>
                                                <br />
                                                <label>
                                                    {com?.address?.city?.name}{com?.address?.city && ', '} {com?.address?.city?.province?.name}
                                                </label>
                                                <br />
                                                <label>
                                                    {com?.address?.city?.postalCode.split(',')[0]}
                                                </label>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid.Container>
            </Container>
        </Layout>
    )
}