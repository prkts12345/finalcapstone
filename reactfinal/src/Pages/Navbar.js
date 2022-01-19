import React from 'react';



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-default navbar-fixed-top navbar-expand-lg navbar-light bg-light ">
                <div className="container">
                    <div>
                        <img src="./Images/lipadlight.png" alt="logo" width="115" height="70"/>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="nav navbar-nav">
                        <div className="nav-item">
                        <a href="/home"className='nav-link' className="dropdown-item">Home</a>
                        </div>
                        <div className="dropdown">
                        <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                          Air Charter Solutions
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <div><a href="/privatecharter" className="dropdown-item">Private Charter</a></div>
                          <div><a href="/cargocharter" className="dropdown-item">Cargo Charter</a></div>
                          <div><a href="/medevac" className="dropdown-item">Medevac</a></div>
                          <div><a href="/airtour" className="dropdown-item">Aerial Tours</a></div>
                        </ul>
                        </div>
                        <div className="dropdown">
                        <a className="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                          Aircraft Guide
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <div><a href="/bell429" className="dropdown-item">Bell 429</a></div>
                        <div><a href="/kingair350" className="dropdown-item">Super King Air 350</a></div>
                        </ul>
                        </div>
                        <div className="nav-item">
                        <div><a href="/airportguide" className="dropdown-item">Airport Guide</a></div>
                        </div>
                        <div className="nav-item">
                        <div><a href="/aboutus" className="dropdown-item">About Us</a></div>
                        </div>
                        <div className="nav-item">
                        <div><a href="/faqs" className="dropdown-item">FAQs</a></div>
                        </div>
                        <div className="nav-item">
                        <div><a href="/contactus" className="dropdown-item">Contact Us</a></div>
                        </div>
                        {/* <div className="nav-item">
                        <div><a href="/addpassenger" className="dropdown-item">Booking Form</a></div>
                        </div> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar