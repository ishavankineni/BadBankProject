import {  React } from "react";
import AppContext from "../context";
import { useContext } from "react";
import { Card } from "react-bootstrap";
//var ReactTable = window.ReactTable.default;

const AllData = () => {
  const ctx = useContext(AppContext);
  const renderUser=(user, index)=> {
    return (
      <tr key={index}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
      </tr>
    )
  };
  return (
    <Card>
      <Card.Body>
      <Card.Title><h1>ALL DATA</h1></Card.Title>
      <br />
      <table class="table table-sm table-dark" >
        <thead>
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PASSWORD</th>
          </tr>
        </thead>
        <tbody>{ctx.user.map(renderUser)}</tbody>
      </table>
      </Card.Body>
    </Card>
  );
};
export default AllData;
