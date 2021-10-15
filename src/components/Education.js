import React from "react";

class Education extends React.Component {
    render() {
        return (
            <section id="education">
                <div className="section__style m-5 p-5">
                    
                    {/* Education Header */}
                    <div className="row">
                        <div className="col-sm-4">
                            <h2><b>Education</b></h2>
                        </div>
                    </div>
                    
                    {/* College Education */}
                    <div className="row">
                    
                    {/* University */}
                    <div className="col-sm-4">
                        <a href="https://www.rpi.edu" target="_blank" rel="noreferrer"><b>Rensselaer Polytechnic Institute</b></a>
                        <br />
                        <b>Graduation Date: May 2021</b>
                    </div>
                    
                    {/* Degree Section */}
                    <div className="col-sm-8">
                        <div className="mb-3">
                            <b>Bachelor of Science - B.S, Computer Science and Information Technology &amp; Web Science, Dual Major</b>
                        </div>
                        
                        {/* Computer Science Section */}
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
                        
                        {/* Information Technology & Web Science Section */}
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
                    
                    </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Education;