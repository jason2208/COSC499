import React from 'react'
import './hero.css'
import {Button} from '../Button/button';

class Hero extends React.Component{
    render(){
        return(
        <div className='hero'>
            <div className="container">
                <div className="left">
                    <h1>Woo</h1>
                    <h1>Woo</h1>
                    <h1>Network</h1>
                </div>
                <div className="right">
                <h2>Class aptent taciti sociosqu ad litora torquent per conubia nostra  </h2>
                <div className="sign-up-buttons">
                        <Button className="btn--learn">Learn More</Button>
                </div>
                </div>
            </div>
        </div>


);
}
}

export default Hero