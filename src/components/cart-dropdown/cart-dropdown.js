import React from 'react'
import CustomButtons from '../custom-button/custom-button'
import './cart-dropdown.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item'
const CartDropDown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
               {cartItems.map(cartItem =>(
                   <CartItem key={cartItem.id} item={cartItem} />
               ))} 
            </div>

            <CustomButtons>GO TO CHECKOUT</CustomButtons>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDropDown)
