import React from 'react'
import { Col, Container } from 'react-bootstrap'
import Button from '../components/Atoms/Button'
import Hero from '../components/Organisms/Hero'


function Home() {
    return (
        <Container className=''>
            <Col>  
                <Hero/>
            </Col>
        </Container>
    )
}

export default Home