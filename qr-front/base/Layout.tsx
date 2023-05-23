import { Container } from '@mui/material'
import { Navbar } from '@nextui-org/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: Props) => {

    const { route } = useRouter();

    return (
        <>
            <Navbar
                style={{
                    marginBottom: '50px',
                }}
                disableShadow
                disableBlur
                containerCss={{
                    backgroundColor: 'rgb(138,20,209)',
                    paddingBottom: '$10',
                }}
                height={80}
                maxWidth={'fluid'}
            >
                <Navbar.Brand>
                    <Image
                        src="https://i.ibb.co/GC32brd/PICSE-transformed.png"
                        alt="PICSE-transformed"
                        width={90}
                        height={90}
                    />
                </Navbar.Brand>
                <Navbar.Content className='pt-3'>
                    <Navbar.Link
                        href='/user/register'
                        activeColor='success'
                        variant='highlight-solid'
                        isActive={route.includes('/user/register')}
                        style={{
                            color: 'white'
                        }}
                    > Beneficiarios </Navbar.Link>
                    <Navbar.Link
                        href='#'
                        activeColor='success'
                        variant='highlight-solid'
                        style={{
                            color: 'white'
                        }}
                    > Comedores </Navbar.Link>
                    <Navbar.Link
                        href='/entidad/register'
                        activeColor='success'
                        variant='highlight-solid'
                        isActive={route.includes('/entidad/register')}
                        style={{
                            color: 'white'
                        }}
                    > Entidades </Navbar.Link>
                </Navbar.Content>
                <Navbar.Content className='pt-3'>
                    <Navbar.Link
                        href='#'
                        activeColor='success'
                        variant='highlight-solid'
                        style={{
                            color: 'white'
                        }}
                    > Inciar Sesión </Navbar.Link>
                    <Navbar.Link
                        href='#'
                        activeColor='success'
                        variant='highlight-solid'
                        style={{
                            color: 'white'
                        }}
                    > Registrarse </Navbar.Link>
                </Navbar.Content>
            </Navbar>
            <Container maxWidth='md' className='pt-5'>
                {children}
            </Container>
        </>
    )
}
