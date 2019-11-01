import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid #f3f2f0;
  padding: 10px 0px;
  display: flex;
  flex-direction: row;

  .information {
    padding: 0px 10px;
    width: 100%;

    h4 {
      color: #717171;
    }

    .sub-information {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 5px;
      font-size: 12px;
      line-height: 2;
      text-align: left;
      color: #8e8e8e;
    }
  }
`;
