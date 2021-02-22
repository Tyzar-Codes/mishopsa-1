import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <Container>
        <hr className="FooterLine"/>
        <div className = "text-center">
          
        
          
          <img
          src = "../images/paypal-logo.png"
          alt = 'paypal-logo'
          className = 'paypal'
          />
           
        
        
         
        </div>

        <Row>
          <Col className='text-center py-3'>Copyright &copy; miShop 2021</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer