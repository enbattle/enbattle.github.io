import React from 'react';

class WorkExperience extends React.Component {
    render() {
        return (
            <section id="workexperience" className="container">
                <div className="section-style m-5 p-5">
                    
                    {/* Work Experience header */}
                    <div className="row">
                        <div className="col-sm-4">
                            <h2><b><u>Work Experience</u></b></h2>
                        </div>
                    </div>
                    
                    {/* KeyBank Section */}
                    <div className="row mb-5">
                        <div className="col-sm-4">
                            <a href="https://www.key.com" target="_blank" rel="noreferrer"><b>KeyBank</b></a>
                            <br/>
                            <b>Data Architect Intern</b>
                            <br/>
                            <i>June 2020 - August 2020</i>
                            <br/>
                            <p>Albany, New York, United States</p>
                        </div>
                        
                        
                        <div className="col-sm-8">
                            <ul>
                            <li>Utilized Tableau to create data models and data visualizations for enterprise data, accelerating database operation efficiency of departments.</li>
                            <li>Improved data source retrieval time of enterprise data through the restructuring of SQL queries.</li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Crestron Electronics Section */}
                    <div className="row mb-5">
                        <div className="col-sm-4">
                            <a href="https://www.crestron.com" target="_blank" rel="noreferrer"><b>Crestron Electronics</b></a>
                            <br/>
                            <b>Software Engineering Intern</b>
                            <br/>
                            <i>January 2020 - June 2020</i>
                            <br/>
                            <p>Rockleigh, New Jersey, United States</p>
                        </div>
                        
                        
                        <div className="col-sm-8">
                            <ul>
                                <li>Developed efficient smart home drivers in C# for latest audio/video players, televisions, and security systems to be integrated with Crestron’s control systems.</li>
                                <li>Revamped current security system drivers with a new security framework and assisted with the security test environment.</li>
                                <li>Collaborated with the quality engineering team to conduct regression testing and analysis for updated smart home drivers and control systems prior to application release.</li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* VCC HelpDesk Consultant Section */}
                    <div className="row">
                    <div className="col-sm-4">
                        <a href="https://itssc.rpi.edu" target="_blank" rel="noreferrer"><b>Voorhees Computing Center at Rensselaer Polytechnic Institute</b></a>
                        <br/>
                        <b>HelpDesk Consultant</b>
                        <br/>
                        <i>April 2019 - December 2020</i>
                        <br/>
                        <p>Troy, New York, United States</p>
                    </div>
                    
                    
                    <div className="col-sm-8">
                        <ul>
                        <li>Provided technical services for students and staff, such as resolving network issues and BIOS issues, computer reimaging, system dual-boot, and any other software-related needs.</li>
                        </ul>
                    </div>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default WorkExperience;