import React from 'react'
import './signup.css'
import { useState } from "react";
import {Button} from '../Button/button';


class SignUp extends React.Component{
    
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
                            <div className="container">
                                <div className="loginForm">
                                    <div className="leftBlock">
                                        <button>+</button>
                                        <p>click to upload a profile photo</p>
                                    </div>
                                    <div className="rightBlock">
                                        <div className="firstName">
                                            <fieldset>
                                                <label>
                                                    <p className="emailTag">first name</p>
                                                    <input 
                                                        className="formEmail"
                                                        type="text"                                        
                                                    />
                                                </label>
                                            </fieldset>
                                        </div>
                                        <div className="lastName">
                                            <fieldset>
                                                <label>
                                                    <p className="emailTag">last name</p>
                                                    <input 
                                                        className="formEmail"
                                                        type="email"                                        
                                                    />
                                                </label>
                                            </fieldset>
                                        </div>
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
                                            <fieldset>
                                                <label>
                                                    <p className="emailTag">password</p>
                                                    <input 
                                                        className="formEmail"
                                                        type="password"                                        
                                                    />
                                                </label>
                                            </fieldset>
                                        </div>
                                        <div className="dateOfBirth">
                                            <fieldset>
                                                <label>
                                                    <p className="emailTag">date of birth</p>
                                                    <input 
                                                        className="formEmail"
                                                        type="password"                                        
                                                    />
                                                </label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="signin">
                                            <a href="/signin">already have an account? click here</a>
                                        </div>
                                        <div className="loginButton">
                                            <Button type="submit" className="btn--login">Register</Button>
                                        </div>
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

export default SignUp