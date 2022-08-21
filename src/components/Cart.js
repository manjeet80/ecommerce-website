import React, { useContext } from 'react'
import { CardContext } from '../Global/CardContext'
import {AiOutlinePlus,AiOutlineMinus}  from 'react-icons/ai'
import StripeCheckout from 'react-stripe-checkout'

const Cart = () => {
const {shoppingCart,totalPrice,qty,dispatch} = useContext(CardContext)
 return (
   <div className="cart-container">
    <div className="cart-details" style={{marginTop:'100px'}}>
    {shoppingCart.length > 0 ? 
    shoppingCart.map((cart)=>(
<div className="cart" key={cart.id}>
  <span className="cart-image">
    <img src={cart.image} alt="Not Found" />
  </span>
  <span className="cart-product-name">{cart.name}</span>
  <span className="cart-product-price">${cart.price}.00</span>
  <span className="inc" onClick={()=>dispatch({type:'INC',id:cart.id,cart})}><AiOutlinePlus/></span>
  <span className="product-quantity">{cart.qty}</span>
  <span className="dec" onClick={()=>dispatch({type:'DEC',id:cart.id,cart})}><AiOutlineMinus/></span>
  <span className="product-total-price">${cart.price * cart.qty}.00</span>
  <span  onClick={()=> dispatch({type:'DLT', id: cart.id, cart})} className="delete-product"><i className="fas fa-trash-alt"></i></span>
</div>
    ))
    : <div className='empty'>Sorry your cart is currently empty</div>}
    </div>
    {
      shoppingCart.length > 0 ? 
      <div className="cart-summary">
       <div className="summary">
        <h3>Cart Summary</h3>
        <div className="total-items">
          <div className="items">Total Items : </div>
          <div className="items-count">{qty}</div>
        </div>
        <div className="total-price-section">
          <div className="just-title">Total Price :</div>
          <div className="items-price">${totalPrice}.00</div>
        </div>
        <div className="stripe-section">
        <StripeCheckout stripeKey='pk_test_51LQnJKSC0iqpozUyf1W3QfP5fjUSSIQTJogiW348WiUEAI0VpGLVh0sH2E3PQzUA8Eo9eNgTMtgy3tF3fITOlaeF00h0cLw36X'>
        </StripeCheckout>
        </div>
       </div>
      </div> :''
    }
   </div>
  )
}

export default Cart
