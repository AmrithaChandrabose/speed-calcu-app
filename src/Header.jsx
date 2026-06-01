import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar className="bg-black">
                <Container >
                    <Navbar.Brand href="#home " className='text-white  '>
                        Speed Calculator
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header