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
                prova { giorno}
            </div>
        </>
    )
}



function Calendario() {
    const [ dayUserChosen ] = useRecoilState(selectedDate);



    const [giorno, setGiorno] = React.useState('')
    const value = { giorno, setGiorno }
    // console.log(context)
    return (
        <GlobalContext.Provider value={value}>
            <div>
                {giorno}
                <Prova />
                <Prova2 />
                <DaySelect />
            </div>
            Calendario page {dayUserChosen}

        </GlobalContext.Provider>

        // <Grid container spacing={2}>
        //     <Grid item xs={8}>
        //         <FormControl fullWidth>
        //             <InputLabel id="demo-simple-select-label">Giorno</InputLabel>
        //             <Select
        //                 labelId="demo-simple-select-label"
        //                 id="demo-simple-select"
        //                 value={age}
        //                 label="Giorno"
        //                 onChange={handleChange}
        //             >
        //                 <MenuItem value={10}>Ten</MenuItem>
        //                 <MenuItem value={20}>Twenty</MenuItem>
        //                 <MenuItem value={30}>Thirty</MenuItem>
        //             </Select>
        //         </FormControl>
        //     </Grid>
        //     <Grid item xs={4}>
        //         <Item>xs=4</Item>
        //     </Grid>
        //     <Grid item xs={4}>
        //         <Item>xs=4</Item>
        //     </Grid>
        //     <Grid item xs={8}>
        //         <Item>xs=8</Item>
        //     </Grid>
        // </Grid>

    )
}

export default Calendario;