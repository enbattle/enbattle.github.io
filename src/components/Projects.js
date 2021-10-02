import React from 'react';
import { Modal } from "react-bootstrap";

import githubIcon from '../assets/github.png';
import mongodbImg from '../assets/mongodb.png';
import expressjsImg from '../assets/expressjs.png';
import vuejsImg from '../assets/vuejs.png';
import nodejsImg from '../assets/nodejs.png';
import firebaseImg from '../assets/firebase.png';
import mysqlImg from '../assets/mysql.png';

class Projects extends React.Component {
    state = {
        deloitteModalIsOpen: false,
        alzheimerModalIsOpen: false,
        tamelessModalIsOpen: false
    };

    openDeloitteModal = () => this.setState({ deloitteModalIsOpen: true });
    closeDeloitteModal = () => this.setState({ deloitteModalIsOpen: false });

    openAlzheimerModal = () => this.setState({ alzheimerModalIsOpen: true });
    closeAlzheimerModal = () => this.setState({ alzheimerModalIsOpen: false });
    
    openTamelessModal = () => this.setState({ tamelessModalIsOpen: true });
    closeTamelessModal = () => this.setState({ tamelessModalIsOpen: false });

    render() {
        return (
            <section id="projects" className="container">
                <div className="section-style m-5 p-5">
                
                {/* Projects Header */}
                <div className="row">
                    <div className="d-inline-flex col-sm-4">
                        <h2 style={{marginRight: "1vw"}}><b><u>Projects</u></b></h2>
                        <a href="https://github.com/enbattle" target="_blank" rel="noreferrer">
                            <img className="social-media" src={githubIcon} alt="GitHub Icon"/>
                        </a>
                    </div>
                </div>
                
                {/* Deloitte Section */}
                <div className="row mb-5">
                    <div className="col-sm-4">
                        <a href="https://www2.deloitte.com" target="_blank" rel="noreferrer"><b>Deloitte</b></a>
                        <br/>
                        <b>Lead Back-end Developer</b>
                        <br/>
                        <i>September 2019 - December 2019</i>
                        <br/>
                        <p>Troy, New York, United States</p>
                        
                        {/* Deloitte Technology Stack Button */}
                        <button type="button" className="btn btn-primary p-3 mb-3" onClick={this.openDeloitteModal}>
                            Deloitte Project Technology Stack
                        </button>

                        {/* Deloitte Description Modal */}
                        <Modal show={this.state.deloitteModalIsOpen} onHide={this.closeDeloitteModal}>
                            <Modal.Header>
                                <Modal.Title>Deloitte Project Technology Stack</Modal.Title>
                                <button type="button" className="close__button" aria-label="Close Deloitte Modal" onClick={this.closeDeloitteModal}>
                                    <span className="close__button__text">&times;</span>
                                </button>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="d-flex justify-content-center">
                                    <h6>Click on any of the components of the technology stack to learn more!</h6>
                                </div>
                                <div>
                                    <a href="https://www.mongodb.com/" className="d-flex justify-content-center" target="_blank" rel="noreferrer">
                                        <img src={mongodbImg} className="technology-logo mb-5" alt="MongoDB"/>
                                    </a>
                                </div>
                                
                                <div>
                                    <a href="https://expressjs.com/" className="d-flex justify-content-center" target="_blank" rel="noreferrer">
                                        <img src={expressjsImg} className="technology-logo mb-5" alt="Express.js"/>
                                    </a>
                                </div>
                                
                                <div>
                                    <a href="https://vuejs.org/" className="d-flex justify-content-center" target="_blank" rel="noreferrer">
                                        <img src={vuejsImg} className="technology-logo mb-5" alt="Vue.js"/>
                                    </a>
                                </div>
                                
                                <div>
                                    <a href="https://nodejs.org/en/" className="d-flex justify-content-center" target="_blank" rel="noreferrer">
                                        <img src={nodejsImg} className="technology-logo mb-5" alt="Node.js"/>
                                    </a>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button type="button" className="btn btn-secondary" onClick={this.closeDeloitteModal}>Close</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    
                    <div className="col-sm-8">
                        <ul>
                            <li>Prototyped a “proof-of-concept” dashboard projected towards the integration of smart devices across all platforms</li>
                            <li>Incorporated data analysis and visualization so users can view the frequency and usage of their smart devices.</li>
                            <li>Designed a security framework of best practices when working with applications that deal with personal data and implemented functionality that minimized the possibility of security breaches to the system.</li>
                        </ul>
                    </div>
                </div>
                
                {/* Alzheimer's Prevention Section */}
                <div className="row mb-5">
                    <div className="col-sm-4">
                        <a href="https://alzheimerspreventionproject.com" target="_blank" rel="noreferrer"><b>Alzheimer's Prevention Project</b></a>
                        <br/>
                        <b>Lead Full-Stack Developer</b>
                        <br/>
                        <i>May 2019 - December 2019</i>
                        <br/>
                        <p>Troy, New York, United States</p>
                        
                        {/* Alzheimer's Prevention Technology Stack Button */}
                        <button type="button" className="btn btn-primary mb-3 p-3" onClick={this.openAlzheimerModal}>
                            Alzheimer's Prevention Project Technology Stack
                        </button>

                        {/* Alzheimer's Prevention Description Modal */}
                        <Modal show={this.state.alzheimerModalIsOpen} onHide={this.closeAlzheimerModal}>
                            <Modal.Header>
                                <Modal.Title>Alzheimer's Prevention Technology Stack</Modal.Title>
                                <button type="button" className="close__button" aria-label="Close Alzheimer's Modal" onClick={this.closeAlzheimerModal}>
                                    <span className="close__button__text">&times;</span>
                                </button>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="d-flex justify-content-center">
                                    <h6>Click on any of the components of the technology stack to learn more!</h6>
                                </div>
                                <div>
                                    <a href="https://www.mysql.com/" className="d-flex justify-content-center" target="_blank" rel="noreferrer">
                                        <img src={mysqlImg} className="technology-logo mb-5" alt="SQL"/>
                                    </a>
                                </div>
                                
                                <div>
                                    <a href="https://expressjs.com/" className="d-flex justify-content-center" target="_blank" rel="noreferrer">
                                        <img src={expressjsImg} className="technology-logo mb-5" alt="Express.js"/>
                                    </a>
                                </div>
                                
                                <div>
                                    <a href="https://vuejs.org/" className="d-flex justify-content-center" target="_blank" rel="noreferrer">
                                        <img src={vuejsImg} className="technology-logo mb-5" alt="Vue.js"/>
                                    </a>
                                </div>
                                
                                <div>
                                    <a href="https://nodejs.org/en/" className="d-flex justify-content-center" target="_blank" rel="noreferrer">
                                        <img src={nodejsImg} className="technology-logo mb-5" alt="Node.js"/>
                                    </a>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button type="button" className="btn btn-secondary" onClick={this.closeAlzheimerModal}>Close</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    
                    
                    <div className="col-sm-8">
                        <ul>
                            <li>Developed a web testing application, consisting of picture recognition and matching, memory awareness, and consistent survey questioning that will both test and reduce possible Alzheimer’s symptoms in the user.</li>
                            <li>Implemented an analysis dashboard that allowed users to view test results and determine the severity of their Alzheimer’s symptoms.</li>
                        </ul>
                    </div>
                </div>
                
                {/* Tameless Designs Section */}
                <div className="row">
                    <div className="col-sm-4">
                        <a href="https://tamelessdesigns.com" target="_blank" rel="noreferrer"><b>Tameless Designs</b></a>
                        <br/>
                        <b>Lead Front-end Developer</b>
                        <br/>
                        <i>January 2019 - June 2019</i>
                        <br/>
                        <p>Troy, New York, United States</p>
                        
                        {/* Tameless Designs Technology Stack Button */}
                        <button type="button" className="btn btn-primary mb-3 p-3" onClick={this.openTamelessModal}>
                            Tameless Designs Project Technology Stack
                        </button>

                        {/* Alzheimer's Prevention Description Modal */}
                        <Modal show={this.state.tamelessModalIsOpen} onHide={this.closeTamelessModal}>
                            <Modal.Header>
                                <Modal.Title>Tameless Designs Technology Stack</Modal.Title>
                                <button type="button" className="close__button" aria-label="Close Tameless's Modal" onClick={this.closeTamelessModal}>
                                    <span className="close__button__text">&times;</span>
                                </button>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="d-flex justify-content-center">
                                    <h6>Click on any of the components of the technology stack to learn more!</h6>
                                </div>
                                
                                <div>
                                    <a href="https://firebase.google.com/" className="d-flex justify-content-center" target="_blank" rel="noreferrer">
                                        <img src={firebaseImg} className="technology-logo mb-5" alt="Google FireBase"/>
                                    </a>
                                </div>
                                
                                <div>
                                    <a href="https://expressjs.com/" className="d-flex justify-content-center" target="_blank" rel="noreferrer">
                                        <img src={expressjsImg} className="technology-logo mb-5" alt="Express.js"/>
                                    </a>
                                </div>
                                
                                <div>
                                    <a href="https://vuejs.org/" className="d-flex justify-content-center" target="_blank" rel="noreferrer">
                                        <img src={vuejsImg} className="technology-logo mb-5" alt="Vue.js"/>
                                    </a>
                                </div>
                                
                                <div>
                                    <a href="https://nodejs.org/en/" className="d-flex justify-content-center" target="_blank" rel="noreferrer">
                                        <img src={nodejsImg} className="technology-logo mb-5" alt="Node.js"/>
                                    </a>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button type="button" className="btn btn-secondary" onClick={this.closeTamelessModal}>Close</button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    
                    
                    <div className="col-sm-8">
                        <ul>
                            <li>Amplified operation efficiency and overall productivity by automating the inventory management process.</li>
                            <li>Implemented a sales analysis dashboard that visualized growth and trends for the business.</li>
                            <li>Incorporated Cost-Benefit Analysis and Risk Analysis to ensure client’s satisfaction in the objectives of the project.</li>
                        </ul>
                    </div>
                </div>
                
                </div>
            </section>
      );
    }
}

export default Projects;