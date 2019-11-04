import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import EmpresasPessoas from './pages/EmpresasPessoas'
import Contatos from './pages/Contatos'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/empresas-pessoas" exact component={EmpresasPessoas} />
        <Route path='/contatos' exact component={Contatos} />
      </Switch>
    </BrowserRouter>
  );
}
