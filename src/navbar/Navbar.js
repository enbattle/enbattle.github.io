import React from "react";

import { NavLink } from 'react-router-dom';
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
            <div ref={node => this.node = node}>
                <Navbar className="navbar-opac" onToggle={this.toggleNav} expanded={this.state.navExpanded} collapseOnSelect fixed='top' expand='lg' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='m-auto'>
                                <NavLink activeClassName="is-active" className="nav-link navbarText navhover m-1" to="/home"><strong>Home</strong></NavLink>
                                <NavLink activeClassName="is-active" className="nav-link navbarText navhover m-1" to="/about-me"><strong>About Me</strong></NavLink>
                                <NavLink activeClassName="is-active" className="nav-link navbarText navhover m-1" to="/education"><strong>Education</strong></NavLink>
                                <NavLink activeClassName="is-active" className="nav-link navbarText navhover m-1" to="/skills"><strong>Programming Languages</strong></NavLink>
                                <NavLink activeClassName="is-active" className="nav-link navbarText navhover m-1" to="/work-experience"><strong>Experience</strong></NavLink>
                                <NavLink activeClassName="is-active" className="nav-link navbarText navhover m-1" to="/projects"><strong>Projects</strong></NavLink>
                                <NavLink activeClassName="is-active" className="nav-link navbarText navhover m-1" to="/hackathons"><strong>Hackathons</strong></NavLink>
                                <NavLink activeClassName="is-active" className="nav-link navbarText navhover m-1" to="/leadership"><strong>Leadership</strong></NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>  
            </div>
        );
    }
}

export default Navigation;