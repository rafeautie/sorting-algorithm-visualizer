import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import FormControl from '@material-ui/core/FormControl';

const marks = {
  speed: [
    {
      value: 0,
      label: 'Slow',
    },
    {
      value: 1000,
      label: 'Fast',
    },
  ],
  lines: [
    {
      value: 0,
      label: '0',
    },
    {
      value: 1000,
      label: '1000',
    },
  ]
};

const titles = {
  speed: 'Speed',
  lines: 'Lines'
}


export default ({ type, onChangeCommitted, value, min}) => {
  return (
    <FormControl className="slider-container">
      <Typography id="discrete-slider-custom" gutterBottom>
        {titles[type]}
      </Typography>
      <Slider
        defaultValue={value}
        max={1000}
        min={min || 0}
        aria-labelledby="continuous-slider"
        valueLabelDisplay="auto"
        marks={marks[type]}
        onChangeCommitted={onChangeCommitted}
      />
    </FormControl>
  );
}
