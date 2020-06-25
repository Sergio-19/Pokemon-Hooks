import React, {useContext} from 'react'
import './home.scss'
import { MainContext } from '../../context/main/MainContext';
import { ImageContext } from '../../context/image/ImageContext';
import {Link} from 'react-router-dom'
import {Card} from '../card/Card'
import { ItemContext } from '../../context/item/ItemContext';

export const Home = () =>{


    const {pokemons} = useContext(MainContext)
    const {images} = useContext(ImageContext)
    const {getItem} = useContext(ItemContext)



    const url = 'https://pokeapi.co/api/v2/pokemon/'

    return(
        <div className = 'home'>

        
        {Object.keys(pokemons).map((pokemon, index)=>{
            
            return(
                <Link to = {`/item/${pokemons[pokemon].name}`} key = {index}>
                <Card name = {pokemons[pokemon].name} 
                      img = {images[pokemons[pokemon].name]} 
                      click = {getItem}
                      arg = {`${url}${index + 1}`}
                      />
                </Link>
                
                )})
                }
                </div>
    )
}