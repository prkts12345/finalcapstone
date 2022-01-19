import React from 'react';
import { Link } from 'react-router-dom';

const ViewPassenger = () => {
    return (
        <div>
            <section className="highlight-clean">
      <div className="container">
        <div className="intro"><br/><br/><br/><br/>
          <h4
            className="text-center"
            style={{
              fontFamily: ['Oswald', 'sansSerif'],
              fontSize: '52.1107px',
              color: '#1b2b51',
              fontWeight: 'bold',
              marginTop: '10px',
            }}
          >
            THANK YOU FOR BOOKING WITH US!
          </h4>
          <p style={{textAlign: 'center', color: '#d2a784', fontSize: '124px'}}>
            <i className="fa fa-check" style={{fontSize: '170px'}}></i>
          </p>
          <p
            className="text-center"
            style={{color: '#1b2b51', fontFamily: ['Roboto Condensed', 'sansSerif']}}
          >
            Your booking was successful, you will receive a confirmation email
            shortly. We're dedicated to give you the best experience possible,
            if you have any questions feel free to get in touch with us!
          </p>
        </div>
        <div className="buttons">
          <Link to="/contactus"
            className="btn btn-xl"
            role="button"
            style={{
              color: '#101e36',
              background: '#e5b28b',
              width: '146.701px',
              marginBottom: '50px',
            }}
            >CONTACT US</Link>
        </div>
      </div>
    </section>
        </div>
          )
}

export default ViewPassenger
