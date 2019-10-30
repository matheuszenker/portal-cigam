import React from 'react';
import Fade from 'react-reveal/Fade';

import { PortalsMenuBox } from './assets/styles/styles';

const PortalsMenu = () => {
  return (
    <Fade top>
      <PortalsMenuBox>
        <div className="item-menu">Depurador PORTALS</div>
        <div className="item-menu">Sair</div>
      </PortalsMenuBox>
    </Fade>
  );
};

export default PortalsMenu;
