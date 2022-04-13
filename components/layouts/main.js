import Head from 'next/head'
import {Box, Container} from "@chakra-ui/react";
import Navbar from "../navbar";
const Main = ({children , router}) =>{
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width:device-width, initial-scale=1"/>

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>Alex Zamolotskikh - Homepage</title>

            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main