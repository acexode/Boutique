import React from 'react'
import CustomButtons from '../custom-button/custom-button'
import './cart-dropdown.scss'
const CartDropDown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButtons>GO TO CHECKOUT</CustomButtons>
        </div>
    )
}

export default CartDropDown
