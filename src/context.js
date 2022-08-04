import React from "react";

const AppContext = React.createContext({
  user: null,
  setUser: () => {},
  loggedInUser: null,
  setLoggedInUser: () =>{},
  totalAmount:0,
  setTotalAmount: () =>{}
});

export default AppContext;