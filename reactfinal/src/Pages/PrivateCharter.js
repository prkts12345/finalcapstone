import React from 'react';
import { Link } from 'react-router-dom';
const PrivateCharter = () => {

    const imgUrl = './Images/header.jpg'
    const styles = {
        
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "600px"
    }
    const mystyle = {
        fontFamily: "Oswald, sansSerif",
                  color: "#d2a784",
                  fontSize: "35px",
                  textAlign: "center",
      };
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
              <strong style={mystyle}>Private Charter&nbsp;</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-8 mx-auto">
          <p
            className="text-faded mb-5"
            style={{color: `var(--bs-white)`, fontFamily: ['Open Sans', 'sansSerif'], fontSize: '20px'}}>
            Home / Aircraft Solutions / Private Charter
          </p>
        </div>
      </div>
    </header>
            <section id="about" className="bg-white">
      <div className="container push-top" style={{marginBottom: '50px'}}>
        <div className="row">
          <div className="col-md-6">
            <h1
              style={{
                fontFamily: ['Roboto Condensed', 'sansSerif'],
                fontWeight: 'bold',
              }}
            >
              Private Charter
            </h1>
            <p style={{fontFamily: ['Open Sans', 'sans-serif']}}>
              Lipad offers charters for both your business and leisure.
              Chartering offers an array of advantages for professionals and
              entrepreneurs. Less time spent in check-ins plus faster transit
              time makes your business travel more efficient, especially when
              visiting multiple sites.<br /><br />Expansive &amp; flexible cabin
              interiors and VIP-configured seats mean that the passengers can
              comfortably relax while traveling.<br /><br />Chartering for a
              holiday or private getaway removes what we call the “traveler
              stress” for you. Enjoy the stress-free journey alone or with the
              company of your loved ones with enough space and legroom for
              comfort. Flying private means getting access to more airports and
              helipads, avoiding the hustle and the hassle of queueing on
              check-in and security lines of busy airports.<br /><br />Need a
              private charter? Speak with our sales team by calling +632 8854
              0001 or&nbsp;<br /><br />
              <Link
                className="btn btn-xl"
                role="button"
                style={{
                    color: '#101e36',
                    background: '#e5b28b',
                    padding: ['11px', '32px',],
                    margin: '0px',
                  }} to="/home#require">Inquire now</Link>
              
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="d-flex"
              src="./Images/private%20charter.jpg"
              style={{width: '100%', borderRadius: '12px'}}
            />
          </div>
        </div>
      </div>
    </section>

    
        </div>
    )
}

export default PrivateCharter
