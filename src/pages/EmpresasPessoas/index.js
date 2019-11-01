import React, { Component } from 'react';

import Container from './styles';

import { data } from './data';
import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Position,
  Form
} from 'devextreme-react/data-grid';
import { Item } from 'devextreme-react/form';

class EmpresasPessoas extends Component {
  state = {
    empregados: null
  }

  render() {
    return (
      <div>
        <DataGrid dataSource={this.state.empregados}>
          <Paging enabled={false} />
          <Editing
            mode={'popup'}
            allowUpdating={true}>
              <Popup title={'Employee Info'} showTitle={true} width={700} height={700}>
              <Position my={'top'} at={'top'} of={window} />
            </Popup>
            <Form>
              <Item itemType={'group'} colCount={2} colSpan={2}>
                <Item dataField={'FirstName'} />
                <Item dataField={'LastName'} />
                <Item dataField={'Prefix'} />
                <Item dataField={'BirthDate'} />
                <Item dataField={'Position'} />
                <Item dataField={'HireDate'} />
                <Item
                  dataField={'Notes'}
                  editorType={'dxTextArea'}
                  colSpan={2}
                  editorOptions={{ height: 100 }} />
              </Item>
              <Item itemType={'group'} caption={'Home Address'} colCount={2} colSpan={2}>
                <Item dataField={'StateID'} />
                <Item dataField={'Address'} />
              </Item>
            </Form>
          </Editing>
        </DataGrid>
      </div>
    );
  }

  componentDidMount() {
    const empregados = [...data.empresasPessoas]
    this.setState({empregados: empregados})
  }
}

export default EmpresasPessoas;