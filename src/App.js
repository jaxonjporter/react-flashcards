import React, { Fragment, } from 'react';
import FlashCards from "./components/FlashCards.js"
import {Route, Switch} from "react-router-dom"
import NavBar from "./components/Navbar.js"
import Home from "./components/Home.js"
import NoPage from "./components/NoPage.js";
import About from "./components/About.js"

import {Col, Container, Row, Button, } from "react-bootstrap";
import './App.css';

const App = () => (
<Fragment>
  <NavBar />
  <Container>
  <Switch>
    <Route exact path="/flashcards" component={FlashCards} />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route component={NoPage}/>
  </Switch>
  </Container>
</Fragment>

)
export default App;
