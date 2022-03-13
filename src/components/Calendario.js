import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { GlobalContext } from '../context/context';
import DaySelect from './DaySelect/DaySelect';

import { currentMonthCalendar, selectedDate } from '../atom';
import { useRecoilState } from 'recoil';
import SectorSelected from './SectorSelected/SectorSelected';
import RoadSelect from './RoadSelect/RoadSelect';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Prova() {
    const { setGiorno } = React.useContext(GlobalContext)
    return (
        <>
            <div>
                <button onClick={() => setGiorno(Math.random() * 25)} >ciao</button>
            </div>
        </>
    )
}
function Prova2() {
    const { giorno } = React.useContext(GlobalContext)
    return (
        <>
            <div>
                prova {giorno}
            </div>
        </>
    )
}

function Calendario() {
    const [dayUserChosen] = useRecoilState(selectedDate);
    const [giorno, setGiorno] = React.useState('')
    const [strada, setStrada] = React.useState('');
    const value = { giorno, setGiorno }
    // console.log(context)
    return (
        <GlobalContext.Provider value={value}>
            {/* <DaySelect />
            <SectorSelected /> */}

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <DaySelect />
                </Grid>
                <Grid item xs={4}>
                    <SectorSelected />
                </Grid>
                <Grid item xs={4}>
                    <RoadSelect />
                </Grid>
            </Grid>
        </GlobalContext.Provider>



    )
}

export default Calendario;