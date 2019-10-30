import React, { Component } from 'react';

import { Container } from './assets/styles/styles';
import Menu from './assets/images/menu.svg';

import {
  ImagemHome,
  ImagemArquivos,
  ImagemContatos,
  ImagemEmpresasPessoas,
  ImagemAgenda,
} from './assets/images';

import ImageLink from '../ImageLink';

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <div className="menu">
          <img src={Menu} alt="Menu" />
        </div>

        <ImageLink Imagem={ImagemHome} Caminho="/" Nome="Dashboard" />
        <ImageLink
          Imagem={ImagemArquivos}
          Caminho="/arquivos"
          Nome="Arquivos"
        />
        <ImageLink
          Imagem={ImagemContatos}
          Caminho="/contatos"
          Nome="Contatos"
        />
        <ImageLink
          Imagem={ImagemEmpresasPessoas}
          Caminho="/empresas-pessoas"
          Nome="Empresas e Pessoas"
        />
        <ImageLink Imagem={ImagemAgenda} Caminho="/agenda" Nome="Agenda" />
      </Container>
    );
  }
}
