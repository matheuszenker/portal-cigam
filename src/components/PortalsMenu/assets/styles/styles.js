import styled from 'styled-components';

export const PortalsMenuBox = styled.div`
  position: absolute;
  top: 11px;
  right: 0px;
  padding: 20px 25px 0px 25px;
  max-height: 500px;
  width: 338px;
  background: #fff;
  border: 1px solid #e6e6e6;

  h4 {
    font-size: 12px;
    color: #717171;
  }

  .container-portal {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .image-link {
      text-align: center;
      flex-grow: 1;
      width: 33%;
      text-decoration: none;
      height: 100px;

      p {
        font-size: 13px;
        font-weight: 600;
        line-height: 1.15;
        color: #8e8e8e;
        word-wrap: break-word;
        max-width: 100%;
        margin-top: 10px;
      }
    }
  }
`;
