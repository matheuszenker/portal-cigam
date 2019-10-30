import React, { Component } from 'react';

import { Button } from '../../assets/styles/components';

// import { Container } from './styles';

class HeaderButton extends Component {
  state = {
    open: false,
  };

  handleOpenMenu = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    const { Component, Image } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpenMenu}>
          <Image />
        </Button>
        <div className="relative">{open && <Component />}</div>
      </div>
    );
  }
}

export default HeaderButton;
