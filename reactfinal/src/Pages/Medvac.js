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
              <strong style={mystyle}>Medevac&nbsp;</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-8 mx-auto">
          <p
            className="text-faded mb-5"
            style={{color: `var(--bs-white)`, fontFamily: ['Open Sans', 'sansSerif'], fontSize: '20px'}}>
            Home / Aircraft Solutions / Medevac
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
              Medevac
            </h1>
            <p style={{fontFamily: ['Open Sans', 'sansSerif']}}>
            Lipad offers quick travel options for medical evacuations and transportation of patients.<br /><br />

            Need a medevac? Speak with our sales team by calling +632 8854 0001 or
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
              src="./Images/MEDEVAC_in_Myanmar.png"
              style={{width: '100%', borderRadius: '25px', marginBottom:"50px"}}
            />
          </div>
        </div>
      </div>
    </section>

        </div>
    )
}

export default CargoCharter
