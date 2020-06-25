import React, {useReducer} from 'react'
import {ImageContext} from './ImageContext' 
import {ImageReducer} from './ImageReducer'
import { FETCH_IMAGES } from '../types';

export const imageInitialState = {
    images: ''
}






export const ImageState = (props) =>{

    const [state, dispatch] = useReducer(ImageReducer, imageInitialState)


    const getImages = async () =>{
        await fetch('https://pokemon-371d3.firebaseio.com/pokemons.json')
        .then((response)=>{
            response.json()
            .then((response)=> fetchImages(response))
        })
        

    }


    const fetchImages = (images) =>{
        dispatch({type: FETCH_IMAGES, payload: images})
    }



    return(
        <ImageContext.Provider value = {{getImages, images: state.images}}>
            {props.children}
        </ImageContext.Provider>
    )
}