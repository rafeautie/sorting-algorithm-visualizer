import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import FormControl from '@material-ui/core/FormControl';

const marks = {
  speed: [
    {
      value: 5,
      label: 'Slow',
    },
    {
      value: 95,
      label: 'Fast',
    },
  ],
  lines: [
    {
      value: 2,
      label: '4',
    },
    {
      value: 95,
      label: '1000',
    },
  ]
};

const titles = {
  speed: 'Speed',
  lines: 'Lines'
}


export default ({ type, handleLineCountChange}) => {
  return (
    <FormControl className="slider-container">
      <Typography id="discrete-slider-custom" gutterBottom>
        {titles[type]}
      </Typography>
      <Slider
        defaultValue={50}
        aria-labelledby="continuous-slider"
        valueLabelDisplay="auto"
        marks={marks[type]}
        onChangeCommitted={handleLineCountChange}
      />
    </FormControl>
  );
}
