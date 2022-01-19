import React from 'react';
// import './Style/bootstrap.min.css'
import './Style/Responsive-Image-Grid.css'


const Index = () => {

    const imgUrl = './Images/cover.png'
    const styles = {
        
            backgroundImage: `url(${imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "600px",
            width: '100%'
    };
    const mystyle = {
        fontFamily: ['Mulish', 'sansSeri'],
                  color: '#e5b28b',
                  fontSize: "52px",
                
      };

    const imgReq = './Images/section4.png'
    const styleReq = {
        backgroundImage: `url(${imgReq})`,
        backgroundSize: "cover",
        width: '100%'
    };

    const boxStyle = {
        width: '205px',
        height: '250px',
        margin: '0px',
        borderRadius: '12px',
        background: '#ffffff',
        marginRight: '0px',
        marginBottom: '20px',
        marginTop: '5px',
    };

    const h3Style = {
        marginTop: '10px',
        color: '#101e36',
        textAlign: 'center',
        fontSize: '18px',
        fontFamily: ['Roboto Condensed', 'sansSerif'],
        fontWeight: 'bold',
    };

    const pStyle = {
        marginTop: '0px',
        fontFamily: ['Open Sans' ,'sans-serif'],
        fontSize: '15px',
        color: `rgba(16,30,54,0.76)`,
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
              <strong style={mystyle}>P R I V A T E &nbsp;  A I R &nbsp; C H A R T E R S</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-8 mx-auto">
          <p
            className="text-faded mb-5"
            style={{color: `rgba(255, 255, 255, 0.7)`, fontFamily: ['Merriweather sansSerif'], fontSize: '16.4px'}}>
            <br/>We are your go-to air charter solutions provider dedicated to deliver safe, efficient, and reliable services.<br/><br/>
          </p>
          <a href="/addpassenger" class="btn btn-xl" role="button" style={{color: '#101e36',background: '#e5b28b', padding: ['9px 32px'], borderRadius: '17px', fontWeight: 'bold',fontFamily: ['Mulish', 'sansSerif']}}>BOOK NOW</a>
        </div>
      </div>
    </header>

    <section id="about" class="bg-white">
        <div class="container" style={{marginTop: '100px', marginBottom: '100px'}}>
            <div class="row">
                <div class="col-md-6 col-lg-7">
                    <h3 style={{fontFamily: ['Roboto Condensed', 'sansSerif'],color: '#d2a784',fontWeight: 'bold', textAlign: 'left',}}>What's in it for you?</h3>
                    <h2 style={{fontFamily: ['Roboto Condensed', 'sansSerif'], fontWeight: 'bold', color: '#101e36', marginBottom: '15px', textAlign: 'left'}}>Air Charters save your time and provide more comfort.<br/><br/></h2>
                    <p style={{fontFamily: ['Merriweather', 'serif'], textAlign: 'left', fontSize: '15px',}}>With a significant time saved from queuing up on long check-in lines and worrying about possible transmission of virus on commercial flights, booking a private charter can provide value for money by letting you fly at your own time and at the comfort of your own personal space.<br/>
                    <a  href="/addpassenger" class="btn float-end btn-xl" role="button" style={{color: '#101e36', background: '#e5b28b', padding: '9px', width: '129.212px', fontFamily: ['Mulish', 'sansSerif'], fontWeight: 'bold', marginTop: '20px', marginBottom: '5px', borderRadius: '20px'}}>BOOK NOW</a><br/></p>
                </div>
                <div class="col-md-6 col-lg-5"><img class="img-fluid" src="./Images/section1.jpg" style={{width: '100%', borderRadius: '27px'}}/></div>
            </div>
        </div>
    </section>
    
    <section style={{color: '#d2a784', background: '#d2a784' }}>
    <div class="container">
        <h4 class="text-center" style={{color: '#1b2b51',fontWeight: 'bold', marginTop: '40px',borderColor: '#101e36'}}>LEARN WHAT'S DIFFERENT</h4>
        <h2 style={{color: `var(--bs-white)`, textAlign: 'center', fontWeight: 'bold'}}>DISCOVER CHARTER BENEFITS</h2>
        <p style={{color: `var(--bs-white)`, textAlign: 'center', fontFamily: 'Merriweather serif'}}>What makes a charter different than a regular scheduled commercial flight? Find out below.<br/></p>
       
            <div class="row">
                <div class="col-md-4" style={{width: '630px', marginRight: '55px'}}><img class="img-fluid" src="./Images/section2.jpg" style={{borderRadius: '21px'}}/></div>
                <div class="col-md-4" style={{width: '220px'}}>
                    <div class="box" style={boxStyle}><i class="fa fa-star icon" style={{margin: '0px', color: '#1b2b51', textAlign: 'center', width: '200px', fontSize: '50px', height: '0' ,marginTop: '37px'}}></i>
                        <h3 class="name" style={h3Style}>BESPOKE TRAVEL EXPERIENCE</h3>
                        <p class="text-center description" style={pStyle}>Schedule your flight at your own convenience<br/></p>
                    </div>
                    <div class="box" style={boxStyle}><i class="fa fa-calendar-check-o icon" style={{margin: '0px', color: '#1b2b51', textAlign: 'center', width: '200px', fontSize: '50px', height: '0' ,marginTop: '37px'}}></i>
                        <h3 class="name" style={h3Style}>PERSONAL SCHEDULE</h3>
                        <p class="text-center description" style={pStyle}>Schedule your flight at your own convenience<br/><br/></p>
                    </div>
                </div>
                <div class="col" style={{width: '220px'}}>
                    <div class="box" style={boxStyle}><i class="fa fa-shield icon" style={{margin: '0px', color: '#1b2b51', textAlign: 'center', width: '200px', fontSize: '50px', height: '0' ,marginTop: '37px'}}></i>
                        <h3 class="name" style={h3Style}>SAFETY &amp; SECURITY</h3>
                        <p class="text-center description" style={pStyle}>A flight experience tailored to suit your needs<br/><br/></p>
                    </div>
                    <div class="box" style={boxStyle}><i class="fa fa-plane icon" style={{margin: '0px', color: '#1b2b51', textAlign: 'center', width: '200px', fontSize: '50px', height: '0' ,marginTop: '37px'}}></i>
                        <h3 class="name" style={h3Style}>MORE AIRPORTS</h3>
                        <p class="text-center description" style={pStyle}>Smaller aircraft means having access to more airports which is more convenient<br/><br/></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section style={{background: '#ffffff'}}>
        <div class="container" style={{marginTop: '200px', marginBottom: '200px'}}>
            <div class="row">
                <div class="col-md-6" style={{width: '100%x'}}>
                <div>
              
              <div>
                <div class="rig-row">
                  
                  <div class="rig-column">
                    <img
                      class="img-fluid"
                      src="./Images/davao.jpg"
                      style={{height: '112px'}}
                    /><img
                      src="./Images/boracay.jpg"
                      style={{height: '278px'}}
                    /><img src="./Images/coron.jpg" style={{height: '164px'}} />
                  </div>
                  <div class="rig-column">
                    <img src="./Images/cebu.jpg" /><img
                      src="./Images/la%20union.jpg"
                      style={{height: '278px'}}
                    /><img src="./Images/siargao.jpg" />
                  </div>
                  <div class="rig-column">
                    <img src="./Images/vigan.jpg" /><img
                      src="./Images/banaue.jpg"
                      style={{height: '278px'}}
                    /><img src="./Images/manila.jpg" style={{height: '164px'}} />
                  </div>
                  <div class="rig-column">
                    <img src="./Images/bohol.jpg" /><img
                      src="./Images/palawan.jpg"
                      style={{height: '278px'}}
                    /><img src="./Images/sagada.jpg" style={{height: '164px'}} />
                  </div>
                </div>
              </div>
             </div>
         </div>
                <div class="col-md-6" style={{width: '425px'}}>
                    <h4 style={{fontWeight: 'bold', fontFamily: ['Roboto Condensed', 'sansSerif'], color: '#d2a784'}}>Where to go?</h4>
                    <h3 style={{color: '#101e36',fontWeight: 'bold'}}>Popular Destinations</h3>
                    <p style={{color: `rgb(33, 37, 41)`, fontFamily: ['Merriweather', 'serif']}}>A journey of a thousand miles begins with a flight to these picturesque locations.</p>
                </div>
            </div>
        </div>
    </section>

    <section style={styleReq} id="require" >
        <div>
            <h1><br/></h1>
        </div>
        {/* <h3 style={{color: `var(--bs-white)`, fontFamily: ['Roboto Condensed', 'sansSerif'], fontWeight: 'bold', padding: '0px',marginLeft: '100px', marginTop: '70px', textAlign: 'left'}}>Inquire Now</h3> */}
        <h1 style={{color: '#d2a784', fontFamily: ['Roboto Condensed', 'sansSerif'], fontWeight: 'bold', padding: '0px', marginLeft: '100px', marginBottom: '30px', textAlign: 'left'}}>Request for a Quote</h1>
        <div class="container"  style={{background: `var(--bs-white)`, borderRadius: '20px', width: '100%'}}>
            <form>
                <div class="row">
                    <div class="col" style={{marginTop: '30px'}}><label class="form-label">Full Name:</label><input class="form-control" type="text" style={{borderRadius: '20px'}}required/></div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group mb-3"><label class="form-label">Contact No:</label><input class="form-control" type="text" style={{borderRadius: '20px'}}/></div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group mb-3"><label class="form-label">Email:</label><input class="form-control" type="text" style={{borderRadius: '20px'}}required/></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group mb-3"><label class="form-label">From:</label><input class="form-control" type="text" style={{borderRadius: '20px'}}required/></div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group mb-3"><label class="form-label">To:</label><input class="form-control" type="text" style={{borderRadius: '20px'}}required/></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3" style={{background: `var(--bs-white)`}}>
                        <div class="form-group mb-3"><label class="form-label">Departure date:</label><input class="form-control" type="date" style={{borderRadius: '20px'}}required/></div>
                    </div>
                    <div class="col-sm-3" style={{background: `var(--bs-white)`}}>
                        <div class="form-group mb-3"><label class="form-label">Return Date</label><input class="form-control" type="date" style={{borderRadius: '20px'}}required/></div>
                    </div>
                    <div class="col-sm-3" style={{background: `var(--bs-white)`}}>
                        <div class="form-group mb-3"><label class="form-label">Aircraft:</label><input class="form-control" type="text" style={{borderRadius: '20px'}}required/></div>
                    </div>
                    <div class="col-sm-3" style={{background: `var(--bs-white)`}}>
                        <div class="form-group mb-3"><label class="form-label">Passengers:</label><input class="form-control" type="number" style={{borderRadius: '20px'}} required/></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="text-center" style={{background: `var(--bs-white)`}}>*Our team will get in touch with you soon for more details about your charter.<br/><br/><a href="/thankyou"class="btn align-items-center btn-xl" role="button" style={{color: '#101e36', background: '#e5b28b', width: '129.212px', fontFamily: ['Mulish', 'sansSerif'], fontWeight: 'bold', padding: '9px', textAlign: 'center'}}>SUBMIT</a><br/></p>
                    </div>
                </div>
            </form>
        </div>
    </section>
        </div>
    )
}

export default Index
