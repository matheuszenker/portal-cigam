import React from 'react';

import UserMenu from '../UserMenu';
import PortalsMenu from '../PortalsMenu';
import HeaderButton from '../HeaderButton';

import { Top } from './assets/styles/styles';
import {
  ImagemLogoCigam,
  ImagemSino,
  ImagemPortais,
  ImagemUsuario,
} from './assets/images';

const Header = () => {
  return (
    <Top>
      <h3>Portal CIGAM</h3>
      <div className="logo">
        <ImagemLogoCigam />
        <span>ERP | CRM | BI | RH | PDV | MOBILE</span>
      </div>
      <div className="right-actions">
        <div className="cia">
          <div className="status"></div>
        </div>

        <ImagemSino />

        <HeaderButton Component={PortalsMenu} Image={ImagemPortais} />

        <HeaderButton Component={UserMenu} Image={ImagemUsuario} />
      </div>
    </Top>
  );
};

export default Header;
