import React, {useState, useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const AdminPassenger = () => {
    const [flights, setFlight] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axios.get(`api/!fj$rh$44Su`).then(res=> {
            if(res['status']===200) {
                setFlight(res.data.flights);
                setLoading(false);
            }
        })
    }, []); 


    const deleteFlight = (e,id) => {
        e.preventDefault();
        const delClick = e.currentTarget;
        delClick.innerText = 'deleting..';
        axios.delete(`api/deleteflight/${id}`).then(
            res => {
                if(res.data.status === 200){
                    swal('Deleted!', res.data.message);
                    delClick.closest('tr').remove();
                }
                else if(res.data.status === 404) {
                    swal(`error`, res.data.message);
                    delClick.innerText = 'Delete'
                };
            }
        );
    }
    if (loading) {
        return <h4>Loading Task Data</h4>
    }
    else {
        var admin_HTMLTABLE="";
        admin_HTMLTABLE = flights.map((item, index) => {
            return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.origin}</td>
                <td>{item.destination}</td>
                <td>{item.solutions}</td>
                <td>{item.aircraft}</td>
                <td>{item.time}</td>
                <td>{item.departureDate}</td>
                <td>{item.numPassenger}</td>

                <td><Link to={`editpass/${item.id}`} className='btn btn-success btn-sm'>Edit</Link></td>
                <td ><button className='btn btn-danger btn-sm'type="button" onClick={(e) => deleteFlight(e, item.id)}>Delete</button></td>
            </tr>)
        });
    };
    return (
        <div>
            <div className='container' style={{marginTop: '50px', marginBottom: '50px'}}>
                
                <div className="card">
                    <div className="card-header">
                        ADMIN
                        
                    </div>
                    <div className="card-body">
                        <table className='table table-bordered table-responsive'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Origin</th>
                                    <th>Destination</th>
                                    <th>Aircraft Solutions</th>
                                    <th>Aircraft Type</th>
                                    <th>Time</th>
                                    <th>Departure</th>
                                    <th>Passengers</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody >
                                {admin_HTMLTABLE}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminPassenger