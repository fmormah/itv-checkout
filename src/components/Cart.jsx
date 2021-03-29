import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,addInputQuantity,subtractQuantity} from './actions/cartActions';
import Recipe from './Recipe';



const Cart=(props)=>{
    console.log("PROPS: ",props);

    //const [updateTimeStamp, setUpdateTimeStamp] = useState(new Date());

    const qntyInputChangeHandler=(e,props,id)=>{
        handleAddQuantityInput(props,id,e.target.value);
    }
    let addedItems = props.items.length ?
        (  
           props.items.map((item,index)=>{
               let bgColorClass="bg_grey";
                if(index % 2 == 0){
                    bgColorClass="bg_white";
                }
                return(
                    
                    <li className={`collection-item row ${bgColorClass}`} key={item.productId}>
                        <div className="item-img col s12 m3">{item.title}</div>
                        <div className="item-img col s12 m1">£{item.price}</div>
                        <div className="item-img col s12 m4 center">
                            <input  min="1" max="999" onChange={(e)=>{qntyInputChangeHandler(e,props,item.productId)}} value={item.quantity} className="qty-inpt mr10" type="number" />
                            <button onClick={()=>{handleSubtractQuantity(props,item.productId)}} className="qty_amend_btn orange">-</button>
                            <button onClick={()=>{handleAddQuantity(props,item.productId)}} className="qty_amend_btn teal accent-3">+</button>
                        </div>
                        <div className="item-img col s12 m1">£{item.quantity*item.price}</div>
                        <div className="item-img col s12 m3 right-align">
                            <button className="waves-effect waves-light btn red remove" onClick={()=>{handleRemove(props,item.productId)}}>Delete</button>
                        </div>
                        
                    </li>
                        
                )
            })
        ):
        (
            <p className="pt10 pr10 pb10 pl10">Your cart is currently empty</p>
        )
        
    return(
        <div className="container">
            <div className="cart">
                <h4 className="center">Review Your Order &amp; Complete Checkout</h4>
                
                <div className="list-header">
                    Review Your Order
                </div>

                <ul className="collection mt0">
                    <li className="collection-item row bg_grey">
                        <div className="col s12 m3 center"><b>Product</b></div>
                        <div className="col s12 m1 center"><b>Price</b></div>
                        <div className="col s12 m4 center"><b>Quantity</b></div>
                        <div className="col s12 m1 center"><b>Cost</b></div>
                        <div className="col s12 m3 center">  </div>
                        
                    </li>
                    {addedItems}
                </ul>
            </div> 
            <Recipe />          
        </div>
    )
    
}


//to remove the item completely
const handleRemove = (props,id)=>{
   props.removeItem(id);
}
//to add the quantity
const handleAddQuantity = (props,id)=>{
   props.addQuantity(id);
}
//to add the quantity via text input
const handleAddQuantityInput = (props,id,val)=>{
    props.addInputQuantity(id,val);
 }
//to substruct from the quantity
const handleSubtractQuantity = (props,id)=>{
   props.subtractQuantity(id);
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        addInputQuantity:(id,val)=>{dispatch(addInputQuantity(id,val))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)