import PRODUCTS from "../../data/dummy-data";


const initialState={
    availableProducts:PRODUCTS,
    userProducts:PRODUCTS.filter(prod=>prod.ownerId==='u1')
}



const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case '':

    }
    return state;
}

export default productReducer;