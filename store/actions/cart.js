export const ADD_TO_CART='ADD_TO_CART';
export const DELETE_ITEM='DELETE_ITEM';

export const addToCart=(product)=>{
    return{
        type:ADD_TO_CART,
        product: product
    }
}

export const onItemDelete=(id)=>(
    {
        type:DELETE_ITEM,
        id:id
    }
)