import React, { Component } from 'react';

import { Container } from './assets/styles/styles';
import ImageMenu from './assets/images/menu.svg';
import ImageMenuClose from './assets/images/close.svg';

import {
  ImagemHome,
  ImagemArquivos,
  ImagemContatos,
  ImagemEmpresasPessoas,
  ImagemAgenda,
} from './assets/images';

import ImageLink from '../ImageLink';

export default class Sidebar extends Component {
  state = {
    openMenu: false,
  };

  handleOpenMenu = () => {
    this.setState({ openMenu: !this.state.openMenu });
  };

  render() {
    const { openMenu } = this.state;

    return (
      <Container>
        <div className="menu">
          {!openMenu && (
            <img src={ImageMenu} alt="Menu" onClick={this.handleOpenMenu} />
          )}
          {openMenu && (
            <img
              src={ImageMenuClose}
              alt="Menu"
              onClick={this.handleOpenMenu}
            />
          )}
        </div>

        <div className={`menu-options ${openMenu ? 'is-open' : ''}`}>
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
        </div>
      </Container>
    );
  }
}
