import React, {Component} from 'react'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import  './sign-up.scss'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayName : '',
            email: '',
            password:'',
            confirmPassword: ''
         }
    }
    handleSubmit = async (e) =>{
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
            alert("password don't match")
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({ 
                displayName : '',
                email: '',
                password:'',
                confirmPassword: ''
             })
        }catch(error) {
            console.error(error);
            
        }
    }
    handleChange = (e) =>{
        const {value, name} = e.target
         this.setState({[name]:value})
         
     }
    render() { 
        const {displayName, email, password, confirmPassword} = this.state
        return ( 
            <div className="sign-up">
                <h2  className="title">I dont have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text" handleChange={this.handleChange} value={this.state.displayName} label="displayName" required />
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="email" required />
                   
                    <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="Password" required />
                    <FormInput name="confirmPassword" type="password" handleChange={this.handleChange} value={this.state.confirmPassword} label="confirmPassword" required />
                   <div className="buttons">
                        <CustomButton  type="submit" >Sign Up</CustomButton>
                       
                   </div>
                </form>
            </div>
         );
    }
}
 
export default Signup;
