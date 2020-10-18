import React, {Component} from 'react';
import {bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';
import Shelf from './shelf';
// Css files
import '../Css/cart.css'
import shoeStore from '../json/shoeStore';
// firebase and Rebase
import {app ,base } from './rebase';
import firebase from 'firebase';

class CartList extends Component {
  constructor(props){
    super(props);
    this.state = {
      shoppingCart:[],
      cart:[],
      shoeStore:[]
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        base.syncState(`user/${user.uid}}`, {
          context: this,
          state: 'cart',
          asArray: true
        });
      }
    })
  }

  deleteItem = (item,idx) => {
    this.props.delete(item,idx);
  }
  render(){
    var list = this.props.cartList
    const cartList = list.map((item,idx)=>{
      return (
        <div className="" key={idx}>
          <p> {item.name} </p>
          <p> {item.price}</p>
          <button onClick={this.deleteItem.bind(this,item,idx)}> Delete Item </button>
        </div>
      )
    })
    console.log(list);
    return (
      <li> {cartList} </li>
    )
  }
}

export default CartList
