import React from "react";
import "./AboutMe.css";

import profileImg from '../assets/myprofile.jpg';

class AboutMe extends React.Component {
    render() {
        return (
            <section id="aboutme" className="about__background p-5">
            <div className="container">
                <div className="row">
                
                    {/* Profile Image */}
                    <div className="col-sm-4 d-flex align-items-center">
                        <img src={profileImg} className="profile__picture rounded-circle mx-auto d-block" alt="Steven Li"/>
                    </div>
                    
                    {/* Profile Description */}
                    <div className="col-sm-8 d-flex align-items-center">
                        <div>
                            <h2 className="mb-3"><b>About Me</b></h2>
                            Steven will complete his undergraduate study with a dual in Computer Science and Information 
                            Technology &amp; Web Science at Rensselaer Polytechnic Institute in 2021. Armed with an open 
                            mind, a creative drive, and an eagerness to learn, Steven willingly jumps to the challenge, 
                            with every step expanding his boundaries and opening new doors. With some many possibilities 
                            left unturned, who can sit still?  
                            <br/>
                            <br/>
                            For hobbies, Steven enjoys finding new programming projects to work on, or finding ways to 
                            improve upon previous projects. In the outdoors, Steven enjoys playing basketball, volleyball, 
                            tennis, and the occasional running-while-listening-to-music. Coming into college, Steven had 
                            joined a dance group and is now forever a fan of hip-hop and pop dances. Steven really loves 
                            cooking, and he is trying out new flavor combinations and recipes in order to create good food 
                            for himself, his family, and his friends.
                        </div>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}

export default AboutMe;
