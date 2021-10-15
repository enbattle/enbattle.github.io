import React from 'react';
import "./Projects.css";
import ReactTooltip from 'react-tooltip';

import githubIcon from '../assets/github.png';
import mongodbImg from '../assets/mongodb.png';
import vuejsImg from '../assets/vuejs.png';
import angularImg from '../assets/angular-logo.png';
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
            <section id="projects">
                <div className="project__section__style m-5 p-5">
                
                {/* Projects Header */}
                <div className="row">
                    <div className="d-inline-flex col-sm-4">
                        <h2 style={{marginRight: "1vw"}}><b>Projects</b></h2>
                        <a href="https://github.com/enbattle" target="_blank" rel="noreferrer">
                            <img className="social__media" src={githubIcon} alt="GitHub Icon"/>
                        </a>
                    </div>
                </div>
                
                <div className="project__grid__container">
                    {/* Deloitte Section */}
                    <div className="project__grid__item project__grid__size" data-tip data-for="deloitteDescription">
                        <div>
                            <div>
                                <h3 className="project__position"><b>Lead Back-end Developer</b></h3>
                            </div>
                            <div>
                                <a href="https://www2.deloitte.com" target="_blank" rel="noreferrer"><b>Deloitte</b></a>
                            </div>
                            <div>
                                <i>September 2019 - December 2019</i>
                            </div>
                            <div>
                                <p>Troy, New York, United States</p>
                            </div>
                            <div className="technology__logo__grid__container">
                                <div className="technology__logo__grid__item">
                                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                                        <img src={mongodbImg} className="technology__logo mb-5" alt="MongoDB"/>
                                    </a>
                                </div>
                                <div className="technology__logo__grid__item">
                                    <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                                        <img src={vuejsImg} className="technology__logo mb-5" alt="Vue.js"/>
                                    </a>
                                </div>
                                <div className="technology__logo__grid__item">
                                    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                                        <img src={nodejsImg} className="technology__logo mb-5" alt="Node.js"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReactTooltip id="deloitteDescription" place="bottom">
                        <ul className="tooltip__list">
                            <li>&#9758; Prototyped a “proof-of-concept” dashboard projected towards the integration of smart devices across all platforms</li>
                            <li>&#9758; Incorporated data analysis and visualization so users can view the frequency and usage of their smart devices.</li>
                            <li>&#9758; Designed a security framework of best practices when working with applications that deal with personal data and implemented functionality that minimized the possibility of security breaches to the system.</li>
                        </ul>
                    </ReactTooltip>

                    {/* Alzheimer's Prevention Section */}
                    <div className="project__grid__item project__grid__size" data-tip data-for="alzheimersDescription">
                        <div>
                            <div>
                                <h3 className="project__position"><b>Lead Full-Stack Developer</b></h3>
                            </div>
                            <div>
                                <a href="https://alzheimerspreventionproject.com" target="_blank" rel="noreferrer"><b>Alzheimer's Prevention Project</b></a>
                            </div>
                            <div>
                                <i>May 2019 - December 2019</i>
                            </div>
                            <div>
                                <p>Troy, New York, United States</p>
                            </div>
                            <div className="technology__logo__grid__container">
                                <div className="technology__logo__grid__item">
                                    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                                        <img src={mysqlImg} className="technology__logo mb-5" alt="SQL"/>
                                    </a>
                                </div>
                                <div className="technology__logo__grid__item">
                                    <a href="https://angular.io/" target="_blank" rel="noreferrer">
                                        <img src={angularImg} className="technology__logo mb-5" alt="Angular"/>
                                    </a>
                                </div>
                                <div className="technology__logo__grid__item">
                                    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                                        <img src={nodejsImg} className="technology__logo mb-5" alt="Node.js"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReactTooltip id="alzheimersDescription" place="bottom">
                        <ul className="tooltip__list">
                            <li>&#9758; Developed a web testing application, consisting of picture recognition and matching, memory awareness, and consistent survey questioning that will both test and reduce possible Alzheimer’s symptoms in the user.</li>
                            <li>&#9758; Implemented an analysis dashboard that allowed users to view test results and determine the severity of their Alzheimer’s symptoms.</li>
                        </ul>
                    </ReactTooltip>

                    {/* Tameless Designs Section */}
                    <div className="project__grid__item project__grid__size" data-tip data-for="tamelessDescription">
                        <div>
                            <div>
                                <h3 className="project__position"><b>Lead Front-end Developer</b></h3>
                            </div>
                            <div>
                                <a href="https://tamelessdesigns.com" target="_blank" rel="noreferrer"><b>Tameless Designs</b></a>
                            </div>
                            <div>
                                <i>January 2019 - June 2019</i>
                            </div>
                            <div>
                                <p>Troy, New York, United States</p>
                            </div>
                            <div className="technology__logo__grid__container">
                                <div className="technology__logo__grid__item">
                                    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                                        <img src={firebaseImg} className="technology__logo mb-5" alt="Google FireBase"/>
                                    </a>
                                </div>
                                <div className="technology__logo__grid__item">
                                    <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                                        <img src={vuejsImg} className="technology__logo mb-5" alt="Vue.js"/>
                                    </a>
                                </div>
                                <div className="technology__logo__grid__item">
                                    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                                        <img src={nodejsImg} className="technology__logo mb-5" alt="Node.js"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReactTooltip id="tamelessDescription" place="bottom">
                        <ul className="tooltip__list">
                            <li>&#9758; Amplified operation efficiency and overall productivity by automating the inventory management process.</li>
                            <li>&#9758; Implemented a sales analysis dashboard that visualized growth and trends for the business.</li>
                            <li>&#9758; Incorporated Cost-Benefit Analysis and Risk Analysis to ensure client’s satisfaction in the objectives of the project.</li>
                        </ul>
                    </ReactTooltip>

                </div>
            </div>
        </section>
      );
    }
}

export default Projects;