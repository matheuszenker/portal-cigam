import React from 'react';

// import { Container } from './styles';

const ImageLink = ({ Imagem, Caminho, Nome }) => {
  return (
    <a href={Caminho} className="image-link">
      <Imagem />
      <p>{Nome}</p>
    </a>
  );
};

export default ImageLink;
