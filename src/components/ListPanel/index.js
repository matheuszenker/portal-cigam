import React, { Component } from 'react';

import { Container } from './assets/styles/styles';

import PanelItem from './PanelItem';

class ListPanel extends Component {
  render() {
    const { Image, Data } = this.props;

    return (
      <Container>
        <h3>PRÓXIMOS EVENTOS</h3>
        <div className="container-image">
          <Image />
        </div>
        <div className="panel-body">
          <PanelItem Data={Data} />
        </div>
      </Container>
    );
  }
}

export default ListPanel;
