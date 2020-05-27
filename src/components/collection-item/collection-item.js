import React from 'react'
import './collection-item.scss'
import CustomButton from '../custom-button/custom-button'
import { connect } from 'react-redux'
import { AddItem } from '../../redux/cart/cart.action'
const CollectionItem = ({item, AddItem}) => {
    const {imageUrl, name, price} = item
    return (
        <div className="collection-item">
            <div 
                style={{backgroundImage: `url(${imageUrl})`}}
                className="image"
            >
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() =>AddItem(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapsDispatchToProps = dispatch =>({
    AddItem: item => dispatch(AddItem(item))
})
export default connect(null, mapsDispatchToProps)(CollectionItem)
