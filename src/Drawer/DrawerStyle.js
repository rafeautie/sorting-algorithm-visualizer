import styled from 'styled-components';
import MuiDrawer from '@material-ui/core/Drawer';

export const Drawer = styled(MuiDrawer)`
  padding: 20px !important;

  button {
    min-width: 50%;
  }

  .half {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 45px 40px;
  }

  .select, .button-group{
    box-sizing: border-box;
    min-width: 100%;
    height: 40px;

    &:not(:last-child){
      margin-bottom: 27px;
    }
  }
  
  .MuiDrawer-paper {
    flex-direction: row;
    height: 405px;
  }

  .MuiSlider-mark {
    opacity: 0;
  }

  .slider-container {
    width: 100%;
  }
`;