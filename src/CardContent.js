import React from "react";
import CardSides from "./CardSides.js"
import { Card, } from 'react-bootstrap';

const CardContent = ({ cardInfo, }) => (
      <Card style={{ minWidth: "40%", minHeight: "100%", backgroundColor: "#f4f4f4", }}>{
        <CardSides key={cardInfo.id} {...cardInfo} />
      }</Card>
)
    

export default CardContent
