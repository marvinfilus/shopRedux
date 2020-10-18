import React, {Component} from 'react';
// import $ from 'jquery';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import shoeStore from '../json/shoeStore';

//Css file
import '../Css/shoe.css';

class Shoe extends Component {
  constructor(props){
    super(props);
    this.state = {
      shoe:{}
    }

  }

  componentDidMount = (props) => {
    let shoe = shoeStore;
    let id = this.props.match;
    this.setState({ shoe:shoeStore[id] });
  }
  render(){
    let shoe = this.state.shoe;
    console.log(shoe.img);
    return(
    <div className="main-shoe">
      <div className="div-shoe-container ">
        <div className="div-shoe">
          <img className="img-shoe" src={`${shoe.img}`} alt="" />
        </div>
        <div className="line-div"> </div>
        <div className="div-shoe">
            <h1 className="h1-shoe"> {shoe.name}</h1>
        </div>
      </div>
      <div className="details-shoe">
        <p> Product details </p>
        <p>{shoe.description}</p>
      </div>
    </div>
    )
  }
}

export default Shoe
