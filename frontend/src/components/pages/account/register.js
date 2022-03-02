import React from 'react';

export class Register extends React.Component {
    render() {
        return <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" placeholder="first name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" placeholder="last name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="username" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Register</button>
                </div>
            </div>
        </div>
    }
}

export default Register;