import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 7px;
  background-color: #fff;
  padding: 15px 20px;
  position: relative;
  margin-bottom: 30px;

  h3 {
    margin-bottom: 20px;
  }

  .container-image {
    background: #479055;
    position: absolute;
    top: -5px;
    right: 20px;
    width: 39.5px;
    height: 42px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      color: white;
    }
  }

  .panel-body {
    border-top: 1px solid #f3f2f0;
  }
`;
