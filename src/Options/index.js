import React, { useState } from 'react';
import { AlgoSelect } from '../redux/containers';
import { SliderCard } from '../redux/containers';
import { Container } from './OptionsStyle';

export default () => {
  const [optionsVisible, toggleOptions] = useState(false)

  const toggleOptionsCard = () => {
    toggleOptions(!optionsVisible);
  }

  return (
    <Container>
      <AlgoSelect toggleOptionsCard={toggleOptionsCard} />
      {
        optionsVisible
          ? <SliderCard />
          : null
      }
    </Container>
  );
}