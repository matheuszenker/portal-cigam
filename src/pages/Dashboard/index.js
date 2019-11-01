import React from 'react';

import { ContainerDashboard } from './assets/styles/styles';

import ListPanel from '../../components/ListPanel';

import { ImageDate, ImageDateBlue } from './assets/images';

const data = [
  {
    imagem: ImageDateBlue,
    titulo: 'Save the date',
    info1: '08:00',
    info2: '06/11/2019',
  },
  {
    imagem: ImageDateBlue,
    titulo: 'Save the date 2',
    info1: '16:00',
    info2: '08/11/2019',
  },
];

const Dashboard = () => {
  return (
    <ContainerDashboard>
      <div className="container-carousel">
        <h2>Fique por Dentro</h2>
      </div>
      <div className="container-lateral">
        <ListPanel Image={ImageDate} Data={data} />
      </div>
    </ContainerDashboard>
  );
};

export default Dashboard;
