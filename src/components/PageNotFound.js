import React from "react";

class PageNotFound extends React.Component {
  render() {
    return( 
      <section id="page__not__found" className="p-5">
        <div className="container">
            <div className="row error__page">
                <div className="col d-flex justify-content-center">
                    <h1 className="mb-3"><b>Page Not Found</b></h1>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

export default PageNotFound;