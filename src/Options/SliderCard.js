import React from 'react';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export default ({ isRunning, lineCount, updateLineCount, setNewLineCollectionBaseOnLineCount, speed, setSpeed }) => {
  return (
    <Card className="sliders">
      <ArrowDropUpIcon className="up-arrow" />
      <CardContent >
        <CustomSlider
          onChange={setSpeed}
          type="speed"
          value={speed}
          min={1}
        />
        <CustomSlider
          disabled={isRunning}
          onChange={updateLineCount}
          onChangeCommitted={setNewLineCollectionBaseOnLineCount}
          value={lineCount}
          type="lines"
          min={5}
          max={200}
        />
      </CardContent>
    </Card>
  );
  // onChangeCommitted={handleLineCountChange} value={numOfLines}
}

const titles = {
  speed: 'Speed',
  lines: 'Lines'
}

const CustomSlider = (props) => {
  return (
    <>
      <Typography id="discrete-slider-custom" gutterBottom>
        {titles[props.type]}
      </Typography>
      <Slider
        {...props}
        max={props.max || 100}
        min={props.min || 0}
        aria-labelledby="continuous-slider"
        valueLabelDisplay="auto"
      />
    </>
  );
}