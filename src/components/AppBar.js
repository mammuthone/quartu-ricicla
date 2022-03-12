import React from 'react';
import ReactDOM from 'react-dom';
import { AppBar, Typography, Toolbar, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#07813E',
        },
        secondary: {
            main: '#f44336',
        },
    },
});

const toolbarStyle = {
    minHeight: '120px',
};




function AppBarCustom() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar style={toolbarStyle} color='primary' position="static">
                <Toolbar>
                    <Box mt={2}>
                        <Typography variant="h3" component="div">
                            Lavaggio Strade Quartu S.E.
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export { AppBarCustom };