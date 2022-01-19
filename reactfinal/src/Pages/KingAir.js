import React from 'react';
import './Style/AircraftGuide.css';

const KingAir = () => {
    const imgUrl = './Images/fsdfdsds.png'
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
              <strong style={mystyle}>Super King Air 350&nbsp;</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-8 mx-auto">
          <p
            className="text-faded mb-5"
            style={{color: `var(--bs-white)`, fontFamily: ['Open Sans', 'sansSerif'], fontSize: '20px'}}>
            Home / Aircraft Guide / Super King Air 350
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
          color: '#101e36',
          fontWeight: 'bold',
          textAlign: 'center',
          fontFamily: ['Roboto', 'sans-serif'],
          marginTop: '50px',
        }}
      >
        SUPER KING AIR 350
      </h2> */}
      <div className="container" style={{textAlign: 'center'}}>
        <div className="row" style={{textAlign: 'center'}}>
          <div className="col-md-12" style={{textAlign: 'center'}}>
            <img
              src="./Images/KINGAIR-1-1024x350.png"
              style={{width: '100%', marginBottom: '50px'}}
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
                    <td
                      style={tdStyle}
                    >
                      Make:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      Beachcraft / Textron Aviation
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Model Year:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      2007
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Type:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      Twin Engines
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Operation:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      VFR + IFR
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Flight Crew:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      2
                    </td>
                  </tr>
                  <tr
                    style={tdStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Passengers:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      8+1
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Basic Empty Weight:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      Full Seats Configuration: 9800 lbs<br />Cargo
                      Configuration: 9254 lbs
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Maximum Takeoff Weight:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      15,000 lbs
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Fuel Capacity:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      3,611 lbs
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Maximum Speed:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      312 kts
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Operational Cruise Speed:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      250 kts
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Range (with Fuel Reserve):
                    </td>
                    <td
                      style={tdStyle}
                    >
                      1,175 nm
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Baggage Compartment:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      Max Looad: 500 lbs
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >
                    <td
                      style={tdStyle}
                    >
                      Minimum Runway Length:
                    </td>
                    <td
                      style={tdStyle}
                    >
                      1000 m
                    </td>
                  </tr>
                  <tr
                    style={trStyle}
                  >

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
              }}
            >
              Gallery
            </h2>
            <section className="photo-gallery">
              <div className="container">
                <div className="intro"></div>
                <div className="row photos" data-bss-baguettebox="">
                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href="./Images/SKA350-4-755x755.jpg" target="_blank"
                      ><img
                        className="img-fluid"
                        src="./Images/SKA350-4-755x755.jpg"
                    /></a>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href="./Images/SKA350-5-755x755.jpg" target="_blank"
                      ><img
                        className="img-fluid"
                        src="./Images/SKA350-5-755x755.jpg"
                    /></a>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-3 item">
                    <a href="./Images/SKA350-6-755x755.jpg" target="_blank"
                      ><img
                        className="img-fluid"
                        src="./Images/SKA350-6-755x755.jpg"
                    /></a>
                  </div>
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

export default KingAir
