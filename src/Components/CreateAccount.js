import { useState, useEffect, React } from "react";
//import { Card, Button } from "react-bootstrap";
//import { Link } from "react-router-dom";
import AppContext from "../context";
import { useContext } from "react";
//import { useNavigate } from "react-router-dom";
const CreateAccount = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const { user, setUser } = useContext(AppContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [formTouched,setFormTouched]=useState(false);//
  const [buttonName,setButtonName]=useState('CREATE ACCOUNT');//
  //const navigate = useNavigate();
  const handleValidation = (event) => {
    //let valid = false;
    if (name.length === 0) {
      //valid = false;
      setNameError(()=>"Name is Required");
    } else {
      setNameError(()=>"");
      //valid = true;
    }
    if (!email.match(/^[A-Z0-9-_%+-.]+@[A-Z0-9._]+\.[A-Z]{2,}$/i)) {
      //valid = false;
      setemailError(()=>"Please enter a valid email");
    } else {
      setemailError(()=>"");
      //valid = true;
    }
    if (password === null || password.length === 0 || password === "") {
      //valid = false;
      setpasswordError(()=>"Password is Required");
    } else if (
      !password.match(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      )
    ) {
      //valid = false;
      setpasswordError(()=>
        "Length must be min 8 Charcters and Max 24 Charcters . Use atleast one capital letter , one small letter, one digit and one special character"
      );
    } else {
      setpasswordError(()=>"");
      //valid = true;
    }
  };
  useEffect(() => {
    //console.log(password);
    //console.log(disableButton);
    if(formTouched){
      handleValidation();
    }
    setFormIsValid(()=>(nameError === "" && passwordError === "" && emailError === ""));
    //console.log(formIsValid);
  }, [name, email, password,nameError,emailError,passwordError,formTouched]);

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(formIsValid);
    if (formIsValid) {
      var user_list = user;
      user_list.push({
        name: name,
        email: email,
        password: password,
        balance: 0,
      });
      setUser(user_list);
    }
    alert("Successfully Created Account");
    e.target.reset();
    setButtonName(()=>"ADD ANOTHER ACCOUNT")
  };
  return (
    <div id="mainCreateAccount">
      <h1>CREATE ACCOUNT</h1>
      <div
        className="App"
        style={{ marginLeft: "0px", width: "30%", backgroundColor: "darkgray" }}
      >
        <div className="container">
          <div className="row d-flex">
            <div
              className="col-md-4"
              style={{ width: "100%", height: "300px" }}
            >
              <form id="loginform" onSubmit={loginSubmit}>
                <div
                  className="form-group"
                  style={{ marginLeft: "0px", width: "100%" }}
                >
                  <label>NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    aria-describedby="nameHelp"
                    placeholder="Enter name"
                    onChange={(event) => {
                      setName(() => event.target.value);
                      //handleValidation(event);
                      setFormTouched(()=>true);
                    }}
                  />
                  <small id="emailHelp" className="text-danger form-text">
                    {nameError}
                  </small>
                </div>
                <div
                  className="form-group"
                  style={{ marginLeft: "0px", width: "100%" }}
                >
                  <label>EMAIL ADDRESS</label>
                  <input
                    type="email"
                    className="form-control"
                    id="EmailInput"
                    name="EmailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(event) => {
                      setEmail(() => event.target.value);
                      //handleValidation(event);
                      setFormTouched(()=>true);
                    }}
                  />
                  <small id="emailHelp" className="text-danger form-text">
                    {emailError}
                  </small>
                </div>
                <div className="form-group">
                  <label>PASSWORD</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(event) => {
                      setPassword(() => event.target.value);
                      //handleValidation(event);
                      setFormTouched(()=>true);
                    }}
                  />
                  <small id="passworderror" className="text-danger form-text">
                    {passwordError}
                  </small>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginTop: "10px" }}
                  disabled={!formIsValid}
                >
                  {buttonName}
                </button>
                {/*<button
                  id="addOtherAccountBtn"
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginTop: "10px", display: "none" }}
                  //onClick={navigate("/createAccount")}
                >
                  ADD ANOTHER ACCOUNT
                  </button>*/}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateAccount;
