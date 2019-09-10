import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

export default ({
  toggleOptionsCard,
  algoToRun,
  setAlgo,
  shuffleLineCollection
 }) => {

  return (
    <Card raised={true}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>Algorithm</Typography>

        <FormControl className="select">
          <Select
            value={algoToRun}
            onChange={(e) => setAlgo(e.target.value)}
            input={<Input name="algo" id="algo-select" />}
            MenuProps={{
              disablePortal: true,
            }}
          >
            <MenuItem value={'mergeSort'}>Merge Sort</MenuItem>
            <MenuItem value={'insertionSort'}>Insertion Sort</MenuItem>
            <MenuItem value={'bubbleSort'}>Bubble Sort</MenuItem>
          </Select>
          <FormHelperText>Choose an algorithm.</FormHelperText>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button color="primary" >Sort</Button>
        <Button onClick={shuffleLineCollection} color="secondary" >Shuffle</Button>
        <Button onClick={toggleOptionsCard}>Options</Button>
      </CardActions>
    </Card>
  );

}