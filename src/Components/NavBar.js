import "../CSS/navbar.css";
//import { Outlet } from "react-router-dom";
//import { useEffect } from "react";
//import $ from "jquery";
import { NavLink } from "react-router-dom";
//import { useLocation } from "react-router-dom";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FaLaughSquint } from "react-icons/fa";
//import { AiFillBank  } from 'react-icons/ai';
function NavBar() {
  /* {
    useEffect(()=>{
    $(document).ready(function(){
      $(".navbar .navbar-nav .nav-item").click(function (e) {
           e.preventDefault();
          $('.nav-link').removeClass('active');
          $(this).closest('.nav-link').addClass('active');
       });
      });
    })
  }*/

  //const { pathname } = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Bad Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse topnav-right" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <OverlayTrigger
              placement="left"
              delay={{ show: 50, hide: 40 }}
              overlay={(props) => (
                <Tooltip id="button-tooltip" {...props}>
                  Home Page. Please dont sue Us!
                </Tooltip>
              )}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  // isactive={() => pathname == "/home" || pathname == "/"}
                  activeclassName="active"
                >
                  Home
                </NavLink>
              </li>
            </OverlayTrigger>
            <OverlayTrigger
              placement="left"
              delay={{ show: 50, hide: 40 }}
              overlay={(props) => (
                <Tooltip id="button-tooltip" {...props}>
                  Create Account! Please note: you are subjected to all types of
                  risks.
                </Tooltip>
              )}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/createAccount"
                  activeclassName="active"
                >
                  Create Account
                </NavLink>
              </li>
            </OverlayTrigger>
            <OverlayTrigger
              placement="left"
              delay={{ show: 50, hide: 40 }}
              overlay={(props) => (
                <Tooltip id="button-tooltip" {...props}>
                  Please hand over all the money you have!
                </Tooltip>
              )}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/deposit"
                  activeclassName="active"
                >
                  Deposit
                </NavLink>
              </li>
            </OverlayTrigger>
            <OverlayTrigger
              placement="left"
              delay={{ show: 50, hide: 40 }}
              overlay={(props) => (
                <Tooltip id="button-tooltip" {...props}>
                  Take all the money you want! Rob us free!
                </Tooltip>
              )}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/withdraw"
                  activeclassName="active"
                >
                  Withdraw
                </NavLink>
              </li>
            </OverlayTrigger>
            <OverlayTrigger
              placement="left"
              delay={{ show: 50, hide: 40 }}
              overlay={(props) => (
                <Tooltip id="button-tooltip" {...props}>
                  See all the users who trusted us{" "}
                  <FaLaughSquint icon="check-square" />
                </Tooltip>
              )}
            >
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/alldata"
                  activeclassName="active"
                >
                  All Data
                </NavLink>
              </li>
            </OverlayTrigger>
          </ul>
          {/*
        <span className="navbar-text">
          <a className="nav-link" href="/loginOrSignUp">Login / SignUp</a>
        </span> */}
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
