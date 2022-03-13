import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import './SectorSelected.css';

const SectorSelected = () => (
  <div className="SectorSelected" data-testid="SectorSelected">
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={3}>
        Settore
      </Paper>
    </Box>

  </div>
);

SectorSelected.propTypes = {};

SectorSelected.defaultProps = {};

export default SectorSelected;
