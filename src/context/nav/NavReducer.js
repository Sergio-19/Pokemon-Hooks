import {SHOW_NAV, HIDE_NAV} from '../types'
import { navInitialState } from './NavState';


export const NavReducer = (state = navInitialState, action) =>{
    switch(action.type){
        case SHOW_NAV:
        return{isOpen: true}
        case HIDE_NAV: 
        return{isOpen: false}
        default: return state
    }
    }