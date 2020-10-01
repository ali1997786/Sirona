import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button , Container,Row,Col, } from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify'
import Home from './components/Home';
import Delivery from './components/Orders';
import Orders from './components/Delivery';
import {Card,CardBody,CardText,CardDeck,CardTitle,CardSubtitle} from "reactstrap";
import Menus from "./components/Menus";
import { Table } from 'reactstrap';
import{BrowserRouter as Router,Route} from "react-router-dom";
import DashBoard from "./components/DashBoard";
function App() {

const btnHandle= () => {

toast.success("This  is my message");
} ;

  return (
    <div>
      <Router>
      <ToastContainer />
    <Container>
   
      <Row>
        <div className="text-right my-5">
       <Col my={1}>
       <Menus />
       </Col>
       </div>
       <div>
       <Col md={11}>
         {/* <DashBoard /> */}

         <Route path="/DashBoard"component={DashBoard} exact />
         <Route path="/Orders"component={Orders} exact />
         <Route path="/Delivery"component={Delivery} exact />
         </Col>
       </div>

        
 
      </Row>
    </Container>
      </Router>
  
      </div>
   
    )

};

export default App;
