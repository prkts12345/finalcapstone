import React from 'react';
import './Style/AircraftGuide.css';
// import './Style/Lightbox-Gallery.css'

const Bell = () => {
    const imgUrl = './Images/B429_4-scaled.png'
    const styles = {
        
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundSize: "cover",
            height: "600px"
    }
    const mystyle = {
        fontFamily: "Oswald, sansSerif",
                  color: "#d2a784",
                  fontSize: "35px",
                  textAlign: "center",
      };

    const tdStyle = {
        
        width: '235.571px',
        fontFamily: ['Merriweather', 'serif'],
        fontSize: '12px',
        color: `rgba(27, 43, 81, 0.82)`,
        borderStyle: 'solid',
        borderColor: `var(--bs-gray-300)`,
                      
    }

    const trStyle = {
        fontFamily: ['Merriweather', 'serif'],
        fontSize: '12px',
        color: `rgba(27, 43, 81, 0.82)`,
        borderStyle: 'solid',
        borderColor: `var(--bs-gray-300)`,
    }
    return (
        <div>
            <header
      className="text-center text-white d-flex masthead"
             style={styles}
             >
    <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
              <strong style={mystyle}>Bell 429&nbsp;</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-8 mx-auto">
          <p
            className="text-faded mb-5"
            style={{color: `var(--bs-white)`, fontFamily: ['Open Sans', 'sansSerif'], fontSize: '20px'}}>
            Home / Aircraft Guide / Bell 429
          </p>
        </div>
      </div>
    </header>

    <section
      id="about"
      className="bg-white"
      style={{fontFamily: ['Roboto', 'sansSerif'], textAlign: 'center'}}
    >
      {/* <h2
        style={{
        marginFeft: '30px',
        color: '#101e36',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: ['Roboto', 'sansSerif'],
        marginTop: '50px',
        }}
      >
        BELL 429
      </h2> */}
      <div className="container" style={{textAlign: 'center'}}>
        <div className="row" style={{textAlign: 'center'}}>
          <div className="col-md-12" style={{textAlign: 'center'}}>
            <img
              src="./Images/bell429.png"
              style={{width: '100%', textAlign: 'center'}}
            />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2
              style={{
                fontFamily: ['Roboto', 'sansSerif'],
                fontWeight: 'bold',
                color: '#101e36',
                marginTop: '50px',
              }}
            >
              Specifications
            </h2>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>Make:</td>
                    <td style={tdStyle}>Bell Textron</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Model Year:</td>
                    <td style={tdStyle}>2013</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Type:</td>
                    <td style={tdStyle}>Twin Engines</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Operation:</td>
                    <td style={tdStyle}>VFR + IFR</td>
                  </tr>
                  <tr style={trStyle}>
                    <td
                      style={tdStyle}>Flight Crew:</td>
                    <td style={tdStyle}>2</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Passengers:</td>
                    <td style={tdStyle}>5</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Basic Empty Weight:</td>
                    <td style={tdStyle}>
                      Full Seats Configuration: 5024 lbs<br />Cargo
                      Configuration: 4843 lbs
                    </td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Maximum Takeoff Weight:</td>
                    <td style={tdStyle}>7500 lbs</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Fuel Capacity:</td>
                    <td style={tdStyle}>1740 lbs</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Maximum Speed:</td>
                    <td style={tdStyle}>155 kts</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Operational Cruise Speed:</td>
                    <td style={tdStyle}>125 kts</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Range (with Fuel Reserve):</td>
                    <td style={tdStyle}>325 mm
                    </td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Baggage Compartment:</td>
                    <td style={tdStyle}>Max Looad: 540 lbs</td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Minimum Helipad Size:</td>
                    <td style={tdStyle}>
                      Unobstructed: D= 13m<br />Obstructed: D= 15m<br />
                    </td>
                  </tr>
                  <tr style={trStyle}>
                    <td style={tdStyle}>Performance Category:</td>
                    <td style={tdStyle}>A*<br /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6">
            <h2
              style={{
                color: '#101e36',
                fontFamily: ['Roboto', 'sansSerif'],
                fontWeight: 'bold',
                marginTop: '50px',
              }}
            >
              Gallery
            </h2>
            <section className="photo-gallery">
              <div className="container">
                <div className="intro"></div>
                <div className="row photos" data-bss-baguettebox="">
                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href="./Images/1.jpg" target="_blank"
                      ><img className="img-fluid" src="./Images/1.jpg"
                    /></a>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href="./Images/2.jpg" target="_blank"
                      ><img className="img-fluid" src="./Images/2.jpg"
                    /></a>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href="./Images/3.jpg" target="_blank"
                      ><img className="img-fluid" src="./Images/3.jpg"
                    /></a>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                  <a href="./Images/4.jpg" target="_blank"
                    ><img className="img-fluid" src="./Images/4.jpg"
                    /></a>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href="./Images/5.jpg" target="_blank"
                      ><img className="img-fluid" src="./Images/5.jpg"
                    /></a>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href="./Images/6.jpg" target="_blank"
                      ><img className="img-fluid" src="./Images/6.jpg"
                    /></a>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href="./Images/7.jpg" target="_blank"
                      ><img className="img-fluid" src="./Images/7.jpg"
                    /></a>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href="./Images/8.jpg" target="_blank"
                      ><img className="img-fluid" src="./Images/8.jpg" 
                    /></a>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Bell
