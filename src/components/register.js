/*import React, {Component} from 'react';

class Login extends Component {


constructor(){
 super();
 this.state = {
username: '',
password: '',
redirectToReferrer: false
};
this.login = this.login.bind(this);
this.onChange = this.onChange.bind(this);
}
login() {
 //API Action Here
}


onChange(e){
 this.setState({[e.target.name]:e.target.value});
}


render() {
 return (
 <div className="row" id="Body">
 <div className="medium-5 columns left">
 <h4>Login</h4>
 <label>Username</label>
 <input type="text" name="username" onChange={this.onChange}/>
 <label>Password</label>
 <input type="password" name="password" onChange={this.onChange}/>
 <input type="submit" value="Login" onClick={this.login}/>
 <a href="/signup">Registration</a>
 </div>
 </div>
);
}
}
export default Login;
*/




















/*import React, { Component } from 'react'
export default class singup extends Component {
  render() {
    return (
        <form method="post" action="register.php">
       

        <div class="input-group">
            <label>Username</label>
            <input type="text" name="username" value="<?php echo $username; ?>"/>
        </div>
        <div class="input-group">
            <label>Email</label>
            <input type="email" name="email" value="<?php echo $email; ?>"/>
        </div>
        <div class="input-group">
            <label>Password</label>
            <input type="password" name="password" value="<?php echo $password; ?>"/>
        </div>
        <div class="input-group">
            <label>Submit</label>
            <button type="submit" name="reg_user">Register</button>
        </div>

        <p>
            Already have <a href="login.php">loginhere</a>
        </p>

    </form>)}
    }*/