import React from "react";
import {Card,CardBody,CardText,CardDeck,CardTitle,CardSubtitle,CardImg} from "reactstrap";
import {Button , Container,Row,Col, } from 'reactstrap';
import { Table } from 'reactstrap';
const DashBoard =(props)=> {
    var cardStyle = {
        display: 'block',
        width: '10vw',
        transitionDuration: '0.3s',
        height: '5vw'
        
    }
     return(
        
        <CardDeck className="my-5">
            <div>
      <Card style={cardStyle}>
        <CardBody >
          <CardTitle></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
         
        </CardBody>
      </Card>
      </div>
      <div>
          <Card style={cardStyle}>
        
        <CardBody>
          <CardTitle></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          
        </CardBody>
      </Card>
      </div>
      <div>
          <Card style={cardStyle}>
        
        <CardBody>
          <CardTitle></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>.</CardText>
          
        </CardBody>
      </Card></div>
      <div>
          <Card style={cardStyle}>
        
        <CardBody>
          <CardTitle></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>.</CardText>
          
        </CardBody>
      </Card></div>
      
    </CardDeck>
     ); 
     <Table>
     <thead>
       <tr className="bg-primary">
         <th>S.no.</th>
         <th>Order ID</th>
         <th>Expected Delivery</th>
         <th>Name</th>
         <th>Contact</th>
         <th>Order Date</th>
         <th>Delivery BY</th>
         <th>Address</th>
         <th>Amount</th>
         <th>Order</th>    
       </tr>
     </thead>
     
   </Table>
     
 };
 export default DashBoard;