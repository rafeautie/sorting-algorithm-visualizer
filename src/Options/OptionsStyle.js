import styled from 'styled-components';
import BugReportRoundedIcon from '@material-ui/icons/BugReportRounded';

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

  .up-arrow {
    position: absolute;
    right: 33px;
    top: 159px;
    color: white;
    font-size: 2em;
  }
`;

export const BugReport = styled(BugReportRoundedIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
  transition: color 0.5s, transform .7s !important;

  color: rgba(0, 0, 0, 0.24);
  font-size: 18px !important;
  
  transform: rotate(0deg);
  
  &:hover {
    transform: rotate(-30deg);
    color: rgba(0, 0, 0, 0.54);
  }
`;