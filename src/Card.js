import React, {Component, } from "react";
import { ListGroup } from "react-bootstrap"
import "./App.css"

class Card extends Component {

  state = { edit: false, }

  render() {
    return (
    <ListGroup.Item className="hover" onClick={() => this.props.displayCard(this.props.id)} >{this.props.front}
      <button style={{position:"absolute", right:"10px"}} onClick={() => this.props.deleteCard(this.props.id)}>Delete</button><button style={{position:"absolute", right:"80px"}}>Edit</button>
    </ListGroup.Item>
    )
  }

}

export default Card