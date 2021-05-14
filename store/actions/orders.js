export const ADD_ORDER='ADD_ORDER';


export const addOrder=(products,totalAmount)=>{
    return {
        type:ADD_ORDER,
        products:products,
        amount:totalAmount
    }
}