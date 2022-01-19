import React from 'react';
import { Link } from 'react-router-dom';

const CargoCharter = () => {
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
              <strong style={mystyle}>Aerial Tours&nbsp;</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-8 mx-auto">
          <p
            className="text-faded mb-5"
            style={{color: `var(--bs-white)`, fontFamily: ['Open Sans', 'sansSerif'], fontSize: '20px'}}>
            Home / Aircraft Solutions / Aerial Tours
          </p>
        </div>
      </div>
    </header>
    <section id="about" className="bg-white">
      <div className="container push-top">
        <div className="row">
          <div className="col-md-6">
            <h1
              style={{
                fontFamily: ['Roboto Condensed', 'sansSerif'],
                fontWeight: 'bold',
              }}
            >
              Aerial Tours
            </h1>
            <p style={{fontFamily: ['Open Sans', 'sansSerif']}}>
            Take a tour to historical landmarks and city skylines with a bird’s eye view. Enjoy the aerial views of scenic locations in the Philippines.<br/><br/>

            Interested to take a tour? Speak with our sales team by calling +632 8854 0001 or
            </p>
            <Link 
              className="btn btn-xl"
              role="button"
              style={{
                color: '#101e36',
                background: '#e5b28b',
                padding: '11px 32px',
                margin: '0px',
              }} to="/home#require">Inquire now</Link>
          </div>
          <div className="col-md-6">
            <img
              className="d-flex"
              src="./Images/28.jpg"
              style={{width: '100%', borderRadius: '12px', marginBottom:"50px"}}
            />
          </div>
        </div>
      </div>
    </section>

        </div>
    )
}

export default CargoCharter
