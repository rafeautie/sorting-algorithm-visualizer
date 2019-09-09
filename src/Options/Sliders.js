import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

export default () => {
  return (
    <>
      <Typography color="textSecondary">Speed</Typography>
      <Slider type="speed" min={1} />

      <Typography color="textSecondary">Lines</Typography>
      <Slider type="lines"
      // onChangeCommitted={handleLineCountChange} value={numOfLines}
      />
    </>
  );
}