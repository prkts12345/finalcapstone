import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Faqs = () => {

    const [expanded, setExpanded] = React.useState(false);
    
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


      const style = {
        boxShadow: 'none',
        background: '#1b2b51',
        color: `var(--bs-gray-100)`,
        borderRadius: '4px',
        marginTop:'1rem'
      }
    return (
        <div>
            <header
      className="text-center text-white d-flex masthead"
             style={styles}>
    <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
              <strong style={mystyle}>Frequently asked questions&nbsp;</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-8 mx-auto">
          <p
            className="text-faded mb-5"
            style={{color: `var(--bs-white)`, fontFamily: ['Open Sans', 'sansSerif'], fontSize: '20px'}}>
            Home / Frequently asked questions
          </p>
        </div>
      </div>
            </header>


    
    <section id="about" className="bg-white push-top" style={{marginBottom: '50px'}}>
      <Typography><h1
        className="text-center"
        style={{fontFamily: ['Roboto Condensed', 'sans-serif'], color: '#1b2b51'}}>
        Do you have questions?
      </h1></Typography>
      <Typography>Below you'll find answers to the most common questions. If you still
        can't find the answer you're looking for, just Contact us!</Typography> 
        
      <div className="container">
        <div className="row">
          <div className="col-xl-6" style={{background: '#ffffff'}}>
                <Accordion>
                  <AccordionSummary sx={style}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{backgroundColor: '#1b2b51', borderRadius: '10px'}}
                  >
                    <Typography>RATES</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text">
                                The rate for our KingAir350 starts at ₱200,000 per hour.
                                The rate for the Bell429 starts at ₱180,000 per hour. To
                                get an accurate cost estimate for your desired itinerary,
                                you may call us at&nbsp;(+632) 8854 28 01, (+632) 8854 28
                                02, or +63 949 994 2177 for assistance.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary sx={style}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{backgroundColor: '#1b2b51', borderRadius: '10px'}}
                  >
                    <Typography>BOOKING PROCESS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text">
                    Fill out our&nbsp;<Link
                        to="/"
                        >quotation form</Link>
                        &nbsp;found at our homepage. Indicate your itinerary,
                      estimated date of departure and arrival, number of
                      passengers, and other applicable information and requests
                      A sales representative from Lipad will be in touch with
                      you regarding your query. Once the details are finalized
                      and you give your conforme, your flight will be booked.
                      Once your flight is booked, you're all set to fly with
                      Lipad!
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary sx={style}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{backgroundColor: '#1b2b51', borderRadius: '10px'}}
                  >
                    <Typography>PAYMENT METHODS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text">
                    As of the moment, we accept cash, bank deposits, and bank
                      transfers. We're currently working on adding more flexible
                      payment options for you.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
          </div>
          <div className="col-xl-6" style={{background: '#ffffff'}}>
              <Accordion>
                  <AccordionSummary sx={style}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{backgroundColor: '#1b2b51', borderRadius: '10px'}}
                  >
                    <Typography>DOES LIPAD OFFER INTERNATIONAL CHARTERS</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text">
                    Our Super KingAir 350 can currently cater to selected
                      Southeast Asian destinations. However, we can also arrange
                      international flights for you through our business
                      aviation partners.
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion>
                  <AccordionSummary sx={style}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{backgroundColor: '#1b2b51', borderRadius: '10px'}}
                  >
                    <Typography>FLIGHT CANCELLATION AND REFUND POLICY</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text">
                    For more information regarding cancellations and refunds,
                      You may also call us at (+632) 8854 42 01, (+632) 8854 38
                      02, or +63 249 994 8177 for assistance.
                    </Typography>
                  </AccordionDetails>
              </Accordion>
              <Accordion>
                  <AccordionSummary sx={style}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{backgroundColor: '#1b2b51', borderRadius: '10px'}}
                  >
                    <Typography>CAN I BRING MY PETS ON BOARD?</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="text">
                    Unfortunately no, we currently don't allow pets on-board.
                    </Typography>
                  </AccordionDetails>
              </Accordion>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Faqs
