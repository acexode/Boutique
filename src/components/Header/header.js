import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/original.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/cart-dropdown'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selector'

const Header = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                }
                
                <CartIcon />
            </div>
            {hidden ? null : <CartDropDown />}
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) =>({
//     currentUser,
//     hidden
// })
export default connect(mapStateToProps)(Header)
