import React from 'react';

class Hackathons extends React.Component {
  render() {
    return(
      <section id="hackathons" className="container section-style" >
        <div className="m-5">
            {/* Hackathons Header */}
            <div className="row">
              <div className="col-sm-4">
                <h2><b><u>Hackathons</u></b></h2>
              </div>
            </div>
            
            <div className="row">
              <div className="col-sm-4">
                <a href="https://devpost.com/software/tweet-bias-detector" target="_blank" rel="noreferrer"><b>Twitter Bias Detection App</b></a>
                <br/>
                <b>Twitter Codechella Hackathon 2020</b>
                <br/>
                <br/>
              </div>
              
              <div className="col-sm-8">
                <ul>
                  <li>Developed a machine learning model, referencing the bias and reliability ratings given by <a href="https://www.adfontesmedia.com/" target="_blank" rel="noreferrer">adfontesmedia.com</a>, in order to detect bias in a message or a tweet.</li>
                  <li>Utilized the Twitter API in order to extract tweets from Twitter users in order to train the machine learning model.</li>
                </ul>
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Hackathons;