import React from 'react';

import Home from './home.svg';
import Arquivos from './documento.svg';
import Contatos from './contatos.svg';
import EmpresasPessoas from './pessoa.svg';
import Agenda from './agenda.svg';

export const ImagemHome = () => (
  <img src={Home} alt="Home" height="20" width="20" />
);
export const ImagemArquivos = () => (
  <img src={Arquivos} alt="Home" height="22" width="16" />
);
export const ImagemContatos = () => (
  <img src={Contatos} alt="Home" height="19" width="19" />
);
export const ImagemEmpresasPessoas = () => (
  <img src={EmpresasPessoas} alt="Home" height="20" width="20" />
);
export const ImagemAgenda = () => (
  <img src={Agenda} alt="Home" height="20" width="22" />
);
