import React from 'react';
import './app.scss';
import { MainState } from './context/main/MainState';
import { Layout } from './components/layout/Layout';
import { NavState } from './context/nav/NavState';
import { ImageState } from './context/image/ImageState';
import { ItemState } from './context/item/ItemState';



export const App = () => {


  return (
     <ItemState>
    <MainState>
      <ImageState>
       
          <NavState>
              <Layout/>
          </NavState> 
        
      </ImageState>   
    </MainState>
    </ItemState>
  );
}


