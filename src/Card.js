import React, {Component, } from "react";
import { ListGroup, Button, } from "react-bootstrap"
import "./App.css"

class Card extends Component {

  state = { edit: false, }

  render() {
    return (
    <ListGroup.Item className="hover" onClick={() => this.props.displayCard(this.props.id)} >{this.props.front}
      <Button variant="outline-danger" style={{position:"absolute", right:"10px", bottom: "5px"}} onClick={() => this.props.deleteCard(this.props.id)}>Delete</Button><Button variant="outline-warning"style={{position:"absolute", right:"85px", bottom: "5px"}}>Edit</Button>
    </ListGroup.Item>
    )
  }

}

export default Card