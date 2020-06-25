import { FETCH_IMAGES } from "../types";
import { imageInitialState } from "./ImageState";


export const ImageReducer = (state = imageInitialState, action) =>{
    switch(action.type){
        case FETCH_IMAGES:
        return{ images: action.payload}
    default: 
        return state    
    }
}