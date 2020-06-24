import React, {useReducer} from 'react'
import {NavContext} from './NavContext'
import { NavReducer } from './NavReducer';
import { SHOW_NAV, HIDE_NAV } from '../types';


export const navInitialState = {
        isOpen: false
    }


export const NavState = (props) =>{

   
const [state, dispatch] = useReducer(NavReducer, navInitialState)

const show = () => dispatch({type: SHOW_NAV})

const hide = () => dispatch({type: HIDE_NAV})


    return(
        <NavContext.Provider value = {{show, hide, isOpen: state.isOpen}}>
            {props.children}
        </NavContext.Provider>
    )
}