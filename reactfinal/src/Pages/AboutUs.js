import React from 'react';



const AboutUs = () => {

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
              <strong style={mystyle}>ABOUT US&nbsp;</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-8 mx-auto">
          <p
            className="text-faded mb-5"
            style={{color: `var(--bs-white)`, fontFamily: ['Open Sans', 'sansSerif'], fontSize: '20px'}}>
            Home / About Us
          </p>
        </div>
      </div>
    </header>

    <section id="about" className="bg-white">
      <div className="container">
        <div className="row push-bot">
          <div className="col-lg-6">
            <h1
              style={{
                fontFamily: ['Roboto Condensed', 'sansSerif'],
                fontWeight: 'bold',
                marginTop: '50px',
            }}>
              Who We Are
            </h1>
            <p style={{fontFamily: ['Open Sans', 'sansSerif']}}>
              Lipad Company,&nbsp;is a private air charter firm. Our fleet of
              premium twin-engine aircrafts offers luxurious nationwide
              transportation. We pride ourselves in being the only aircraft
              charter company in the Philippines that provides a crew of two
              pilots on every flight. Our aviation personnel are composed of
              internationally trained and experienced pilots and engineers.
              <br /><br />In over 40 years of operation, Lipad has maintained a
              pristine safety record reflecting the company's dedication in
              providing safe, efficient, and reliable air charter solutions to
              its clients.
            </p>
          </div>
          <div className="col-lg-6">
            <img
              className="d-flex"
              src="./Images/aboutus.jpg"
              style={{width: "100%", frameBorderRadius: "12px", marginTop: "50px", marginBottom: "50px"}}
            />
          </div>
        </div>
      </div>
    </section>

    <section id="services"style={{backgroundColor: "#1b2b51"}}>
      <div className="container">
        <div className="row push-bot">
          <div className="col-md-5">
            <h1
              style={{
                textAlign: 'center',
                fontFamily: ['Roboto Condensed', 'sansSerif'],
                fontWeight: 'bold',
                color: `var(--bs-white)`,
                marginTop: '100px'
              }}
            >
              VISION
            </h1>
            <p className="text-center" style={{color: `var(--bs-white)`}}>
              To abide by the core value of Safety, Efficiency,&nbsp;Reliability
              which constitute our constant driving force. To be the preferred
              air charter solutions provider in the business aviation industry
              in terms of excellence in safety and efficiency; and to use such
              leadership to uplift and develop industry standards in the
              Philippines.<br />
            </p>
          </div>
          <div class="col-md-2"></div>
          <div className="col-md-5">
            <h1
              style={{
                textAlign: 'center',
                fontFamily: ['Roboto Condensed', 'sansSerif'],
                fontWeight: 'bold',
                color: `var(--bs-white)`,
                marginTop: '100px'
            }}
            >
              MISSION
            </h1>
            <p className="text-center" style={{color: `var(--bs-white)`}}>
              To pursue our vision with passion and dedication through constant
              improvement, proceeding from what we do best for the benefit of
              employees, shareholders, and most importantly, our clients.&nbsp;
              To pursue our vision with passion and dedication through constant
              improvement, proceeding from what we do best.<br /><br /><br /><br />
            </p>
          </div>
        </div>
      </div>
    </section>

  
        </div>
        
    )
}

export default AboutUs
