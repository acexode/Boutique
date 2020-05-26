import React from 'react'
import './collection-preview.scss'
import CollectionItem from '../collection-item/collection-item'
const CollectionPreview = ({title, items}) => {
    console.log(items)
    return (
        <div className="collection-preview">
            <h1 className="preview">{title}</h1>
            <div className="preview">
                {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...others}) =>(
                    <CollectionItem key={id} {...others} />
                ))}
            </div>
            
        </div>
    )
}

export default CollectionPreview
