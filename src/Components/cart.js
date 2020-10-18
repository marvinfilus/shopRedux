import React, {Component} from 'react';
import {bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../actions/cart';
import Shelf from './shelf';
import CartList from './cartList';
// Css files
import '../Css/cart.css'
import shoeStore from '../json/shoeStore';
//firebase and firebase
import firebase from 'firebase';
import {base,app} from './rebase';


class Cart extends Component {
  constructor(props){
    super(props);
    this.state = {
      cart:[],
      shoeStore:[]
    }
  }

  componentDidMount = () => {
    console.log(this.props)
    this.setState({
       shoeStore : shoeStore,
       cart : this.props.cart
    })
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

addState=(item)=>{
  let cart = this.state.cart.push(item)
  console.log(cart)
  this.setState({ cart: cart })
}

  render = () => {
    var shoeStore = this.state.shoeStore;
    var cart = this.props.cart;
    const shoeTypeList = shoeStore.map((shoe,idx)=>{
      return  (
        <div className="shoe-card" key={idx}>
          <a href={`/shoe/${shoe.id}`}> <img className="shoeImg" src={shoe.img} /> </a>
          <li className="shoe-li"> {shoe.name}</li>
        </div>
      )
    })
    return (
      <div className="Cart ">
        <header className="cart-header">
          <h2> Marvin's Private Shoe Collection </h2>
        </header>
        <section className="main-section">
          <nav className="shoe-type-list">
            {shoeTypeList}
          </nav>
          <div className="store-type">
            <Shelf addItem={this.props.actions.addToCart} addState={this.addState} />
          </div>
          <div className="cart-items">
            <h2> Cart Items </h2>
            <ol>
              <CartList cartList={cart} delete={this.props.actions.delFromCart}/>
            </ol>
          </div>
        </section>
      </div>
    );
  }
}
  function mapStateToProps (state, props){
    return {
      cart: state.cart
    };
  }

  function mapDispatchToProps(dispatch){
    return {
       actions : bindActionCreators(cartActions, dispatch)
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
