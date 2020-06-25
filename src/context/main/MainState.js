import React, {useReducer} from 'react'
import {MainContext} from './MainContext'
import { MainReducer } from './MainReducer';
import { FETCH_POKEMONS, LOAD } from '../types';


export const mainInitialState = {
    pokemons: '',
    loading: false
}


export const MainState = (props) =>{

const [state, dispatch] = useReducer(MainReducer, mainInitialState)


const getPokemons = async () =>{
    console.log('work')
         await fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response)=> response.json()
        .then((response)=>{ fetchPokemons(response.results)
            if(response){
              load()  
            }} ))
    
}

const fetchPokemons = (pokemons) =>{
    dispatch({
        type: FETCH_POKEMONS,
        payload: pokemons
    })
}

const load = () =>{
    dispatch({
        type: LOAD
    })
}


    return(
        <MainContext.Provider value = {{getPokemons, pokemons: state.pokemons}}>
            {props.children}
        </MainContext.Provider>
    )
}