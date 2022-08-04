import { Card, Button } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { useState, React } from "react";
import AppContext from "../context";
const Deposit = () => {
  const ctx = useContext(AppContext);
  const [deposit, setDeposit] = useState();
  const [disableButton, setDisableButton] = useState(true);
  const { totalAmount, setTotalAmount } = useContext(AppContext);
  const [inputError, setInputError] = useState("");
  const handleInput = (event) => {
    setDeposit(() => event.target.value);
    if (event.target.value === "0" || event.target.value === "") {
      setDisableButton(true);
      setInputError("");
    } else if (!Number(event.target.value)) {
      setInputError("Please Enter Numeric values only");
      console.log("Here");
      setDisableButton(true);
    } else if (Number(event.target.value)<0) {
      setInputError("Please Enter Positive values only");
      console.log("Here");
      setDisableButton(true);
    } else if (event.target.value > 0) {
      setInputError("");
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTotalAmount((amount) => Number(amount) + Number(deposit));
    setDeposit(()=>'');
    alert("Amount deposited Successfully!");
    setDisableButton(true);
  };
  useEffect(() => {
    console.log(totalAmount);
    //console.log(disableButton);
  },[totalAmount]);
  return (
    <main className="pages">
      <Card style={{ width: "200rem" }}>
        <Card.Body>
          <>
            <Card.Title> <h1>DEPOSIT</h1></Card.Title>
            <Card.Text>Balance : {ctx.totalAmount}</Card.Text>
            <input
              name="dollars"
              placeholder="0"
              value={deposit}
              onChange={handleInput}
            ></input>
            <small id="emailHelp" className="text-danger form-text">
              {inputError}
            </small>
            <br />
            <br />
            <Button
              disabled={disableButton}
              variant="primary"
              onClick={handleSubmit}
            >
              Deposit
            </Button>
          </>
        </Card.Body>
      </Card>
    </main>
  );
};

export default Deposit;
