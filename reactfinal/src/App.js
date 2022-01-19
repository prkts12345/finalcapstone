
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import AddPassenger from './Pages/AddPassenger';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import AdminPassenger from './Pages/AdminPassenger';
import EditPassenger from './Pages/EditPassenger';
import ViewPassenger from './Pages/ViewPassenger';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import AirportGuide from './Pages/AirportGuide';
import CargoCharter from './Pages/CargoCharter';
import Faqs from './Pages/Faqs';
import PrivateCharter from './Pages/PrivateCharter';
import Bell from './Pages/Bell';
import KingAir from './Pages/KingAir';
import Medvac from './Pages/Medvac';
import AirTour from './Pages/AirTour'
import Index from './Pages/Index';
import ThankYou from './Pages/ThankYou';

axios.defaults.baseURL = "http://localhost:8000/";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route exact path ="/!fj$rh$44Su" element={<AdminPassenger/>}></Route>
        <Route exact path ="/!fj$rh$44Su/editpass/:id" element={<EditPassenger/>}></Route>
        <Route exact path = "/passengers" element={<ViewPassenger/>}></Route>
        <Route exact path = "/addpassenger" element={<AddPassenger/>}></Route>
        <Route exact path = "/aboutus" element={<AboutUs/>}></Route>
        <Route exact path ="/contactus" element={<ContactUs/>}></Route>
        <Route exact path="/airportguide" element={<AirportGuide/>}></Route>
        <Route exact path="/cargocharter" element={<CargoCharter/>}></Route>
        <Route exact path="/faqs" element={<Faqs/>}></Route>
        <Route exact path="/privatecharter" element={<PrivateCharter/>}></Route>
        <Route exact path="/bell429" element={<Bell/>}></Route>
        <Route exact path="/kingair350" element={<KingAir/>}></Route>
        <Route exact path ="/medevac" element={<Medvac/>}></Route>
        <Route exact path ="/airtour" element={<AirTour/>}></Route>
        <Route exact path ="/home" element={<Index/>}></Route>
        <Route exact path = "/thankyou" element={<ThankYou/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
