import React, {Component} from 'react';
// Css files
import '../Css/footer.css'

class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){

    return (
      <div className="container-footer">
        <nav>
          <li className=""> Settings </li>
          <li className=""> About </li>
          <li className=""> <a href="/"> Home </a></li>
        </nav>
      </div>
    )
  }
}

export default Footer
