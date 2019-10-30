import React from 'react';
import Fade from 'react-reveal/Fade';

import { UserMenuBox } from './assets/styles/styles';

const UserMenu = () => {
  return (
    <Fade top>
      <UserMenuBox>
        <div className="item-menu">Depurador</div>
        <div className="item-menu">Sair</div>
      </UserMenuBox>
    </Fade>
  );
};

export default UserMenu;
