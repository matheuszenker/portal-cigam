import styled from 'styled-components';

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
    }
  }
`;
