export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const getIsFormValid = (firstName, email, Trade) => { 
  return ( 
    firstName && 
    validateEmail(email) && 
    
    Trade !== "Trade" 
  ); 
 }; 

 export const clearForm = (setFirstName, setLastName, setEmail, setPhoneNumber, setTrade) => { 
  setFirstName(""); 
  setLastName(""); 
  setEmail(""); 
  setPhoneNumber("");
  setTrade("Trade"); 
 }; 