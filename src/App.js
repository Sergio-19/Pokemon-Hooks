import React from 'react';
import './app.scss';
import { MainState } from './context/main/MainState';
import { Layout } from './components/layout/Layout';
import { NavState } from './context/nav/NavState';


export const App = () => {
  return (
    <MainState>
      <NavState>
          <Layout/>
      </NavState>    
    </MainState>
  );
}


