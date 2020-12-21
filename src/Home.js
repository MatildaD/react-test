import React from "react";
import "./App.css";
import "./Info.css";
import { NavLink} from "react-router-dom";
import logo from './logo.svg';

export default function Home() {
  return (
    <div className="info-container">
    <div className="info-big-title">React Test App</div>
      <div className="info-title">This is where the testing happens</div>
      <div className="info-text">Several things are tested on this site, such as a <NavLink 
              to="/timer"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Countdown Timer
            </NavLink> , a <NavLink
              to="/quiz"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Quiz
            </NavLink> , a <NavLink
              to="/bingo"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Bingo
            </NavLink> board creator/game, as well as an <NavLink
              to="/episode-randomizer"
              className="nav-link-in-text"
              activeClassName="selected"
            >
              Episode Randomizer.
            </NavLink> </div>

            <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
