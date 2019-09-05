import React from 'react';
import { Container } from './MenuStyle';

const Menu = ({ handleChange, handleShuffle, numOfLines }) => {
  return (
    <Container>
      <input
        type="number"
        min="5"
        max="1000"
        value={numOfLines}
        onChange={({ target: { value } }) => handleChange(Number(value))}
      ></input>
      <button onClick={handleShuffle}></button>
    </Container>
  );
}

export default Menu;