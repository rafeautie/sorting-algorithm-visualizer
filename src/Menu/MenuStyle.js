import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 75px;
  background: white;
  z-index: 9999;

  .ig {
    width: 155px;
  }
`;

export const Input = styled.input`
  margin-left: 25px;
  border-radius: 5px;
  padding: 12px;
  outline: none;
  border: none;
  font-size: 1rem;
`;

export const Button = styled.button`
  margin-left: 25px;
  border-radius: 5px;
  border: none;
  padding: 12px;
  outline: none;
  font-size: 15px;
`;