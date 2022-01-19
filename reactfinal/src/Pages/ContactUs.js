import React from 'react';

const ContactUs = () => {
    
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
              <strong style={mystyle}>Contact Us&nbsp;</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-8 mx-auto">
          <p
            className="text-faded mb-5"
            style={{color: `var(--bs-white)`, fontFamily: ['Open Sans', 'sansSerif'], fontSize: '20px'}}>
            Home / Contact Us
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
              <strong>We Fly Differently</strong><br />
            </h1>
            <p style={{fontFamily: ['Open Sans', 'sansSerif']}}>
              Lipad is your go-to charter solutions provider for safe,
              efficient, and reliable services. Our hangar is located at Pasay
              City. Aircraft viewing can be scheduled by appointment.<br /><br /><i
                className="fa fa-phone"
                style={{fontSize: '20px'}}
              ></i
              >&nbsp; &nbsp; (+632) 8854 58 01 |&nbsp;(+632) 8854 58 01<br /><br /><i
                className="fa fa-envelope"
                style={{fontSize: '20px'}}
              ></i
              >&nbsp; &nbsp;info@lipad.com<br /><br /><i
                className="fa fa-map-pin"
                style={{fontSize: '20px'}}
              ></i
              >&nbsp; &nbsp; &nbsp;General Aviation Area, Domestic Airport Road,
              Pasay City, Philippines<br /><br /><br />
            </p>
          </div>
          <div className="col-md-6">
            <h1 style={{fontFamily: ['Roboto Condensed', 'sans-serif']}}>
              <strong>Map</strong><br />
            </h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.348485588728!2d120.99866135008477!3d14.52204838284111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ceb266e3056b%3A0x6bdb52f9f520d9b0!2sDomestic%20Rd%2C%20Pasay%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1642137544794!5m2!1sen!2sph" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>

        </div>
    )
}

export default ContactUs
