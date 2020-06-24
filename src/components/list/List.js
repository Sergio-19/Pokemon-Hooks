import React from 'react'
import './list.scss'


export const List = () =>{
    return(
        <div className = 'list'>
        <h2>Pokemons List</h2>
        {/* <ul>
        {Object.keys(state.pokemons).map((pokemon, index)=>{
            return(
                <li key = {index}
                onClick = {()=> descrHandler(`${url}${index + 1}`)}
                
                ><NavLink to = {`/item/${state.pokemons[pokemon].name}`}>{state.pokemons[pokemon].name}</NavLink></li>
                )})
                }
                </ul> */}
                </div>
    )
}