import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListSubheader from '@mui/material/ListSubheader';
import Select from '@mui/material/Select';
import { useRecoilState } from 'recoil';
import { currentMonthCalendar, selectedDate } from '../../atom';
import './DaySelect.css';

function DaySelect() {

  const [ month ] = useRecoilState(currentMonthCalendar);
  const [ selectedDay, setSelectedDate ] = useRecoilState(selectedDate);
  const dayLabels = (month) => {
    const labels = Object.keys(month).map((key) => month[key].map((day) => `${day}, ${key}`)).flat().sort((a,b) => Number(a.split(",")[0]) - Number(b.split(",")[0]));
    return labels;
  }
  const menuItems = (month) => {


    return [ 
      <ListSubheader>Settimana 1</ListSubheader>
      ,
      ...dayLabels(month).map((label, index) => (
      (index + 1) % 7 === 0 ? (
      <>
        <ListSubheader>Settimana {(index + 1) / 7 + 1}</ListSubheader>
        <MenuItem value={label.split(",")[0]} name={label}>{label}</MenuItem>
      </> ) : (

      <MenuItem value={label.split(",")[0]} name={label}>{label}</MenuItem>)
    ))]
  }

  const setDate = (event) => {
    setSelectedDate(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">Seleziona il giorno</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedDay}
          label="Seleziona il giorno"
          onChange={setDate}
        >
          {menuItems(month)}
        </Select>
      </FormControl>
    </Box>
  );
}

DaySelect.propTypes = {};

DaySelect.defaultProps = {};

export default DaySelect;
