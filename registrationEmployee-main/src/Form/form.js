import "./form.css";
import {useref , useState } from "react";
import { validateEmail, getIsFormValid, clearForm } from "./utils";
// import  {DatePicker}  from "react-datepicker";
import axios from 'axios';
import { Button} from "@chakra-ui/react"
// import Razorpay from 'razorpay';


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
 
  const [Trade, setTrade] = useState("");
  const [idProof, setIdProof] = useState(null);

  const [selectedDate , setSelectedDate] = useState("");
  // const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const clear= () => {
    
    clearForm(setFirstName, setLastName, setEmail, setPhoneNumber, setTrade);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName && email && Trade !== "") {
      alert("Please upload a valid ID proof.");
    } else {
      alert("Please fill out all details.");
    }
  };

  const handleIDProofUpload = (e) => {
    const file = e.target.files[0];
    setIdProof(file);
  };

  const getIsFormValid = () => {
    return (
      firstName && validateEmail(email) && phoneNumber && Trade !== "Trade"
    );
  };

  const checkoutHandler = async (amount) => {
        
    const {data:{key}} = await axios.get("http://www.localhost:4000/api/getkey")

    const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
        amount
    });


    const options = {
        key, 
        amount: order.amount, 
        upi_link:true,
        currency: "INR",
        name: "Rozgaar app",
        description: "app payment page testing",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png",
        order_id: order.id, 
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9000090000"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#121212"
        }

    };
    const razor = new window.Razorpay(options);
    razor.open();
       

    // console.log({data})
}

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Employee Registration Form</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
            />
          </div>

          <div className="Field">
            <label>
              Phone number <sup>*</sup>
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="Phone number"
            />
          </div>

          <div className="Field">
            <label>
              Date <sup>*</sup>
            </label>
            <input type="date" value = {selectedDate} onChange={handleChange} />
            {/* <DatePicker></DatePicker> */}
          </div>

          <div className="Field">
            <label>
              Trade <sup>*</sup>
            </label>
            <select value={Trade} onChange={(e) => setTrade(e.target.value)}>
              <option disabled value="">
                Select your trade
              </option>
              <option value="Painter">Painter</option>
              <option value="Plumber">Plumber</option>
              <option value="Fitter">Fitter</option>
            </select>
          </div>

          <div className="Field">
            <label>
              Upload valid ID proof <sup>*</sup>
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleIDProofUpload}
            />
          </div>

          <Button className="btn-cs" onClick={() => checkoutHandler(200)}>Payment Now</Button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
