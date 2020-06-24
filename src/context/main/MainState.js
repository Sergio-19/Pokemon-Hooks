import React from 'react'
import {MainContext} from './MainContext'


export const MainState = (props) =>{
    return(
        <MainContext.Provider>
            {props.children}
        </MainContext.Provider>
    )
}