import React, { Component } from 'react'
import ptMessages from "devextreme/localization/messages/pt.json"
import { locale, loadMessages } from "devextreme/localization"

import { data } from './data'
import DataGrid, {
  Editing,
  Popup,
  Paging,
  Position,
  Form,
  FilterRow,
  RequiredRule,
  EmailRule
} from 'devextreme-react/data-grid'
import { Item } from 'devextreme-react/form'


class Contatos extends Component {
    constructor() {
        super()
        loadMessages(ptMessages)
        // Pode ser usado navigator.language
        // Mas para garantir que será exibido as informações em pt-br
        // Podemos colocar um hardcode
        locale('pt-BR')
        this.phoneOptions = {
            mask: '000',
            maskRules: {
              X: /[02-9]/
            },
            useMaskedValue: false,
            maskInvalidMessage: 'Seu ramal deve ter o formato "555"!'
        }
    }

    state = {
        contatos: null
    }

    render() {
        return (
            <DataGrid dataSource={this.state.contatos}>
                 <Paging defaultPageSize={12} />
                 <FilterRow visible={true} />
                 <Editing
                    mode={'popup'}
                    allowAdding={true}
                    allowDeleting={true}
                    allowUpdating={true}
                    useIcons={true}>
                    <Popup title={'Contatos'} showTitle={true} width={600} height={300}>
                        <Position my={'middle'} at={'middle'} of={window} />
                    </Popup>
                    <Form>
                        <Item dataField={'nome'} >
                            <RequiredRule />
                        </Item>
                        <Item dataField={'setor'}>
                            <RequiredRule />
                        </Item>
                        <Item dataField={'email'}>
                            <RequiredRule />
                            <EmailRule />
                        </Item>
                        <Item dataField={'ramal'}  editorOptions={this.phoneOptions}>
                            <RequiredRule />
                        </Item>
                    </Form>
                </Editing>
            </DataGrid>
        )
    }   

    componentDidMount() {
        const contatos = [...data.contatos]
        this.setState({contatos: contatos})
    }
    
}

export default Contatos;