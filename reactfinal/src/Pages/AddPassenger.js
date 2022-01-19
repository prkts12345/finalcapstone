import React, {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';
import './Style/Booking.css';



const AddPassenger = () => {

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
    const history = useNavigate();
    const [passengerInput, setPassenger] = useState ({
                name: "",
                email: "",
                phone: "",
                origin: "",
                destination: "",
                solutions: "",
                aircraft: "",
                time: "",
                departureDate: "",
                numPassenger: "",
                error_list: []

    });

    const handleInput = (e) => {
        e.persist();
        setPassenger({...passengerInput, [e.target.name]: e.target.value});
    };
    const savePass = (e) => {
        e.preventDefault();
        const data = {
            name: passengerInput.name,
            email: passengerInput.email,
            phone: passengerInput.phone,
            origin: passengerInput.origin,
            destination: passengerInput.destination,
            solutions: passengerInput.solutions,
            aircraft: passengerInput.aircraft,
            time: passengerInput.time,
            departureDate: passengerInput.departureDate,
            numPassenger: passengerInput.numPassenger
        }
        axios.post(`api/addpassenger`, data).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "Successfully Booked!");
                setPassenger({
                    name: "",
                    email: "",
                    phone: "",
                    origin: "",
                    destination: "",
                    solutions: "",
                    aircraft: "",
                    time: "",
                    departureDate: "",
                    numPassenger: "",
                    error_list: []
                });
                history("/passengers")
            }
            else if (res.data.status === 422) {
                setPassenger({...passengerInput, error_list: res.data.validate})
            }
        })

        
    }

    const current = new Date();
    var dd = current.getDate()+1;
    var mm = current.getMonth()+1; 
    var yyyy = current.getFullYear();
    if(dd<10){
      dd='0'+dd
    } 
    if(mm<10){
      mm='0'+mm
    } 
    const date = `${yyyy}-${mm}-${dd}`;
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
                    <strong style={mystyle}>Booking Form&nbsp;</strong>
                  </h1>
                </div>
              </div>
              <div className="col-lg-8 mx-auto">
                <p
                  className="text-faded mb-5"
                  style={{color: `var(--bs-white)`, fontFamily: ['Open Sans', 'sansSerif'], fontSize: '20px'}}>
                  Home / Booking Form
                </p>
              </div>
            </div>
        </header>
    <section
      id="about"
      className="bg-white"
      style={{fontFamily: ['Roboto', 'sansSerif']}}>

    <div className="container contact ">
	    <div className="row mx-2">
		    <div className="col-md-3">
			    <div className="contact-info">
				    <img className="img-fluid" src="./Images/lipaddark.png" alt="image"/>
				    <h4>Fly to the sky so high.</h4>
			    </div>
		    </div>
		    <div className="col-md-9">
            <form className="contact-form" onSubmit={savePass}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                      <label className="control-label col-12" for="name">Full Name:</label>
                      <div className="col-sm-12">          
                        <input type="text" name='name' className="form-control" onChange={handleInput} value={passengerInput.name} required/>
                        <span className='text-danger'>{passengerInput.error_list.name} </span>
                      </div>
                  </div>
                  <div className="form-group">
                      <label className="control-label col-12" for="email">Email Address:</label>
                      <div className="col-sm-12">          
                        <input type="email" name='email' className="form-control" onChange={handleInput} value={passengerInput.email} required/>
                        <span className='text-danger'>{passengerInput.error_list.email} </span>
                      </div>
                  </div>
                  <div className="form-group">
                      <label className="control-label col-12" for="phone">Phone #:</label>
                        <input type="phone" name='phone' className="form-control"  onChange={handleInput} value={passengerInput.phone} required/>
                        <span className='text-danger'>{passengerInput.error_list.phone} </span>
                  </div>
                  <div className="form-group">
                      <label className="control-label col-12" for="orgin">Origin</label>
                        <select className="form-select form-group" name='origin' aria-label="Default select example" onChange={handleInput} value={passengerInput.origin} required>
                            <option selected hidden disabled>From</option>
                            <option value="RPLL">Manila</option>
                            <option value="RPLC">Clark</option>
                            <option value="RPUR">Baler, Quezon</option>
                            <option value="RPUB">Baguio</option>
                            <option value="RPLB">Subic, Zambales</option>
                            <option value="RPUQ">Vigan, Ilocos Sur</option>
                        </select>
                        <span className='text-danger'>{passengerInput.error_list.origin} </span>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-12" for="destination">Destination</label>
                      <select className="form-select form-group" name='destination' aria-label="Default select example" onChange={handleInput} value={passengerInput.destination} required>
                          <option selected hidden disabled>To</option>
                          <option value="RPLL">Manila</option>
                          <option value="RPLC">Clark</option>
                          <option value="RPUR">Baler, Quezon</option>
                          <option value="RPUB">Baguio</option>
                          <option value="RPLB">Subic, Zambales</option>
                          <option value="RPUQ">Vigan, Ilocos Sur</option>
                          <option value="RPUZ">Bagabag, Nueva Vizcaya</option>
                          <option value="RPVS">Antique</option>
                          <option value="RPVB">Bacolod</option>
                          <option value="RPVC">Calbayog, Samar</option>
                          <option value="RPVE">Caticlan, Malay, Aklan</option>
                          <option value="RPMF">Bislig, Surigao del Sur</option>
                          <option value="RPME">Butuan, Agusan Del Norte</option>
                          <option value="RPMH">Camiguin</option>
                          <option value="RPMC">Cotabato</option>
                      </select>
                      <span className='text-danger'>{passengerInput.error_list.destination} </span>
                    <div className="col-sm-12">
                    </div>
                  </div>            				    
                </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label col-12" for="solutions">Air Charter Solutions</label>
                  <select className="form-select form-group" name='solutions' aria-label="Default select example" onChange={handleInput} value={passengerInput.solutions} required>
                      <option selected hidden disabled>Air Solutions</option>
                      <option value="DROPOFF">Drop-Off</option>
                      <option value="ROUNDTRIP">Round-Trip</option>
                      <option value="TOUR">Tour</option>
                      <option value="MEDEVAC">Medevac</option>
                      <option value="CARGO">Cargo</option>
                  </select>
                  <span className='text-danger'>{passengerInput.error_list.solutions} </span>
                <div className="col-sm-12">
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-12" for="aircraft">Aircraft Type</label>
                  <select className="form-select form-group" name='aircraft' aria-label="Default select example" onChange={handleInput} value={passengerInput.aircraft} required>
                      <option selected hidden disabled>AIRCRAFT</option>
                      <option value="HELICOPTER">Helicopter</option>
                      <option value="JETS">Jets</option>
                  </select>
                  <span className='text-danger'>{passengerInput.error_list.aircraft} </span>
                <div className="col-sm-12">
                </div>
              <div className="form-group">
                <label className="control-label col-12" for="time">Departure Time</label>
                  <select className="form-select form-group" name='time' aria-label="Default select example" onChange={handleInput} value={passengerInput.time} required>
                      <option selected hidden disabled>To</option>
                      <option value="05:00">05:00</option>
                      <option value="06:00">06:00</option>
                      <option value="07:00">07:00</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                  </select>
                  <span className='text-danger'>{passengerInput.error_list.time} </span>
                <div className="col-sm-12">
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-12" for="departureDate">Departure Date</label>
                <div className="col-sm-12">          
                  <input type="date" min={date} name='departureDate' class="form-control" onChange={handleInput} value={passengerInput.departureDate} required/>
                  <span className='text-danger'>{passengerInput.error_list.departureDate} </span>
                </div>
              </div>

              
				    <div className="form-group">
                <label className="control-label col-12" for="numPassenger">Number of Passengers:</label>
                <div className="col-sm-12">          
                  <input type="number"  className="form-control" min='1' max='5' name='numPassenger' placeholder='0' onChange={handleInput} value={passengerInput.numPassenger} required/>
                  <span className='text-danger'>{passengerInput.error_list.numPassenger} </span>
                </div>
            </div>
            <div className="form-group"> 
              <div className="col-sm-offset-2 col-12 mt-4">
                  <button className="btn btn-default"
                    type="submit"
                    style={{background: '#d2a784', color: '#101e36', borderRadius:'10px', width: '6rem'}}>Book</button>
              </div>
          </div>
          </div>
        </div>
        </div>
			    </form>
        </div>
	    </div>
    </div>

      
  </section>


        </div>
    )
}

export default AddPassenger
