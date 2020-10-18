import React, {Component} from 'react';
import firebase from 'firebase';

//css Files
import '../Css/login.css'


class Login extends Component {
  constructor(){
    super();
    this.state = {
      button:'Login',
      login:'show',
      signup:'hide',
      facebook:'hide',
      google:'hide',
      showError : {},
      user : {}
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
      }
    })
  }

  accessMethod = (event) => {
    event.preventDefault();
    // let types = event.target.innerHTML;
    // let type = String(types);
    let userL = this.refs.nameL.value;
    let passL = this.refs.passL.value;
    let userS = this.refs.nameS.value;
    let passF = this.refs.passF.value;
    let passFs = this.refs.passFs.value;
if( userL !== "" && passL !== ""){
  this.props.login(userL, passL);
}
else if(userS !== "" && passF !== "" && passFs !== "" && passF === passFs){
  this.props.signup(userS,passF);
}
  }

  signType = (event) => {
    let type = event.target.innerHTML
    let types = String(type)
    this.setState({button: types})
    switch(types){
      case "Log In":
      this.setState({
        login:'show',
        signup:'hide',
        facebook:'hide',
        google:'hide'
      })
      break;
      case "Sign Up":
      this.setState({
        login:'hide',
        signup:'show',
        facebook:'hide',
        google:'hide'
      })
      break;
      case "Facebook":
      this.setState({
        login:'hide',
        signup:'hide',
        facebook:'show',
        google:'hide'
      })
      break;
      case "Google":
      this.setState({
        login:'hide',
        signup:'hide',
        facebook:'hide',
        google:'show',
      })

      break;
      default :
      break;
    }
  }
  render(){
    var login = this.state.login;
    var signup = this.state.signup;
    var facebook = this.state.facebook;
    var google = this.state.google;
    var button = this.state.button;
    var showError = this.state.showError;
    return (
      <div className="loginDiv">
      <div className="left-div-login">
        <h1> Welcome to Marvin's Private Shoe Store !</h1>
      </div>
        <div className="right-div-login">

        <form className={`access-type-form log-in ${login} `}>
          <div className="login-div-container">
          <div className={` ${showError.show}`}> {showError.error}</div>
            <h2 className="login-type">{button} </h2>
            <div className="div-form-login">
              <input className="log-sign-input" type="email" ref="nameL"/>
              <label className="label"> User Name</label>
            </div>
            <div className="div-form-login">
              <input className="log-sign-input" type="password" ref="passL"/>
              <label className="label"> Password</label>
            </div>
          </div>
          <button className="" onClick={this.accessMethod}> {button} </button>
        </form>
        <form className={`access-type-form sign-up ${signup} `}>
          <div className="login-div-container">
          <div className={` ${showError.show}`}> {showError.error}</div>
            <h2 className="login-type">{button} </h2>
            <div className="div-form-login">
              <input className="log-sign-input" type="email" ref="nameS"/>
              <label className="label"> User Name</label>
            </div>
            <div className="div-form-login ">
              <input className="log-sign-input" type="password" ref="passF"/>
              <label className="label"> Password</label>
            </div>
            <div className="div-form-login">
              <input className="log-sign-input" type="password" ref="passFs"/>
              <label className="label"> Confirm Password</label>
            </div>
          </div>
          <button className="" onClick={this.accessMethod}> {button} </button>
        </form>
        <div className={`facebook-div ${facebook}`} onClick={this.accessMethod}>
          <h2> FaceBook </h2>
        </div>
        <div className={`google-div ${google}`} onClick={this.accessMethod}>
          <h2> Google </h2>
        </div>
          <nav className="log-sign-login">
            <ul>
              <li className="sign-type-li {}" onClick={this.signType}>Log In</li>
              <li className="sign-type-li" onClick={this.signType}>Sign Up</li>
              <li className="sign-type-li facebook" onClick={this.signType}>Facebook</li>
              <li className="sign-type-li google" onClick={this.signType}>Google</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Login;
