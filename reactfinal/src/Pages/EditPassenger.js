import React, {useState, useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {  Link, useNavigate, useParams  } from 'react-router-dom';
import './Style/Booking.css'

const EditPassenger = () => {
    // const imgUrl = './Images/header.jpg'
    // const styles = {
        
    //         backgroundImage: `url(${imgUrl})`,
    //         backgroundRepeat: "no-repeat",
    //         backgroundPosition: "center",
    //         backgroundSize: "cover",
    //         height: "600px"
    // }
    // const mystyle = {
    //     fontFamily: "Oswald, sansSerif",
    //               color: "#d2a784",
    //               fontSize: "35px",
    //               textAlign: "center",
    //   };

    const navigate = useNavigate();
    const [passengerInput, setPassenger] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorInput, setError] = useState([]);
    const {id} = useParams();
    const handleInput = (e) => {
        return setPassenger({...passengerInput, [e.target.name]: e.target.value});
        
    }
    

    useEffect(() => {
        const passenger_id = id;
        axios.get(`api/editpass/${passenger_id}`).then(res => {
                if(res.data.status === 200){
                    setPassenger(res.data.passenger);
                    setLoading(false);
                }
                else if(res.data.status === 404) {
                    swal(`error`, res.data.message);
                    navigate('/!fj$rh$44Su');
                }
            })
        
    }, [navigate, id]);

    const updatePass = (e) => {
        e.preventDefault();
        const data = {
            name:passengerInput.name,
            email:passengerInput.email,
            phone:passengerInput.phone,
            origin:passengerInput.origin,
            destination:passengerInput.destination,
            solutions:passengerInput.solutions,
            aircraft:passengerInput.aircraft,
            time:passengerInput.time,
            departureDate:passengerInput.departureDate,
            numPassenger:passengerInput.numPassenger,
        }
        axios.put(`api/updatepass/${id}`,data).then(
            res => {
                if(res.data.status === 200){
                    swal('Success!', res.data.message);
                    setError([]);
                    navigate('/!fj$rh$44Su');
                }
                else if(res.data.status === 404) {
                    swal(`error`, res.data.message);
                    navigate('/!fj$rh$44Su');
                }
                else if(res.data.status === 422) {
                    swal('All fields are mandatory!', '');
                    setError(res.data.validationErrors);
                }
            })
              
    };

  

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
            <section
              id="about"
              className="bg-white"
              style={{fontFamily: ['Roboto', 'sansSerif']}}>
        <div><br/><br/><br/><br/>
          <h1>Editing Form</h1>
        </div>

    <div className="container contact ">
	    <div className="row mx-2">
		    <div className="col-md-3">
			    <div className="contact-info">
				    
				    <h4>Fly to the sky so high.</h4>
			    </div>
		    </div>
		    <div className="col-md-9">
            <form className="contact-form" onSubmit={updatePass}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                      <label className="control-label col-12" for="name">Full Name:</label>
                      <div className="col-sm-12">          
                        <input type="text" name='name' className="form-control" onChange={handleInput} />
                        <span className='text-danger'>{errorInput.name} </span>
                      </div>
                  </div>
                  <div className="form-group">
                      <label className="control-label col-12" for="email">Email Address:</label>
                      <div className="col-sm-12">          
                        <input type="email" name='email' className="form-control" onChange={handleInput} />
                        <span className='text-danger'>{errorInput.email} </span>
                      </div>
                  </div>
                  <div className="form-group">
                      <label className="control-label col-12" for="phone">Phone #:</label>
                        <input type="phone" name='phone' className="form-control"  onChange={handleInput}  />
                        <span className='text-danger'>{errorInput.phone} </span>
                  </div>
                  <div className="form-group">
                      <label className="control-label col-12" for="orgin">Origin</label>
                        <select className="form-select form-group" name='origin' aria-label="Default select example" onChange={handleInput} >
                            <option selected hidden disabled>From</option>
                            <option value="RPLL">Manila</option>
                            <option value="RPLC">Clark</option>
                            <option value="RPUR">Baler, Quezon</option>
                            <option value="RPUB">Baguio</option>
                            <option value="RPLB">Subic, Zambales</option>
                            <option value="RPUQ">Vigan, Ilocos Sur</option>
                        </select>
                        <span className='text-danger'>{errorInput.origin} </span>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-12" for="destination">Destination</label>
                      <select className="form-select form-group" name='destination' aria-label="Default select example" onChange={handleInput} >
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
                      <span className='text-danger'>{errorInput.destination} </span>
                    <div className="col-sm-12">
                    </div>
                  </div>            				    
                </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="control-label col-12" for="solutions">Air Charter Solutions</label>
                  <select className="form-select form-group" name='solutions' aria-label="Default select example" onChange={handleInput} >
                      <option selected hidden disabled>Air Solutions</option>
                      <option value="DROPOFF">Drop-Off</option>
                      <option value="ROUNDTRIP">Round-Trip</option>
                      <option value="TOUR">Tour</option>
                      <option value="MEDEVAC">Medevac</option>
                      <option value="CARGO">Cargo</option>
                  </select>
                  <span className='text-danger'>{errorInput.solutions} </span>
                <div className="col-sm-12">
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-12" for="aircraft">Aircraft Type</label>
                  <select className="form-select form-group" name='aircraft' aria-label="Default select example" onChange={handleInput}  >
                      <option selected hidden disabled>AIRCRAFT</option>
                      <option value="HELICOPTER">Helicopter</option>
                      <option value="JETS">Jets</option>
                  </select>
                  <span className='text-danger'>{errorInput.aircraft} </span>
                <div className="col-sm-12">
                </div>
              <div className="form-group">
                <label className="control-label col-12" for="time">Departure Time</label>
                  <select className="form-select form-group" name='time' aria-label="Default select example" onChange={handleInput} >
                      <option selected hidden disabled>Time</option>
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
                  <span className='text-danger'>{errorInput.time} </span>
                <div className="col-sm-12">
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-12" for="departureDate">Departure Date</label>
                <div className="col-sm-12">          
                  <input type="date" min={date} name='departureDate' class="form-control" onChange={handleInput} />
                  <span className='text-danger'>{errorInput.departureDate} </span>
                </div>
              </div>

              
				    <div className="form-group">
                <label className="control-label col-12" for="numPassenger">Number of Passengers:</label>
                <div className="col-sm-12">          
                  <input type="number"  className="form-control" min='1' max='5' placeholder='0' name='numPassenger' onChange={handleInput} />
                  <span className='text-danger'>{errorInput.numPassenger} </span>
                </div>
            </div>
            <div className="form-group"> 
              <div className="col-sm-offset-2 col-12 mt-4">
                  <button className="btn btn-default "
                    type="submit"
                    style={{background: '#d2a784', color: '#101e36', borderRadius:'10px', width: '6rem'}}>Update</button>
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
};

export default EditPassenger