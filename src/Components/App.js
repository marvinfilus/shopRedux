import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';

//Component files
import Cart from './cart';
import Shelf from './shelf';
import Login from './login';
import Header from './header';
import Shoe from './shoe';
import Footer from './footer';
//css files
import '../Css/App.css'
//rebase files and firebase
import {app ,base } from './rebase';
import firebase from 'firebase';

//Json Files
import shoeStore from '../json/shoeStore.js'


function Button(){
  let history = useHistory();
  const button = () =>{
    // history.push('/');
    console.log("null")
  }
  return <a href="/" onClick={button}> Click here </a>
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      isUser:false,
      user : {}
    }
  }

  componentDidMount = () => {
    let userState = this.state.user;
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        base.syncState(`user/${user.uid}}`, {
          context: this,
          state: 'user',
          asArray: false
        });
        if(!userState.uid){
          this.setState({
            user:{
              uid:user.uid,
              email:user.email
            }
          })
        }
        this.setState({isUser:true})
      } else{
        this.setState({isUser:false})
      }
    })
  }

logout = () => {
  this.setState({ isUser : false })
}
login = (email,pass) => {
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage)
    // ...
  });
}
  signup = (email,pass) => {
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
  }
  render(){
    var isUser = this.state.isUser;
    var user = this.state.user;

    return (
      <Router>
        <div className="App">
          {isUser ? <Header /> : null}
          <Route exact path="/" render={({match}) =>  (isUser ? ( <Redirect to="/privatecollection" />) : (<Login login={this.login.bind()} signup={this.signup.bind()} />)) }/>
          <div className={isUser ? 'show container' : 'hide'}>
            <Route exact path="/privatecollection" render={(pickles) => <Cart logout={this.logout}/> } />
            <Route path="/shoe/:id" render={({match})=> <Shoe match={match.params.id}/> }/>
          </div>
          <div className={isUser ? 'hide' : 'show backHome'} >
            <h1> Please Log In to continue </h1>
            <p> To log back in <Button/> </p>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
