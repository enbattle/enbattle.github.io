import React from 'react';
import './Leadership.css';
import ReactTooltip from 'react-tooltip';

class Leadership extends React.Component {
  render() {
    return(
      <section id="leadership">
        <div className="leadership__section__style m-5 p-5">
          
          {/* Leadership Header */}
          <div className="row">
            <div className="col-sm-4">
              <h2><b>Leadership</b></h2>
            </div>
          </div>

          <div className="leadership__grid__container">
            {/* RPI Engineering Ambassadors Section */}
            <div className="leadership__grid__item leadership__grid__size" data-tip data-for="rpiambassadorsDescription">
              <div>
                <div>
                  <h3 className="leadership__position"><b>Webmaster</b></h3>
                </div>
                <div>
                  <a href="http://engineeringambassadors.union.rpi.edu/live/" target="_blank" rel="noreferrer"><b>Rensselaer Polytechnic Institute Engineering Ambassadors</b></a>
                </div>
                <div>
                  <i>September 2020 - May 2021</i>
                </div>
                <div>
                  <p>Troy, New York, United States</p>
                </div>
              </div>
            </div>
            <ReactTooltip id="rpiambassadorsDescription" place="bottom">
                <ul className="tooltip__list">
                  <li>&#9758; Launched new Rensselaer Polytechnic Institute Engineering Ambassadors Website, transitioning from a code-heavy system to a more simplistic and manageable WordPress website.</li>
                </ul>
            </ReactTooltip>

            {/* ITWS Student Leadership Section */}
            <div className="leadership__grid__item leadership__grid__size" data-tip data-for="itwsDescription">
              <div>
                <div>
                  <h3 className="leadership__position"><b>Senior Class Student Representative</b></h3>
                </div>
                <div>
                  <a href="https://science.rpi.edu/itws" target="_blank" rel="noreferrer"><b>Information Technology &amp; Web Science Student (ITWS) Leadership</b></a>
                </div>
                <div>
                  <i>September 2020 - May 2021</i>
                </div>
                <div>
                  <p>Troy, New York, United States</p>
                </div>
              </div>
            </div>
            <ReactTooltip id="itwsDescription" place="bottom">
                <ul className="tooltip__list">
                  <li>&#9758; Initiated professional events and development activities in order to better serve the needs of the ITWS students.</li>
                  <li>&#9758; Ensured that the senior ITWS className was thoroughly represented during major updates in the ITWS department.</li>
                </ul>
            </ReactTooltip>

            {/* Society of Asian Scientists and Engineers (SASE) Section */}
            <div className="leadership__grid__item leadership__grid__size" data-tip data-for="saseDescription">
              <div>
                <div>
                  <h3 className="leadership__position"><b>Public Relations Chair</b></h3>
                </div>
                <div>
                  <a href="https://sase.union.rpi.edu/home" target="_blank" rel="noreferrer"><b>Society of Asian Scientists and Engineers (SASE), Rensselaer Polytechnic Chapter</b></a>
                </div>
                <div>
                  <i>September 2018 - May 2019</i>
                </div>
                <div>
                  <p>Troy, New York, United States</p>
                </div>
              </div>
            </div>
            <ReactTooltip id="saseDescription" place="bottom">
                <ul className="tooltip__list">
                  <li>&#9758; Designed a full HTML/CSS newsletter that is sent out to the SASE student body on a monthly basis.</li>
                  <li>&#9758; Launched and managed the organization website on a weekly basis in order to make sure that members were kept up to date with events and activities.</li>
                </ul>
            </ReactTooltip>
          </div>
        </div>
      </section>
    );
  }
}

export default Leadership;