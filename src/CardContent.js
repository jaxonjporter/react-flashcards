import React from "react";
import CardSides from "./CardSides.js"
import { Card, } from 'react-bootstrap';

const CardContent = ({ cardInfo, }) => (
      <Card className="shadow"style={{ Width: "40%", minHeight: "200px" , backgroundColor: "#f4f4f4", }}>{
        <CardSides key={cardInfo.id} {...cardInfo} />
      }</Card>
)
    

export default CardContent
