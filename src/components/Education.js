import React from "react";
import "./Education.css";

import rpiLogo from '../assets/rpi-logo.png';

class Education extends React.Component {
    render() {
        return (
            <section id="education">
                <div className="education__section__style m-5 p-5">
                    
                    {/* Education Header */}
                    <div className="row">
                        <div className="col-sm-4">
                            <h2 className="education__header"><b>Education</b></h2>
                        </div>
                    </div>

                    {/* College Education */}
                    <div className="education__grid__container">
                        <div className="education__grid__item">
                            <div className="mb-5">
                                <a href="https://www.rpi.edu" target="_blank" rel="noreferrer"><img className="school__logo" src={rpiLogo} alt="RPI Logo"/></a>
                            </div>
                            <div>
                                <a href="https://www.rpi.edu" target="_blank" rel="noreferrer"><b>Rensselaer Polytechnic Institute</b></a>
                            </div>
                            <div>
                                Bachelor of Science - B.S, Computer Science and Information Technology &amp; Web Science, Dual Major
                            </div>
                        </div>
                    </div>
                        
                    {/* <div>
                        <div className="mb-3">
                            <b>Bachelor of Science - B.S, Computer Science and Information Technology &amp; Web Science, Dual Major</b>
                        </div>
                        
                        <div>
                            Relevant Computer Science Coursework
                        </div>
                        <div>
                            <ul>
                                <li>Data Structures</li>
                                <li>Computer Organization and Architecture</li>
                                <li>Foundations of Computer Science</li>
                                <li>Introduction to Algorithms</li>
                                <li>Principles of Software</li>
                                <li>Operating Systems</li>
                                <li>Database Systems</li>
                                <li>Network Programming</li>
                                <li>Programming Languages</li>
                                <li>Machine Learning from Data</li>
                            </ul>
                        </div>
                        
                        <div>
                            Relevant Information Technology &amp; Web Science Coursework
                        </div>
                        <div>
                            <ul>
                                <li>Introduction to Information Technology</li>
                                <li>Web Science and Systems Development</li>
                                <li>Managing Information Technology and Resources</li>
                                <li>Human Computer Interaction</li>
                                <li>Visual Design and Theory</li>
                            </ul>
                        </div>
                    </div> */}

                </div>
            </section>
        );
    }
}

export default Education;