import React from 'react';
import "./WorkExperience.css";

import ReactTooltip from 'react-tooltip';

class WorkExperience extends React.Component {
    render() {
        return (
            <section id="workexperience">
                <div className="experience__section__style m-5 p-5">
                    
                    {/* Work Experience header */}
                    <div className="row">
                        <div className="col-sm-4">
                            <h2><b>Work Experience</b></h2>
                        </div>
                    </div>

                    <div className="experience__grid__container">
                        {/* KeyBank Section */}
                        <div className="experience__grid__item experience__grid__size" data-tip data-for="keybankDescription">
                            <div>
                                <div>
                                    <h3 className="experience__position"><b>Data Architect Intern</b></h3>
                                </div>
                                <div>
                                    <a href="https://www.key.com" target="_blank" rel="noreferrer"><b>KeyBank</b></a>
                                </div>
                                <div>
                                    <i>June 2020 - August 2020</i>
                                </div>
                                <div>
                                    <p>Albany, New York, United States</p>
                                </div>
                            </div>
                        </div>
                        <ReactTooltip id="keybankDescription" place="bottom">
                            <ul className="tooltip__list">
                                <li>&#9758; Utilized Tableau to create data models and data visualizations for enterprise data, accelerating database operation efficiency of departments.</li>
                                <li>&#9758; Improved data source retrieval time of enterprise data through the restructuring of SQL queries.</li>
                            </ul>
                        </ReactTooltip>
                            
                        {/* Crestron Electronics Section */}
                        <div className="experience__grid__item experience__grid__size" data-tip data-for="crestronDescription">
                            <div>
                                <div>
                                    <h3 className="experience__position"><b>Software Engineering Intern</b></h3>
                                </div>
                                <div>
                                    <a href="https://www.crestron.com" target="_blank" rel="noreferrer"><b>Crestron Electronics</b></a>
                                </div>
                                <div>
                                    <i>January 2020 - June 2020</i>
                                </div>
                                <div>
                                    <p>Rockleigh, New Jersey, United States</p>
                                </div>
                            </div>
                        </div>
                        <ReactTooltip id="crestronDescription" place="bottom">
                            <ul className="tooltip__list">
                                <li>&#9758; Developed efficient smart home drivers in C# for latest audio/video players, televisions, and security systems to be integrated with Crestron’s control systems.</li>
                                <li>&#9758; Revamped current security system drivers with a new security framework and assisted with the security test environment.</li>
                                <li>&#9758; Collaborated with the quality engineering team to conduct regression testing and analysis for updated smart home drivers and control systems prior to application release.</li>
                            </ul>
                        </ReactTooltip>

                        {/* VCC HelpDesk Consultant Section */}
                        <div className="experience__grid__item experience__grid__size" data-tip data-for="helpdeskDescription">
                            <div>
                                <div>
                                    <h3 className="experience__position"><b>HelpDesk Consultant</b></h3>
                                </div>
                                <div>
                                    <a href="https://itssc.rpi.edu" target="_blank" rel="noreferrer"><b>Voorhees Computing Center at Rensselaer Polytechnic Institute</b></a>
                                </div>
                                <div>
                                    <i>April 2019 - December 2020</i>
                                </div>
                                <div>
                                    <p>Troy, New York, United States</p>
                                </div>
                            </div>
                        </div>
                        <ReactTooltip id="helpdeskDescription" place="bottom">
                            <ul className="tooltip__list">
                                <li>&#9758; Provided technical services for students and staff, such as resolving network issues and BIOS issues, computer reimaging, system dual-boot, and any other software-related needs.</li>
                            </ul>
                        </ReactTooltip>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default WorkExperience;