import { Card, Button } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { useState, React } from "react";
import AppContext from "../context";
const Withdraw = () => {
  const ctx = useContext(AppContext);
  const [withdraw, setWithdraw] = useState();
  const [disableButton, setDisableButton] = useState(true);
  const { totalAmount, setTotalAmount } = useContext(AppContext);
  const [inputError, setInputError] = useState("");
  const handleInput = (event) => {
    setWithdraw(() => event.target.value);
    if (event.target.value === "0" || event.target.value === "") {
      setDisableButton(true);
      setInputError("");
    } else if (!Number(event.target.value)) {
      setInputError("Please Enter Numeric values greater than 0");
      console.log("Here");
      setDisableButton(true);
    } else if (Number(event.target.value)<0) {
      setInputError("Please Enter Positive values only");
      setDisableButton(true);
    }/*else if (event.target.value > totalAmount) {
      setInputError("Cannot withdraw more than total balance");
      setDisableButton(true);
    } */
     else if (event.target.value > 0 /*&& event.target.value <= totalAmount*/) {
      setInputError("");
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Number(withdraw)>totalAmount){
      console.log(totalAmount,Number(withdraw));
      setWithdraw(()=>'');
      alert("Transaction Failed: Cannot Withdraw more than account balance.");
      setDisableButton(true);
    }
    else{
    setTotalAmount((amount) => Number(amount) - Number(withdraw));
    setWithdraw(()=>'');
    alert("Amount withdrawn Successfully!");
    setDisableButton(true);
    }
  };
  useEffect(() => {
    //console.log(withdraw);
    //console.log(disableButton);
  });
  return (
    <main className="pages">
      <Card style={{ width: "200rem" }}>
        <Card.Body>
          <>
            <Card.Title><h1>WITHDRAW</h1></Card.Title>
            <Card.Text>Balance : {ctx.totalAmount}</Card.Text>
            <input
              name="dollars"
              placeholder="0"
              value={withdraw}
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
              Withdraw
            </Button>
          </>
        </Card.Body>
      </Card>
    </main>
  );
};

export default Withdraw;
