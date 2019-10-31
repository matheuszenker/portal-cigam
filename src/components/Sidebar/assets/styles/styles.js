import styled from 'styled-components';

export const Container = styled.div`
  width: 50px;
  position: absolute;
  height: 100%;

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background-color: #1a5572;
    cursor: pointer;
  }

  .menu-options {
    width: 50px;
    overflow: visible;
    z-index: 999;
    background: #3b96c2;
    height: 100%;
    -webkit-transition: width 0.3s; /* For Safari 3.1 to 6.0 */
    transition: width 0.3s;

    .image-link {
      text-align: center;
      flex-grow: 1;
      width: 100%;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      padding: 20px 0px;

      :hover {
        background: #9dcbe1;
        opacity: 0.8;
      }

      p {
        font-size: 13px;
        line-height: 1.15;
        color: #ffffff;
        max-width: 100%;
        margin-top: 10px;
        opacity: 0;
        display: none;
      }
    }

    &.is-open {
      width: 90px;
      p {
        display: block;
        opacity: 1;
      }
    }
  }
`;
