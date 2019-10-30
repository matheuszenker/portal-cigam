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

import ImageLink from '../ImageLink';

const PortalsMenu = () => {
  return (
    <Fade top>
      <PortalsMenuBox>
        <h4>PORTAIS</h4>
        <div className="container-portal">
          <ImageLink Imagem={ImagemPortalCigam} Caminho="/" Nome="CIGAM" />
          <ImageLink
            Imagem={ImagemPortalCliente}
            Caminho="/portal-cliente"
            Nome="Cliente"
          />
          <ImageLink
            Imagem={ImagemPortalConhecimento}
            Caminho="/portal-conhecimento"
            Nome="Conhecimento"
          />
          <ImageLink
            Imagem={ImagemPortalCrm}
            Caminho="/portal-crm"
            Nome="CRM"
          />
          <ImageLink
            Imagem={ImagemPortalFornecedor}
            Caminho="/portal-fornecedor"
            Nome="Fornecedor"
          />
          <ImageLink
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
