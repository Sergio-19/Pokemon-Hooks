import React, {useContext} from 'react'
import './description.scss'
import { ItemContext } from '../../context/item/ItemContext';
import { ImageContext } from '../../context/image/ImageContext';
import {Loader} from '../loader/Loader'
import {NavLink} from 'react-router-dom'

export const Description = () =>{

const {itemLoadind, name, height, weight, types, abilities} = useContext(ItemContext)
const {images} = useContext(ImageContext)


    return(
        <div className = 'descrPage'>
            {
                itemLoadind ? 
                    <div className = 'descrPageContent'>
                            
                        <div className = 'descrPageContentImg'>
                        <img src = {images[name]}  alt = {name}/>
                        </div>        

                                <div className = 'descriptionTxt'>

                                <div className = 'descrPageContentName'>
                                    <h2>{name}</h2>
                                </div>



                                <div className = 'characteristics'>
                                    <ul>
                                        <li> <p>height - {height}</p></li>
                                        <li> <p>weight - {weight}</p></li>
                                    </ul>

                                        <p className = 'types'>
                                        type of pokemon:&nbsp; 

                                        {Object.keys(types).map((type, i)=>{
                                        return(
                                            <React.Fragment key = {i}>
                                        <strong key = {i}>{types[type].type.name}</strong>&nbsp;<br/>       
                                            </React.Fragment>
                                            )
                                        })}
                                        </p>
                                </div>



                                <div className = 'abilities'>
                                <p className = 'types'>
                                    abilities:&nbsp;
                                    {Object.keys(abilities).map((type, i)=>{
                                        return(
                                            <React.Fragment key = {i}>
                                        <strong key = {i}>{abilities[type].ability.name}</strong>&nbsp;<br/>       
                                            </React.Fragment>
                                            )
                                        })}
                                    </p>
                                </div>


                                    <div className = 'goHome'>
                                    <div className = 'btn'>
                                    <NavLink to = '/'>
                                    Главная
                                    </NavLink> </div>
                                    </div>
                                    
                                </div>
                    </div>

                : <Loader/>
             }
         </div>
    )
}