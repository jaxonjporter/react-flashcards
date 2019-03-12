import React from "react";
import { ListGroup } from "react-bootstrap"
import "./App.css"

const Card = ({id, front, back, displayCard }) => (
  <ListGroup.Item className="hover" onClick={() => displayCard(id)} >{front}</ListGroup.Item>
)

export default Card