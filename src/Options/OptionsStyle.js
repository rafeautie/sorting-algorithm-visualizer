import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  margin: 10px;
  z-index: 2;

  .MuiCard-root {
    opacity: 0.6;
    transition: opacity 0.4s;

    &:hover {
      opacity: 1;
    }
  }

  .select {
    width: 100%;
  }

  .sliders {
    margin-top: 10px;
  }
`;