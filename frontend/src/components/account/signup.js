import React from 'react'
import './signin.css'
import { useState } from "react";
import {Button} from '../Button/button';


class SignIn extends React.Component{
    
    state =  {
        email:[],
        password:[]
    }


    handleChange = (event) => {
        console.log(event.target.value);
        if(event.target.className == "formEmail"){
            this.state.email =  event.target.value;
        }
        if(event.target.className == "formPassword"){
            this.state.password = event.target.value;
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert(`The email you entered was: ${this.state.email} \n The pswd you entered was: ${this.state.password} `)
    }

    render(){
        return(
        <div className='hero'>
            <div className="triangle">  
                <div className="container">              
                    <form onChange={this.handleChange} onSubmit={this.handleSubmit} >
                            
                        <div className="pageContent">
                        <div className="loginForm">
                                        
                            <div className="topBlurb">
                                <p>login to find a healer today!</p>
                            </div>
                            <div className="middleBlurb">
                                <div className="email">
                                    <fieldset>
                                        <label>
                                            <p className="emailTag">email</p>
                                            <input 
                                                 className="formEmail"
                                                 type="email"                                        
                                            />
                                        </label>
                                    </fieldset>
                                </div>
                                <div className="password">  
                                    <div className="password">
                                        <fieldset>
                                            <label>
                                                <p className="passwordTag" >password</p>
                                                    <input 
                                                        className="formPassword"
                                                        type="password" 
                                                        />
                                            </label>
                                        </fieldset>                          
                                    </div>       
                                </div>
                            </div>
                                <div className="bottomBlurb">
                                    <div className="register">
                                        <a href="/signup">new? Click to register</a>
                                    </div>
                                    <div className="loginButton">
                                        <Button type="submit" className="btn--login">Login</Button>
                                    </div>
                                </div>
                        </div> 
                        </div>
                    </form>
                </div>
            </div>
        </div>




);
}
}

export default SignIn