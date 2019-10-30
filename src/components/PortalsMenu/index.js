import React from 'react';
import Fade from 'react-reveal/Fade';

import { PortalsMenuBox } from './assets/styles/styles';
import {
  ImagemPortalCigam,
  ImagemPortalCliente,
  ImagemPortalConhecimento,
  ImagemPortalCrm,
  ImagemPortalFornecedor,
  ImagemPortalGerencial,
} from './assets/images/';

import Portal from './components/Portal';

const PortalsMenu = () => {
  return (
    <Fade top>
      <PortalsMenuBox>
        <h4>PORTAIS</h4>
        <div className="container-portal">
          <Portal Imagem={ImagemPortalCigam} Caminho="/" Nome="CIGAM" />
          <Portal
            Imagem={ImagemPortalCliente}
            Caminho="/portal-cliente"
            Nome="Cliente"
          />
          <Portal
            Imagem={ImagemPortalConhecimento}
            Caminho="/portal-conhecimento"
            Nome="Conhecimento"
          />
          <Portal Imagem={ImagemPortalCrm} Caminho="/portal-crm" Nome="CRM" />
          <Portal
            Imagem={ImagemPortalFornecedor}
            Caminho="/portal-fornecedor"
            Nome="Fornecedor"
          />
          <Portal
            Imagem={ImagemPortalGerencial}
            Caminho="/portal-gerencial"
            Nome="Gerencial"
          />
        </div>
      </PortalsMenuBox>
    </Fade>
  );
};

export default PortalsMenu;
