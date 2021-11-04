import React from 'react';
import './conversor-moedas.css';
import { Button, Form, Col, Row, Spinner } from 'react-bootstrap';
import './conversor-moedas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function ConversorMoedas() {
  return (
  <div class="jumbotron">
   <h1> ConversorMoedas </h1>
   <Form>
     <Row>
       <Col sm="3">
        <Form.Control 
          placeholder="0" 
          value={1}
          required />
       </Col>
       <Col sm="3">
         <Form.Select>
         </Form.Select>
       </Col>
       <Col sm="1" className="text-center" style={{paddingTop: '5px'}}>
          <FontAwesomeIcon icon={faAngleDoubleRight}/>
       </Col>
       <Col sm="3">
         <Form.Select>
         </Form.Select>       
       </Col>
       <Col sm="2">
        <Button variant="success" type="submit" >
          <Spinner animation="border" size="sm" />
          Converter 
        </Button>
       </Col>
     </Row>
   </Form>
  </div>
  );
}

export default ConversorMoedas;
