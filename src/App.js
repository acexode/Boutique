import React, {Component} from 'react';
import './App.css';
import Homepage from './pages/Home/homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/Header/header';
import SignUpAndSignInPage from './pages/signup-signin/signup-signin';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';


class App extends Component {
 
  unAuthSubScription = null
  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unAuthSubScription =   auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
            setCurrentUser({currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => {
            console.log(this.state)
          })          
        });

      }
      setCurrentUser(userAuth)
    })

  }
  componentWillUnmount(){
    this.unAuthSubScription()
  }
  render() { 
    return ( 
      <div className="App"> 
      <Header />    
      <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route  path="/shop" component={ShopPage}></Route>
          <Route  path="/signin" component={SignUpAndSignInPage}></Route>
      </Switch>
    </div>
     );
  }
}
 const mapDispatchToProps = dispatch=>({
   setCurrentUser : user => dispatch(setCurrentUser(user))
    
 })
export default connect(null,mapDispatchToProps)(App);
