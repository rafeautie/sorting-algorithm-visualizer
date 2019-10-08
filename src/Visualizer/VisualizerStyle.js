import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
`;

export const Canvas = styled.canvas`
  width: 100vw;
  min-height: ${isMobile ? 'calc(100vh - 56px)' : '100vh'};
`;