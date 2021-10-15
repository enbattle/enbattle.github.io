import React from "react";
import "./Navbar.css";

import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navExpanded: false
        }

        this.toggleNav = () => this.setState({navExpanded: !this.state.navExpanded});

        this.handleClick = (e) => {
            this.setState({ navExpanded: false });
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick, true);      
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }

    render() {
        return (
            <Navbar className="navbar__opac" onToggle={this.toggleNav} expanded={this.state.navExpanded} collapseOnSelect fixed='top' expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='m-auto'>
                            <Link activeClass="is__active" className="nav-link navbarText navhover m-1 p-2" to="home" spy={true}><strong>Home</strong></Link>
                            <Link activeClass="is__active" className="nav-link navbarText navhover m-1 p-2" to="aboutme" spy={true}><strong>About Me</strong></Link>
                            <Link activeClass="is__active" className="nav-link navbarText navhover m-1 p-2" to="education" spy={true}><strong>Education</strong></Link>
                            <Link activeClass="is__active" className="nav-link navbarText navhover m-1 p-2" to="programming" spy={true}><strong>Programming Languages</strong></Link>
                            <Link activeClass="is__active" className="nav-link navbarText navhover m-1 p-2" to="workexperience" spy={true}><strong>Experience</strong></Link>
                            <Link activeClass="is__active" className="nav-link navbarText navhover m-1 p-2" to="projects" spy={true}><strong>Projects</strong></Link>
                            <Link activeClass="is__active" className="nav-link navbarText navhover m-1 p-2" to="leadership" spy={true}><strong>Leadership</strong></Link>
                            <Link activeClass="is__active" className="nav-link navbarText navhover m-1 p-2" to="contact" spy={true}><strong>Contact</strong></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        );
    }
}

export default Navigation;