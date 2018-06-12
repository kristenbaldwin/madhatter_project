import React, { Component } from 'react';

class Forms extends Component {
    render() {
        return(
            <div>
                <h1>Login</h1>
                <form action="http://localhost:4000/login" method="post">
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username"/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password"/>
                    </div>
                    <div>
                        <input type="submit" value="Log In"/>
                    </div>
                </form>
                <form method="GET" action="/success">
                <button type="submit">Success page</button>
                </form>
            </div>
        )
    }
}

export default Forms