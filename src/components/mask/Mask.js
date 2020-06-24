import React, {useContext} from 'react'
import './mask.scss'
import { NavContext } from '../../context/nav/NavContext';


export const Mask = () =>{

    const {isOpen} = useContext(NavContext)

    const cls = ['mask']

    if(isOpen){
        cls.push('maskShow')
    }

    return(
        <div className = {cls.join(' ')}></div>
    )
}