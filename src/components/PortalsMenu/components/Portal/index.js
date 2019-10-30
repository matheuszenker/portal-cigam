import React from 'react';

// import { Container } from './styles';

const Portal = ({ Imagem, Caminho, Nome }) => {
  return (
    <a href={Caminho} className="portal">
      <Imagem />
      <p>{Nome}</p>
    </a>
  );
};

export default Portal;
