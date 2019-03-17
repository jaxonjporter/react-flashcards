import React from "react";
import Card from "./Card.js"
import { ListGroup } from "react-bootstrap"
import "../../App.css"

const Cards = ({ cardList, displayCard, deleteCard, }) => ( 

  <ListGroup style={{maxWidth: "400px", }} className="shadow">{
      cardList.map( card => (<Card key={card.id} {...card} deleteCard={deleteCard} displayCard={displayCard}/>))
      }
  </ListGroup>
)

export default Cards