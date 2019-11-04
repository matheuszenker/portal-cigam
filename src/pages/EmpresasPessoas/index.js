import React, { Component } from 'react';
import ptMessages from "devextreme/localization/messages/pt.json";
import { locale, loadMessages } from "devextreme/localization"

import Container from './styles';

import { data } from './data';
import DataGrid, {
  Editing,
  Popup,
  Paging,
  Position,
  Form,
  Texts,
  FilterRow,
  Scrolling
} from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';

class EmpresasPessoas extends Component {
  constructor() {
    super()
    loadMessages(ptMessages)
    locale(navigator.language)
  }

  state = {
    empregados: null
  }

  render() {
    return (
      <Container >
        <DataGrid dataSource={this.state.empregados} id="dados">
          <Paging 
              defaultPageSize={12} />
          <FilterRow visible={true} />
          <Editing
            mode={'popup'}
            allowAdding={true}
            allowDeleting={true}
            allowUpdating={true}>
              <Texts confirmDeleteMessage='Você gostaria de remover o registro?'/>
              <Popup title={'Empresa | Pessoa'} showTitle={true} width={600} height={300}>
              <Position my={'top'} at={'top'} of={'#dados'} />
            </Popup>
            <Form>
              <Item itemType={'group'} colCount={2} colSpan={2}>
                <Item dataField={'Fantasia | NomeCompleto'} />
                <Item dataField={'fone'} />
                <Item dataField={'municipio'} />
                <Item dataField={'UF'} />
                <Item dataField={'CNPJ / CPF'} />
              </Item>
            </Form>
          </Editing>
        </DataGrid>
      </Container>
    );
  }

  componentDidMount() {
    const empregados = [...data.empresasPessoas]
    this.setState({empregados: empregados})
  }
}

export default EmpresasPessoas;