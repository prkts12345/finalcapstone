import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
  
  const thStyle = {
    background: '#1b2b51',
    color: '#d2a784',
    borderRadius: '30px',
  };

  const td ={
    color: '#d2a784',
    fontWeight: 'bold'
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
              <strong style={mystyle}>AIRPORT GUIDE&nbsp;</strong>
            </h1>
          </div>
        </div>
        <div className="col-lg-8 mx-auto">
          <p
            className="text-faded mb-5"
            style={{color: `var(--bs-white)`, fontFamily: ['Open Sans', 'sansSerif'], fontSize: '20px'}}>
            Home / Airport Guide
          </p>
        </div>
      </div>
    </header>

      <h3
        style={{
          fontFamily: ['Roboto', 'sansSerif'],
          textAlign: "center",
          fontSize: '2rem',
          fontWeight: 'bold',
          marginTop: '50px'
        }}
      >
        Click on your location
      </h3>
    <div className="container" style={{marginTop: '50px', marginBottom: '50px'}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{backgroundColor: '#1b2b51', marginBottom: '5px'}}
        >
          <Typography sx={{ width: '100%', flexShrink: 0, backgroundColor: '#1b2b51', color: 'white'}}>
          LUZON
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {/* POP UP IN LUZON */}
           <TableContainer component={Paper}>
                  <Table aria-label="customized table">
                    <TableHead style={thStyle}>
                      <TableRow >
                        <TableCell style={td}>Airport Name</TableCell>
                        <TableCell style={td} align="right">Location</TableCell>
                        <TableCell style={td} align="right">ICAO</TableCell>
                        <TableCell style={td} align="right">IATA</TableCell>
                        <TableCell style={td} align="center">Super King Air 350</TableCell>
                        <TableCell style={td} align="center">Bell 429</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">Dr. Juan C. Angara Airport
                          </TableCell>
                          <TableCell align="right">Baler, Quezon</TableCell>
                          <TableCell align="right">RPUR</TableCell>
                          <TableCell align="right">BQA</TableCell>
                          <TableCell align="center"><i
                                      className="fa fa-check"
                                      >
                                    </i></TableCell>
                          <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">Basco Airport
                          </TableCell>
                          <TableCell align="right">Basco, Batanes	</TableCell>
                          <TableCell align="right">RPUO</TableCell>
                          <TableCell align="right">BSP</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"><i
                                      className="fa fa-check"
                                      >
                                    </i></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">Calapan Airport	
                          </TableCell>
                          <TableCell align="right">Bagabag, Nueva Vizcaya</TableCell>
                          <TableCell align="right">RPUZ</TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="center"><i
                                      className="fa fa-check"
                                      >
                                    </i></TableCell>
                          <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">Cauayan Airport	
                          </TableCell>
                          <TableCell align="right">Cauayan, Isabela</TableCell>
                          <TableCell align="right">RPUZ</TableCell>
                          <TableCell align="right">CYZ</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"><i
                                      className="fa fa-check"
                                      >
                                    </i></TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          style={{backgroundColor: '#1b2b51', marginBottom: '5px'}}
        >
          <Typography sx={{ width: '100%', flexShrink: 0, backgroundColor: '#1b2b51', color: 'white' }}>VISAYAS</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {/* POP UP IN VISAYAS */}
          <TableContainer component={Paper}>
                  <Table aria-label="customized table">
                    <TableHead style={thStyle}>
                      <TableRow >
                        <TableCell style={td}>Airport Name</TableCell>
                        <TableCell style={td} align="right">Location</TableCell>
                        <TableCell style={td} align="right">ICAO</TableCell>
                        <TableCell style={td} align="right">IATA</TableCell>
                        <TableCell style={td} align="center">Super King Air 350</TableCell>
                        <TableCell style={td} align="center">Bell 429</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">Antique Airport / Evelio Javier Airport
                          </TableCell>
                          <TableCell align="right">Antique</TableCell>
                          <TableCell align="right">RPVS</TableCell>
                          <TableCell align="right">EUQ</TableCell>
                          <TableCell align="center"><i
                                      className="fa fa-check"
                                      >
                                    </i></TableCell>
                          <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">New Bacolod-Silay International Airpor
                          </TableCell>
                          <TableCell align="right">Bacolod	</TableCell>
                          <TableCell align="right">RPVB</TableCell>
                          <TableCell align="right">BCD</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"><i
                                      className="fa fa-check"
                                      >
                                    </i></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">Calbayog Airport
                          </TableCell>
                          <TableCell align="right">Calbayog, Samar</TableCell>
                          <TableCell align="right">RPVC</TableCell>
                          <TableCell align="right">CYP</TableCell>
                          <TableCell align="center"><i
                                      className="fa fa-check"
                                      >
                                    </i></TableCell>
                          <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">Caticlan Airport / Godofredo P. Ramos Airport
                          </TableCell>
                          <TableCell align="right">Caticlan, Malay, Aklan</TableCell>
                          <TableCell align="right">RPVE</TableCell>
                          <TableCell align="right">MPH</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"><i
                                      className="fa fa-check"
                                      >
                                    </i></TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          style={{backgroundColor: '#1b2b51', marginBottom: '5px'}}
        >
          <Typography sx={{ width: '100%', flexShrink: 0, backgroundColor: '#1b2b51', color: 'white'}}>
            MINDANAO
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {/* POP UP IN MINDANAO */}
           <TableContainer component={Paper}>
                  <Table aria-label="customized table">
                    <TableHead style={thStyle}>
                      <TableRow >
                        <TableCell style={td}>Airport Name</TableCell>
                        <TableCell style={td} align="right">Location</TableCell>
                        <TableCell style={td} align="right">ICAO</TableCell>
                        <TableCell style={td} align="right">IATA</TableCell>
                        <TableCell style={td} align="center">Super King Air 350</TableCell>
                        <TableCell style={td} align="center">Bell 429</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">Bislig Airport
                          </TableCell>
                          <TableCell align="right">Bislig, Surigao del Sur</TableCell>
                          <TableCell align="right">RPMF</TableCell>
                          <TableCell align="right">BPH</TableCell>
                          <TableCell align="center"><i
                                      className="fa fa-check"
                                      >
                                    </i></TableCell>
                          <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">Butuan Airport
                          </TableCell>
                          <TableCell align="right">Butuan, Agusan Del Norte</TableCell>
                          <TableCell align="right">RPME</TableCell>
                          <TableCell align="right">CGM</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"><i
                                      className="fa fa-check"
                                      >
                                    </i></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">Camiguin Airport
                          </TableCell>
                          <TableCell align="right">Camiguin</TableCell>
                          <TableCell align="right">RPMH</TableCell>
                          <TableCell align="right">CBO</TableCell>
                          <TableCell align="center"><i
                                      className="fa fa-check"
                                      >
                                    </i></TableCell>
                          <TableCell align="center"></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">Cotabato Airport / Awang Airport
                          </TableCell>
                          <TableCell align="right">Cotabato</TableCell>
                          <TableCell align="right">RPMC</TableCell>
                          <TableCell align="right">CBO</TableCell>
                          <TableCell align="center"></TableCell>
                          <TableCell align="center"><i
                                      className="fa fa-check"
                                      >
                                    </i></TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}