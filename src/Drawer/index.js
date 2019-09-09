import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Slider from './Slider';

import { Drawer } from './DrawerStyle.js';

export default ({ handleLineCountChange, handleShuffle, handleRun, setAlgo, algoToRun, numOfLines, toggleDrawer, isOpen }) => {
  const handleClickRun = () => {
    handleRun()
    toggleDrawer(false);
  }

  return (
    <Drawer
      anchor="bottom"
      open={isOpen}
      onClose={() => { toggleDrawer(false) }}
    >
      <div className="half">
        <FormControl className="select">
          <Select
            value={algoToRun}
            onChange={setAlgo}
            input={<Input name="algo" id="algo-select" />}
          >
            <MenuItem value={'mergeSort'}>Merge Sort</MenuItem>
            <MenuItem value={'insertionSort'}>Insertion Sort</MenuItem>
            <MenuItem value={'bubbleSort'}>Bubble Sort</MenuItem>
          </Select>
          <FormHelperText>Choose a sorting algorithm.</FormHelperText>
        </FormControl>
        <ButtonGroup className="button-group" aria-label="button group">
          <Button color="primary" onClick={handleClickRun}>Sort</Button>
          <Button color="secondary" onClick={handleShuffle}>Shuffle</Button>
        </ButtonGroup>
      </div>
      <div className="half">
        <Slider type="speed" min={1} />
        <Slider type="lines" onChangeCommitted={handleLineCountChange} value={numOfLines} />
      </div>
    </Drawer>
  )
}