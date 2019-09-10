import React from 'react';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default () => {
  return (
    <Card className="sliders">
      <CardContent >
        <Typography color="textSecondary" gutterBottom>Options</Typography>

        <CustomSlider type="speed" min={1} />
        <CustomSlider type="lines" min={5} max={1000}/>
      </CardContent>
    </Card>
  );
  // onChangeCommitted={handleLineCountChange} value={numOfLines}
}

const titles = {
  speed: 'Speed',
  lines: 'Lines'
}

const CustomSlider = ({ type, onChangeCommitted, value, min, max }) => {
  return (
    <>
      <Typography id="discrete-slider-custom" gutterBottom>
        {titles[type]}
      </Typography>
      <Slider
        // defaultValue={value}
        max={max || 100}
        min={min || 0}
        aria-labelledby="continuous-slider"
        valueLabelDisplay="auto"
        // onChangeCommitted={onChangeCommitted}
      />
    </>
  );
}