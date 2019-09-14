import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  
  .MuiCard-root {
    margin: 10px;
    opacity: 0.6;
    transition: opacity 0.4s;

    &:hover {
      opacity: 1;
    }
  }

  .select {
    width: 100%;
  }

  .stats .MuiCardContent-root {
    padding-bottom: 16px;
  }

  .up-arrow {
    position: absolute;
    right: 42px;
    top: 168px;
    color: white;
    font-size: 2em;
  }
`;