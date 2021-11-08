import React, { useState } from 'react';
import './conversor-moedas.css';
import { Button, Form, Col, Row, Spinner, Alert, Modal } from 'react-bootstrap';
import './conversor-moedas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import ListarMoedas from './listar-moedas';

function ConversorMoedas() {
  const [valor, setValor] = useState('1');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');

  function handleValor(event) {
    setValor(event.target.value.replace(/\D/g, ''));
  }

  function handleMoedaDe(event) {
    setMoedaDe(event.target.value);
  }

  function handleMoedaPara(event) {
    setMoedaPara(event.target.value);
  }

  return (
  <div class="jumbotron">
   <h1> ConversorMoedas </h1>
   <Alert variant="danger" show={false}>
    Erro obtendo dados de conversão, tente novamente.
   </Alert>
   <Form>
     <Row>
       <Col sm="3">
        <Form.Control 
          placeholder="0" 
          value={valor}
          onChange={handleValor}
          required />
       </Col>
       <Col sm="3">
         <Form.Select 
         value={moedaDe}
         onChange={handleMoedaDe}>
            <ListarMoedas />
         </Form.Select>
       </Col>
       <Col sm="1" className="text-center" style={{paddingTop: '5px'}}>
          <FontAwesomeIcon icon={faAngleDoubleRight}/>
       </Col>
       <Col sm="3">
         <Form.Select
          value={moedaPara}
          onChange={handleMoedaPara}>
          <ListarMoedas />
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
   <Modal show={false}>
    <Modal.Header closeButton>
      <Modal.Title> Conversão</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Resultado da conversão aqui...
    </Modal.Body>
    <Modal.Footer>
      <Button variant="success">
        Nova conversão
      </Button>
    </Modal.Footer>
   </Modal>
  </div>
  );
}

export default ConversorMoedas;
