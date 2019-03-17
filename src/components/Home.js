import React from "react";
import {Carousel, } from "react-bootstrap";
import logo from "../logo.svg"
import { blockParams } from "handlebars";


class Home extends React.Component {
  render () {
    return (
      <div className="row">
        
        <div className="col-12 text-center">
        <div className="bg-light" style={{height: "350px"}}>
        </div>
        </div>
        <div className="col-12 text-center">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 bg-dark p-5"
                style={{height: "300px",}}
                src={logo}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 bg-dark p-5"
                style={{height: "300px",}}
                src={logo}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 bg-dark p-5"
                style={{height: "300px",}}
                src={logo}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}

export default Home;