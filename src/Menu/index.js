import React from 'react';
import { Container } from './MenuStyle';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const Menu = ({ handleChange, handleShuffle, numOfLines }) => {
  return (
    <Container>
      <InputGroup className='ig'>
        <FormControl
          type="number"
          value={numOfLines}
          onChange={handleChange}
        />
        <InputGroup.Append>
          <Button
            variant="dark"
            onClick={handleShuffle}
          >Shuffle</Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
}

export default Menu;