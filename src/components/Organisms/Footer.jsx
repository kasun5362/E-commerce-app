import React from 'react'
import { Container ,Row, Col} from 'react-bootstrap'

function Footer() {
  return (
    <footer className='bg-dark position-absolute bottom-0 start-0 end-0 py-2'>

        <Container className=''>
                <Row>
                    <Col>
                        <p className='text-light mb-0'>&copy; 2006  SportShop All rights reserved</p>
                    </Col>


                
                    
                          
                </Row>
                            
                
        </Container>
    </footer>
  )
}

export default Footer