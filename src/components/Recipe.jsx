import React from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
const Recipe=(props)=>{  
    
    const VAT = 0.2;
    const postBasket= async ()=> {
        alert("We have requested a purchase")
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                addedItems:props.addedItems,
                totalPayment:(props.total+(props.total*VAT))
            })
        };
        fetch('https://someUrl.com/post', requestOptions)
            .then(response => response.json());
        
    }

    return(
        <div className="pb30">
            <div className="row">
                <div className="col s12 m6 bg_txt"><b>Subtotal</b></div>
                <div className="col s12 m6 right-align  bg_txt"><b> £{props.total.toFixed(2)}</b></div>
            </div>
            <div className="row">
                <div className="col s12 m6 bg_txt"><b>VAT @ 20%</b></div>
                <div className="col s12 m6 right-align bg_txt"><b> £{(props.total*VAT).toFixed(2)}</b></div>
            </div>
            <div className="row">
                <div className="col s12 m6"><b>Total</b></div>
                <div className="col s12 m6 right-align"><b> £{(props.total+(props.total*VAT)).toFixed(2)}</b></div>
            </div>
            <div className="checkout right-align">
                <button onClick={()=>{postBasket()}} className="waves-effect waves-light btn buy-btn">Buy Now</button>
            </div>
        </div>
    )
}


const mapStateToProps = (state)=>{
    console.log(state);
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
