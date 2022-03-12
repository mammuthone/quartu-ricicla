import Calendario from "./Calendario";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function Home() {
    return (
        <Container maxWidth='lg'>
            <Calendario />
        </Container>
    )
}

export { Home }