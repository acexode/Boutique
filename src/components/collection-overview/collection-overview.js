import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections, selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({collections}) => { 
       console.log(collections)
        return ( 
            <div className="shop-page">
                {collections.map(({id, ...others}) =>(
                    <CollectionPreview id={id} {...others} />
                ))}
            </div>
         );
}
 
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)
