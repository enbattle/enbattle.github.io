import React from 'react';
import "./Skills.css";

import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import javascriptLogo from '../assets/js-logo.png';
import nodejsLogo from '../assets/nodejs.png';
import pythonLogo from '../assets/python-logo.png';
import cppLogo from '../assets/cpp-logo.png';
import cLogo from '../assets/c-logo.png';
import csharpLogo from '../assets/csharp-logo.png';
import javaLogo from '../assets/java-logo.png';
import angularLogo from '../assets/angular-logo.png';
import reactLogo from '../assets/react-logo.png';
import vueLogo from '../assets/vuejs.png';
import sqlLogo from '../assets/sql-logo.png';

class Skills extends React.Component {
    render() {
        return (
            <section id="programming">
                <div className="skills__section__style m-5 p-5">
                    
                    {/* Skills Header */}
                    <div className="row">
                        <div className="col-sm-4">
                            <h2><b>Programming Languages</b></h2>
                        </div>
                    </div>
                    
                    {/* Languages */}
                    <div className="skill__grid__container">
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={htmlLogo} alt="HTML Icon"/></div>
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={cssLogo} alt="CSS Icon"/></div>
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={javascriptLogo} alt="JavaScript Icon"/></div>
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={nodejsLogo} alt="Node.js Icon"/></div>
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={pythonLogo} alt="Python Icon"/></div>
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={cppLogo} alt="C++ Icon"/></div>
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={cLogo} alt="C Language Icon"/></div>
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={csharpLogo} alt="C# Icon"/></div>
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={javaLogo} alt="Java Icon"/></div>
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={angularLogo} alt="Angular Icon"/></div>
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={reactLogo} alt="React.js Icon"/></div>
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={vueLogo} alt="Vue.js Icon"/></div>
                        <div className="skill__grid__item"><img className="skill__logo wobble__vertical__on__hover" src={sqlLogo} alt="SQL Icon"/></div>
                    </div>  
                </div>
            </section>
        );
    }
}

export default Skills;