import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Home';
import AboutUs from './Pages/AboutPage';
import Pricing from './Pages/PriceList';
import Nav from './Common/Navbar/Nav';
import Footer from './Common/Footer/Footer';
import ContactScreen from './Pages/Contact';
import RequestPickup from './Pages/PickupRequest';
import Customer from './Auth/Pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import Contactus from './Components/Contact/contactUs';
import CartList from './Pages/CardList';


function App() {
  return (
    <div>
     <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactScreen />} />
        <Route path="/Sign-Up" element={<Customer />} />
        <Route path="/request_pickup" element={<RequestPickup />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
