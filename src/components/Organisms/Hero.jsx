import React from 'react'
import SportImage from "../../assets/images/banner.png"
import { Col, Container, Row } from 'react-bootstrap'

function Hero() {
  return (
    
   
            <Row className='400px bg-primary justify-content-center align-items-center m-0 p-0' style={{minHeight: 400, background: 'linear-gradient(to right, #0076fdff, #694ecdff)'}}>
               <Col className='m-0 p-0'>
                    <h1 className=''>Sport Shop</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, itaque nulla? Iste iusto vitae totam quibusdam voluptatum cumque, tempora reiciendis iure ratione, temporibus cum porro sit fuga aut, rerum quaerat?</p>
                </Col>
                <Col className='m-0 p-0'>
                    <img src={SportImage} alt="" className='' style={{maxWidth: 400}}/>
                </Col>
               
            </Row>

   
  )
}

export default Hero