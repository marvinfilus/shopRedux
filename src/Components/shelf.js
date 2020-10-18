import React, {Component} from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
//rebase files and firebase
import {app , base} from './rebase';
import firebase from 'firebase';
import shoeStore from '../json/shoeStore';
import '../Css/shelf.css';

function Button(item){
  const history = useHistory();
  const viewShoe = (props) => {
    let path = `/shoe/${item.id}`
    history.push(path)
  }
  // console.log(item.img)
    return(
    null
    )
}

class Shelf extends Component {
  constructor(props){
    super(props);
    this.state = {
      shoes : []
    }
  }
  componentDidMount = () => {
    this.setState({ shoes: shoeStore})
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
      }
    })
  }
  onClickAdd = (item) => {
    this.props.addItem(item);
    this.props.addState(item);
  }
  render = () => {
    var shoes = this.state.shoes;
    const shelfItems = shoes.map((item,idx)=>{
      return (
        <div className="shoecard" key={idx} >
            <h2 className="shoe-name"> {item.name}</h2>
              <a href={`/shoe/${item.id}`}> <img className="shoe-img" src={item.img} alt="" / ></a>
            <Button item={item} id={idx} />
            <li key={idx}> <p>Add to cart <button onClick={this.onClickAdd.bind(this, item)}> {item.name} </button></p> </li>
        </div>
      )
    })
    return (
      <div className="shelf-container">
        <h2> Jordans </h2>
        <ul className="shelf-ul">
          {shelfItems}
        </ul>
      </div>
    );
  }
}
export default Shelf ;
