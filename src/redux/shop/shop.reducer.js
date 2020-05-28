import SHOP_DATA from "./shop.data"

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (prevState = INITIAL_STATE, action) => {
    switch(action.payload){
        default:
            return prevState
    }
}

export default shopReducer