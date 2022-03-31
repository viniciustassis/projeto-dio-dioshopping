import React from 'react';
import { Box, Container, Grid } from '@material-ui/core/';

const Footer = () => {
    return(
        <footer>
            <Box margin={5}>
                <Container fixed>
                    <Grid container spacing={5}>
                        <Box borderBottom={3} width="100vw">Estudo do Projeto desenvolvendo front-end com React da DIO</Box>
                    </Grid>
                </Container>
            </Box>
        </footer>
        
    )
}

export default Footer;