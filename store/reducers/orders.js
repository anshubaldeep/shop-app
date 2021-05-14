import { Order } from "../../models/order";
import { ADD_ORDER } from "../actions/orders";

const initialState={
    orders:[]
}

const OrdersReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_ORDER:
            const newOrder=new Order(
                new Date().toString(),
                action.products,
                action.amount,
                new Date() 
            )
            const updatedOrders=[...state.orders]
            updatedOrders.push(newOrder);
            return {...state,orders:updatedOrders};
        default:
            return state;
    }

}


export default OrdersReducer;