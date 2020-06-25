import React, {useContext, useEffect} from 'react'
import './layout.scss'
import {Nav} from '../nav/Nav'
import {Mask} from '../mask/Mask'
import {Switch, Route} from 'react-router-dom'
import { Home } from '../home/Home';
import { MainContext } from '../../context/main/MainContext';
import { ImageContext } from '../../context/image/ImageContext';
import { Description } from '../description/Description';




export const Layout = () =>{

    const {getPokemons} = useContext(MainContext)
    const {getImages} = useContext(ImageContext)
    


useEffect(()=>{
    getPokemons()
    getImages()
}, [])

    return(
        <div className = 'layout'>

        <Nav/>
        <Mask/>
        <Switch>
            <Route exact path = '/'  component = {Home}/>
            <Route path = '/item/' component = {Description}/>
        </Switch>
        
        </div>
    )
}