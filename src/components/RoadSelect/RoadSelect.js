import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { currentMonthCalendar, selectedDate, sectorAndRoads } from '../../atom';
import './RoadSelect.css';

const RoadSelect = () => (
  <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={sectorAndRoads['S1']}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Strada" />}
    />
);

RoadSelect.propTypes = {};

RoadSelect.defaultProps = {};

export default RoadSelect;
