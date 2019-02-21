import React from "react";
import "./App.css"
import Header from "../components/header/header";
import Logo from "../components/logo/logo";
import Sidebar from "../components/sidebar/sidebar";
import Game from "../components/games/game";

function gamePage() {
  return (
    <div className="wrapper">
        <Sidebar />
        <div id="content">
          <Header />
          <Logo />
          <Game />
        </div>
    </div>
  );
}

export default gamePage;
