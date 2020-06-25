import { mainInitialState } from "./MainState";
import { LOAD, FETCH_POKEMONS } from "../types";



export const MainReducer = (state = mainInitialState, action) =>{
    switch(action.type){
        case FETCH_POKEMONS: 
        return{...state, pokemons: action.payload}
        case LOAD:
        return{...state, loading: true}
        default:
        return state
    }

}