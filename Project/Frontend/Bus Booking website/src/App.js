import Booking from "./components/Booking";
import ContactUsPage from "./components/ContactUsPage";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import PassengerInfo from "./components/PassengerInfo";
import PaymentConfirmation from "./components/PaymentConfirmation";
import ProfilePage from "./components/Profile";
import SignUp from "./components/SignUp";
import Home from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact' element={<ContactUsPage />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/booking' element={<Booking />} />
          <Route exact path='/payment-confirmation' element={<PaymentConfirmation />}/>
          <Route exact path='/passenger-info' element={<PassengerInfo />}/>
          <Route exact path='/profile' element={<ProfilePage/>}/>
        </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App;
