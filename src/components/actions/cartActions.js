
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_INPUT_QUANTITY,UPDATE_ITEMS} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
//add qtInpt action
export const addInputQuantity=(id,val)=>{
    return{
        type: ADD_INPUT_QUANTITY,
        id,
        val
    }
}
//populate Item array
export const updateItemsPool=(items)=>{
    return{
        type:UPDATE_ITEMS,
        items
    }
}
