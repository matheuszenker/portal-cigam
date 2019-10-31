import React from 'react';

import Routes from './routes';
import GlobalStyle from './assets/styles/global';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="container-layout">
        <Routes />
      </div>

      <GlobalStyle />
    </>
  );
}

export default App;
