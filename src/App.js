import React, { Component } from 'react';
import CardContent from "./CardContent";
import Cards from "./Cards.js";
import {Col, Container, Row} from "react-bootstrap";
import './App.css';

class App extends Component {
  state = {
    cards: [
      {id: 1, front: "Computer", back: "A dumb brick", },
      {id: 2, front: "Phone", back: "Also dumb brick", },
      {id: 3, front: "Watch", back: "Still a dumb brick", },
      {id: 4, front: "Brick", back: "A brick", }
    ],
    newCard: { id: "", front: "", back: "" }
  }


  displayCard = (id) => {
    this.state.cards.filter( card => {
      if (card.id === id){
        this.setState({ newCard: card })
      }
      return card
    })
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
