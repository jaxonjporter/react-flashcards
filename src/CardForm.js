import React, { Component,} from "react";
import { Form, Button,} from "react-bootstrap";


class CardForm extends Component {
  state = { front: "", back: "",}

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state)
    this.setState({ front: "", back: ""})
    this.props.toggleForm()

  }


  render () {
    return(
      
      <Form style={{marginTop: "20px", maxWidth: "400px"}}>
        <Form.Group widths="equal">
          <Form.Control label="Front" placeholder="Front" name="front" value={this.state.front} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Control label="Back" placeholder="Back" name="back" value={this.state.back} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group>
          <Button varient="primary" onClick={this.handleSubmit}>Submit</Button>
        </Form.Group>
      </Form>

    )
  }
}

export default CardForm;