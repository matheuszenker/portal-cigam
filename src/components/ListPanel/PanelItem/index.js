import React from 'react';

import { Container } from './assets/styles/styles';

const PanelItem = ({ Data }) => {
  console.log(Data);
  return (
    <>
      {Data.map((item, key) => (
        <Container key={key}>
          <item.imagem />
          <div className="information">
            <h4>{item.titulo}</h4>
            <div className="sub-information">
              <div>{item.info1}</div>
              <div>{item.info2}</div>
            </div>
          </div>
        </Container>
      ))}
    </>
  );
};

export default PanelItem;
