import React, {useContext} from 'react'
import './list.scss'
import { MainContext } from '../../context/main/MainContext';
import {NavLink} from 'react-router-dom'
import { ItemContext } from '../../context/item/ItemContext';
import { NavContext } from '../../context/nav/NavContext';


export const List = () =>{
    const {pokemons} = useContext(MainContext)
    const {getItem} = useContext(ItemContext)
    const {hide} = useContext(NavContext)
    const url = 'https://pokeapi.co/api/v2/pokemon/'

    function descrHandler(url){
        getItem(url)
        hide()
    }



    return(
        <div className = 'list'>
        <h2>Pokemons List</h2>
        <ul>
        {Object.keys(pokemons).map((pokemon, index)=>{
            return(
                <li key = {index}
                onClick = {()=> descrHandler(`${url}${index + 1}`)}
                
                ><NavLink to = {`/item/${pokemons[pokemon].name}`}>{pokemons[pokemon].name}</NavLink></li>
                )})
                }
                </ul>
                </div>
    )
}