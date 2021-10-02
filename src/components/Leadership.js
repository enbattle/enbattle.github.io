import React from 'react';

class Leadership extends React.Component {
  render() {
    return(
      <section id="leadership" className="container">
        <div className="section-style m-5 p-5">
          
          {/* Leadership Header */}
          <div className="row">
            <div className="col-sm-4">
              <h2><b><u>Leadership</u></b></h2>
            </div>
          </div>
          
          {/* RPI Engineering Ambassadors Section */}
          <div className="row mb-5">
            <div className="col-sm-4">
              <b>Webmaster</b>
              <br/>
              <a href="http://engineeringambassadors.union.rpi.edu/live/" target="_blank" rel="noreferrer"><b>Rensselaer Polytechnic Institute Engineering Ambassadors</b></a>
              <br/>
              <i>September 2020 - May 2021</i>
              <br/>
              <p>Troy, New York, United States</p>
            </div>
            
            
            <div className="col-sm-8">
              <ul>
                <li>Launched new Rensselaer Polytechnic Institute Engineering Ambassadors Website, transitioning from a code-heavy system to a more simplistic and manageable WordPress website.</li>
              </ul>
            </div>
          </div>
          
          {/* ITWS Student Leadership Section */}
          <div className="row mb-5">
            <div className="col-sm-4">
              <b>Senior className Student Representative</b>
              <br/>
              <b>Information Technology &amp; Web Science Student (ITWS) Leadership</b>
              <br/>
              <i>September 2020 - Current</i>
              <br/>
              <p>Troy, New York, United States</p>
            </div>
            
            
            <div className="col-sm-8">
              <ul>
                <li>Initiated professional events and development activities in order to better serve the needs of the ITWS students.</li>
                <li>Ensured that the senior ITWS className was thoroughly represented during major updates in the ITWS department.</li>
              </ul>
            </div>
          </div>
          
          {/* Society of Asian Scientists and Engineers (SASE) Section */}
          <div className="row mb-5">
            <div className="col-sm-4">
              <b>Public Relations Chair</b>
              <br/>
              <b>Society of Asian Scientists and Engineers (SASE), Rensselaer Polytechnic Chapter</b>
              <br/>
              <i>September 2018 - May 2019</i>
              <br/>
              <p>Troy, New York, United States</p>
            </div>
            
            
            <div className="col-sm-8">
              <ul>
                <li>Designed a full HTML/CSS newsletter that is sent out to the SASE student body on a monthly basis.</li>
                <li>Launched and managed the organization website on a weekly basis in order to make sure that members were kept up to date with events and activities.</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default Leadership;