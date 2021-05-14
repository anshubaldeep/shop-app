import PRODUCTS from "../../data/dummy-data";
import { ADD_TO_CART } from "../actions/products";


const initialState={
    availableProducts:PRODUCTS,
    userProducts:PRODUCTS.filter(prod=>prod.ownerId==='u1')
}



const productReducer=(state=initialState,action)=>{
    switch(action.type){
        
    }
    return state;
}

export default productReducer;