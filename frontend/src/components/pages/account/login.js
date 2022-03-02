import React from 'react';

export class Login extends React.Component {

    users = {
        firstname: "Samuel",
        lastname: "Johnson",
        email: "youremail@domain.com",
        password: "password123",
        dateofbirth: "January 1st,  2000",
        location: "Kelowna, British Columbia"
    }

    render() {
        return <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="username" placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                    <div className="form-group">
                        <a href="./register">New? Click here to register</a>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Login</button>
                </div>
            </div>
        </div>
    }
}

export default Login;