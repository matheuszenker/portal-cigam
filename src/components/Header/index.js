import React, { Component } from 'react';

import { Top } from './assets/styles/styles';
import {
  ImagemLogoCigam,
  ImagemSino,
  ImagemPortais,
  ImagemUsuario,
} from './assets/images';

class Header extends Component {
  render() {
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
          <ImagemPortais />
          <ImagemUsuario />
        </div>
      </Top>
    );
  }
}

export default Header;
