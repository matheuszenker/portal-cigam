import React from 'react';

import { Top } from './assets/styles/styles';
import Logo from './assets/images/logo-cigam.svg';

const Header = props => {
  return (
    <Top>
      <h3>Portal CIGAM</h3>
      <div className="logo">
        <img src={Logo} alt="Logo CIGAM" />
        <span>ERP | CRM | BI | RH | PDV | MOBILE</span>
      </div>
      <div className="right-actions"></div>
    </Top>
  );
};

export default Header;
