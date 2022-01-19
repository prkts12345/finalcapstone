import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Footer.css'

const Footer = () => {

    return (
        <div>
            <footer style={{background: `rgb(16, 30, 54)`}}>
      <div className="row">
        <div className="col-sm-6 col-md-4 footer-navigation">
          <h3><img src="./Images/lipaddark.png" style={{width: '200px'}} /></h3>
          <p className="links">
          <a className='a' href='/'>Home</a>
            <strong> ·&nbsp; </strong>
            <a className='a' href='/aboutus'>About</a>
            <strong> ·&nbsp; </strong>
            <a className='a' href='/faqs'>FAQs</a>
          </p>
          <p className="company-name">Lipad © 2022</p>
        </div>
        <div className="col-sm-6 col-md-4 footer-contacts">
          <div>
            <span
              className="fa fa-map-marker footer-contacts-icon"
              style={{background: '#d2a784'}}>
            </span>
            <p>
              <span className="new-line-span">
                Domestic Airport Road, Pasay City</span>
              Philippines
            </p>
          </div>
          <div>
            <i
              className="fa fa-phone footer-contacts-icon"
              style={{background: '#d2a784'}}></i>
            <p className="footer-center-info email text-start">
              +632 8854 0001 |&nbsp;+632 8854 0002
            </p>
          </div>
          <div>
            <i
              className="fa fa-envelope footer-contacts-icon"
              style={{background: '#d2a784'}}></i>
            <p><Link className='nav-link a' to='/'>info@lipad.com</Link></p>
          </div>
        </div>
        <div className="col-md-4 footer-about">
          <h4>About the company</h4>
          <p>
            Lipad Company,&nbsp;is a private air charter firm. Our fleet of
            premium twin-engine aircrafts offers luxurious nationwide
            transportation.&nbsp;<br /><br />
          </p>
          <div className="social-links social-icons a">
            <Link style={{background: '#d2a784'}} to="/"><i className="fa fa-facebook"></i></Link>
            <Link style={{background: '#d2a784'}} to="/"><i className="fa fa-twitter"></i></Link>
            <Link style={{background: `rgb(210, 167, 132)`}} to="/"><i className="fa fa-linkedin"></i></Link>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}

export default Footer
