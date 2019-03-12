import React from "react";
import Card from "./Card.js"
import { ListGroup } from "react-bootstrap"
import "./App.css"

const Cards = ({ cardList, displayCard, }) => ( 

  <ListGroup style={{maxWidth: "400px", }}>{
      cardList.map( card => (<Card key={card.id} {...card} displayCard={displayCard}/>))
      }
  </ListGroup>
)

export default Cards