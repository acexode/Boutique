import React from 'react'
import CustomButtons from '../custom-button/custom-button'
import './cart-dropdown.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.action'
const CartDropDown = ({cartItems,history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {cartItems.length ? 
                    cartItems.map(cartItem =>(
                        <CartItem key={cartItem.id} item={cartItem} />
                    )): 
                    <span className="empty-message">Your cart is empty</span>
                }
               
            </div>

            <CustomButtons onClick={()=> {
                history.push('/checkout')
                dispatch(toggleCartHidden())
                }}>GO TO CHECKOUT</CustomButtons>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})
export default withRouter(connect(mapStateToProps)(CartDropDown))
