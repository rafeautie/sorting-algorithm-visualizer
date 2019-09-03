import React, { useState } from 'react';
import { Container } from './AppStyle';

import Visualizer from './Visualizer';
import Menu from './Menu'

function App() {
  return (
    <Container >
      <Visualizer />
      <Menu />
    </Container>
  );
}

export default App;
