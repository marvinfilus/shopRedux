import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
//rebase files and firebase
import {app , base} from './rebase';
import firebase from 'firebase';
//css files
import '../Css/header.css'

function Home(){
  let history = useHistory();
  const goHome = () => {
    history.push('/');
  }

  return <a href="/" className="goHome" onClick={goHome}> Home </a>
}

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){

      }
    })
  }
  logOut = () => {
    firebase.auth().signOut().then(function() {
        this.props.logout();
      }).catch(function(error) {
      // An error happened.
      });
  }

  render(){
    return (
      <div className="div-header">
        <header className={`header-header`}>
          <nav className="header-nav">
            <li className={``}> <img src="/" /></li>
            <li className=""> <Home /> </li>
            <li className=""> About </li>
            <li className=""  onClick={this.logOut}> <button >Log out </button> </li>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header ;
