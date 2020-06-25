
import React, {useReducer} from 'react'
import {ItemContext} from './ItemContext'
import { ItemReducer } from './ItemReducer';
import { FETCH_ITEM, LOAD_ITEM } from '../types';


export const itemInitialState = {
    name: '',
    height: '',
    weight: '',
    abilities: '',
    types: '',
    itemLoading: false
}


export const ItemState = (props) =>{

const [state, dispatch] = useReducer(ItemReducer, itemInitialState)


const getItem = async (url) =>{
    await fetch(url)
    .then((response)=>{
        response.json()
        .then((response)=>{
            fetchItem(response)
        })
        if(response){loadItem()}
    })
}

const fetchItem = (item) =>{
    dispatch({type: FETCH_ITEM, payload: item})
}

const loadItem = () =>{
    dispatch({type: LOAD_ITEM})
}


    return(


        <ItemContext.Provider value = {{ getItem, 
                                         itemLoading: state.itemLoading,
                                         name: state.name,
                                         height: state.height,
                                         weight: state.weight,
                                         abilities: state.abilities,
                                         types: state.types 
                                         }}>
            {props.children}
        </ItemContext.Provider>
    )
}