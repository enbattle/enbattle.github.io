import React from 'react';
import "./Contact.css";

import emailIcon from '../assets/email.png';
import facebookIcon from '../assets/facebook.png';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.png';
import githubIcon from '../assets/github.png';
import twitterIcon from '../assets/twitter.png';

class Contact extends React.Component {
  render() {
    return (
      <footer id="contact" className="footer__container p-5">
        <div className="container">
          
          {/* Contact Header */}
          <div className="d-flex justify-content-center mb-3">
            <div className="row">
                Contact me if there is anything that you wish to talk about!
            </div>
          </div>
          
          {/* All Icons */}
          <div className="container d-flex justify-content-center mb-3">
            <div className="row change__smaller__screen">
              
              {/* Email Icon */}
              <div className="col-sm change__smaller__screen">
                <a href="mailto:listeven6691@gmail.com" target="_blank" rel="noreferrer">
                  <img className="social__media" src={emailIcon} alt="Email Icon"/>
                </a>
              </div>
              
              {/* Facebook Icon */}
              <div className="col-sm change__smaller__screen">
                <a href="https://www.facebook.com/stevenli44" target="_blank" rel="noreferrer">
                  <img className="social__media" src={facebookIcon} alt="Facebook Icon"/>
                </a>
              </div>
              
              {/* LinkedIn Icon */}
              <div className="col-sm change__smaller__screen">
                <a href="https://www.linkedin.com/in/stevenli44" target="_blank" rel="noreferrer">
                  <img className="social__media" src={linkedinIcon} alt="LinkedIn Icon"/>
                </a>
              </div>
              
              {/* Instagram Icon */}
              <div className="col-sm change__smaller__screen">
                <a href="https://www.instagram.com/enbattle" target="_blank" rel="noreferrer">
                  <img className="social__media" src={instagramIcon} alt="Instagram Icon"/>
                </a>
              </div>
              
              {/* GitHub Icon */}
              <div className="col-sm change__smaller__screen">
                <a href="https://www.github.com/enbattle" target="_blank" rel="noreferrer">
                  <img className="social__media" src= {githubIcon} alt="GitHub Icon"/>
                </a>
              </div>
              
              {/* Twitter Icon */}
              <div className="col-sm change__smaller__screen">
                <a href="https://twitter.com/StevenMeep" target="_blank" rel="noreferrer">
                  <img className="social__media" src={twitterIcon} alt="Twitter Icon"/>
                </a>
              </div>
              
            </div>
          </div>
          
          {/* Credits to React */}
          <div className="d-flex justify-content-center">
            <div className="row">
              <span>
              Built with {' '}
                <a className="react__anchor" href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>
              </span>
            </div>
          </div>
          
        </div>
      </footer>
    );
  }
}

export default Contact;