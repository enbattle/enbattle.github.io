import React from 'react';

class Skills extends React.Component {
    render() {
        return (
            <section id="programming" className="container">
                <div className="section-style m-5 p-5">
                    
                    {/* Skills Header */}
                    <div className="row">
                        <div className="col-sm-4">
                            <h2><b><u>Programming Languages</u></b></h2>
                        </div>
                    </div>
                    
                    {/* Languages */}
                    <ul>
                        <li>Python</li>
                        <li>C/C++</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Vue.js</li>
                        <li>React.js</li>
                        <li>Angular</li>
                        <li>Node.js</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Skills;