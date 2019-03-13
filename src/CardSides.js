import React, {Component, } from "react";
import {Col,  } from "react-bootstrap"

class CardSides extends Component{
  state = { side: true }

  
handleClick = () => this.setState({side: !this.state.side, })

render () {
  return (
    <Col>
      <h1>{this.state.side ? this.props.front : this.props.back }</h1>
      
      <h4 onClick={this.handleClick} style={{position:"absolute", bottom:"0", right:"0", cursor:"pointer", color: "#c4c4c4" }}>Flip</h4>
    </Col>
    )
  }
}



export default CardSides
