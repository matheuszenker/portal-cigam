import React, { Component } from 'react'
import ptMessages from "devextreme/localization/messages/pt.json"
import { locale, loadMessages } from "devextreme/localization"

import Container from './styles'

import { data, states } from './data'
import DataGrid, {
  Editing,
  Popup,
  Paging,
  Position,
  Form,
  FilterRow,
  RequiredRule,
  Lookup,
  Column
} from 'devextreme-react/data-grid'
import { Item } from 'devextreme-react/form'

class EmpresasPessoas extends Component {
  constructor() {
    super()
    loadMessages(ptMessages)
    // Pode ser usado navigator.language
    locale('pt-BR')
    this.phoneOptions = {
        mask: '(00) 0000-0000',
        maskRules: {
          X: /[02-9]/
        },
        useMaskedValue: true,
        maskInvalidMessage: 'Seu telefone deve ter o formato "(55) 5555-5555"!'
    }
  }

  state = {
    empregados: null
  }

  render() {
    return (
      <Container >
        <DataGrid dataSource={this.state.empregados}>
          <Paging 
              defaultPageSize={12} />
          <FilterRow visible={true} />
          <Editing
            mode={'popup'}
            allowAdding={true}
            allowDeleting={true}
            allowUpdating={true}
            useIcons={true}>
              <Popup title={'Empresa | Pessoa'} showTitle={true} width={800} height={300}>
              <Position my={'middle'} at={'middle'} of={window} />
            </Popup>
            <Form>
              <Item itemType={'group'} colCount={2} colSpan={2}>
                <Item dataField={'Fantasia | NomeCompleto'} >
                  <RequiredRule />
                </Item>
                <Item dataField={'fone'} editorOptions={this.phoneOptions}>
                  <RequiredRule />
                </Item>
                <Item dataField={'municipio'} />
                <Item dataField={'StateID'} />
                <Item dataField={'CNPJ / CPF'} />
              </Item>
            </Form>
          </Editing>
          <Column dataField={'Fantasia | NomeCompleto'} caption={'Title'} width={70} />
          <Column dataField={'fone'} />
          <Column dataField={'municipio'} />
          <Column dataField={'StateID'} caption={'State'}>
            <Lookup dataSource={states} valueExpr={'id'} displayExpr={'state'} />
          </Column>
          <Column dataField={'CNPJ / CPF'} visible={false} />
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