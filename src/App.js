import React, { Component } from 'react';
import CardForm from "./CardForm.js"
import CardContent from "./CardContent";
import Cards from "./Cards.js";
import {Col, Container, Row, Button, } from "react-bootstrap";
import './App.css';

class App extends Component {
  state = {
    cards: [
      {id: 1, front: "Computer", back: "A dumb brick", },
      {id: 2, front: "Phone", back: "Also dumb brick", },
      {id: 3, front: "Watch", back: "Still a dumb brick", },
      {id: 4, front: "Brick", back: "A brick", }
    ],
    newCard: { id: "", front: "", back: "" },
    showForm: false
  }

  toggleForm = () => this.setState({showForm: !this.state.showForm, })


  displayCard = (id) => {
    this.state.cards.filter( card => {
      if (card.id === id){
        this.setState({ newCard: card })
      }
      return card
    })
  }

  getId = () => (Math.floor((1+Math.random())*10000))

  addCard = (card) => {
    let newsCard = { id: this.getId(), ...card,}
    this.setState({ cards: [...this.state.cards, newsCard] })
  }

  deleteCard = (id) => {
    const curds = this.state.cards.filter( card => {
    if (card.id !== id){
      return card
    }
  })
  this.setState({ cards: curds, })
}



  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>FlashCards</h1>
            <Cards cardList={this.state.cards} deleteCard={this.deleteCard} displayCard={this.displayCard} />
           <Button variant="primary" onClick={this.toggleForm} style={{marginTop: "10px"}}>Add New Card</Button> 
            {this.state.showForm ? <CardForm addCard={this.addCard} toggleForm={this.toggleForm}/> : null }
          </Col>
          <Col>
            <h1>Card</h1>
            <CardContent cardInfo={this.state.newCard} />
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default App;
