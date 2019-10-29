import styled from 'styled-components';

import Cia from './../images/cia.png';
import CiaStatus from './../images/cia-status.png';

export const Top = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  background-color: #2a7294;
  position: fixed;
  z-index: 1000;
  padding-right: 50px;
  padding-left: 25px;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: #9dcbe1;
  }

  .logo {
    display: flex;
    align-items: flex-end;

    span {
      margin-bottom: -3px;
      color: #9dcae0;
      font-size: 10px;
      margin-left: 10px;
      width: 170px;
    }
  }

  .right-actions {
    display: inline-flex;
    justify-content: space-between;
    width: 150px;

    .cia {
      content: '';
      border-radius: 50px;
      width: 32px;
      height: 32px;
      background-image: url(${Cia});
      position: relative;

      .status {
        background-image: url(${CiaStatus});
        background-size: 10px;
        width: 12px;
        height: 12px;
        bottom: -2px;
        right: -2px;
        background-repeat: no-repeat;
        position: absolute;
      }
    }

    .flex {
      display: flex;
    }
  }
`;
