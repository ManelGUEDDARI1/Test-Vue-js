import validator from "validator";

const validateRegisterInput = (data) => {
  let errors = {};

  const { username, email, date } = data;
   
    if (username.length < 3) {
      errors.username = "Username must contain at least 3 characters";
    };         
    if (username.toUpperCase() === "marc") {
      errors.username = "wrong username";
    }
  

  if (validator.isEmpty(username)) {
    errors.username = "Username field is required.";
  }

  if (!validator.isEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (validator.isEmpty(email)) {
    errors.email = "Email field is required.";
  }
  if (email.includes("@yahoo.fr")) {
    errors.email = "Email must don't contain yahoo.fr";
  }

  if (validator.isEmpty(date)) {
    errors.date = "Date field is required.";
  }

  var parts = date.match(/(\d+)/g);
  var date2 = new Date(parts[0], parts[1]-1, parts[2]); 

var today = new Date();
var date1 = new Date(today.getFullYear(),(today.getMonth()),today.getDate());
 console.log(date1.getTime());
 console.log(date2.getTime());

 if (date2.getTime() <= date1.getTime()) {
   errors.date= "The date must be only in the future";
 }


  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default validateRegisterInput;
