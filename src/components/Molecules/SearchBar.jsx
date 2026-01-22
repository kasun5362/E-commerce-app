import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

function SearchBar() {
  return (
    <Form>
        <InputGroup>
            <Form.Control type='search' placeholder='Search Products'/>
            <Button variant='outline-primary'>
                <i className='bi bi-search'></i>
            </Button>
        </InputGroup>

        
    </Form>
  )
}

export default SearchBar