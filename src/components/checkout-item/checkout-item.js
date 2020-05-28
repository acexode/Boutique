import React from 'react'
import  './checkout-item.scss'
import { connect } from 'react-redux'
import { ClearItemFromCart,AddItem, RemoveItem } from '../../redux/cart/cart.action'

const CheckoutItem = ({cartItem, clearItem, removeItem, addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt='item' src={imageUrl} />
            
            </div>  
            <span className='name'>{name}</span>  
            <span className='quantity'>
                <div onClick={() => removeItem(cartItem)}  className="arrow">&#10094;</div>
                    <span className='value'>{quantity}</span>
                <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>
                </span>  
            <span className='price'>{price}</span>               
            <span onClick={() => clearItem(cartItem)} className='remove-button'>&#10005;</span>  
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(ClearItemFromCart(item)),
    addItem: item => dispatch(AddItem(item)),
    removeItem: item => dispatch(RemoveItem(item)),
    
})
export default connect(null, mapDispatchToProps)(CheckoutItem)
