import React, {useContext} from 'react'
import './nav.scss'
import { NavContext } from '../../context/nav/NavContext';
import {NavLink} from 'react-router-dom'
import {List} from '../list/List'


export const Nav = () =>{

const {show, hide, isOpen} = useContext(NavContext)



    return(
        <div className = 'navWrapper'
             style = {{width: !isOpen ? '1rem' : '25%', height: !isOpen ? '1rem' : '1000px'}}
        >
            
            <div className = 'nav' 
                  style = {{width: !isOpen ? '0px' : '100%'}}>

            <div className = 'navHead'>
                <i className = 'fa fa-times' 
                   onClick = {hide}
                   style = {{display: isOpen ? "block" : 'none'}}
                   />
            </div>

            <div className = 'navBar'
                 style = {{display: isOpen ? "block" : 'none'}}>
                <ul>
                    <li onClick = {hide}><NavLink to = "/">Главная</NavLink></li>
                    <li onClick = {hide}>
                    <a href = "https://github.com/Sergio-19/Pokemon-Hooks"
                       target="_blank"
                       rel="noopener noreferrer"
                    >GitHub...</a>
                    </li>

                </ul>

              <List/>
            </div>

            
            
            </div>

            <div 
                className = 'navArrow'
                style = {{display: !isOpen ? "block" : 'none'}}  
            
            >
            <i className="fa fa-arrow-right" 
                aria-hidden="true"
                onClick = {show}
                style = {{display: !isOpen ? "block" : 'none'}}  
                ></i>
            </div>  
        </div>
    )
}