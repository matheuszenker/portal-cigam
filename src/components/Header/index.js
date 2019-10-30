import React, { Component } from 'react';

import UserMenu from '../UserMenu';

import { Top } from './assets/styles/styles';
import {
  ImagemLogoCigam,
  ImagemSino,
  ImagemPortais,
  ImagemUsuario,
} from './assets/images';

import { Button } from '../../assets/styles/components';

class Header extends Component {
  state = {
    userMenu: false,
  };

  handleUserMenu = () => {
    this.setState({ userMenu: !this.state.userMenu });
  };

  render() {
    const { userMenu } = this.state;
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
          <div>
            <Button onClick={this.handleUserMenu}>
              <ImagemUsuario />
            </Button>
            <div className="relative">{userMenu && <UserMenu />}</div>
          </div>
        </div>
      </Top>
    );
  }
}

export default Header;
