import Navbar from './Navbar/navbar.js'; // Corrected path
import Form from './Form/form.js'; // Corrected path
import Footer from './Footer/footer.js'; // Corrected path
import './App.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
// import Home from "./Home";
import PaymentSuccess from "./PaymentSuccess";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      {/* You can place other components or content here */}
      <Router>
        <Routes>
        {/* <Form /> */}
         {/* <Route path = "/" element = {<Form/>} /> */}
         <Route path = "/paymentsuccess" element = {<PaymentSuccess/>} />
        </Routes>
       </Router>
      <Footer />
    </div>
  );
}


export default App;
