import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import homeContent from "./Components-home/homeContent";
import Prescription  from "./Components-home/Prescription";
import { Navbar } from "./Navbar";
import Profile from "./Components-home/user/Profile";

function Home() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/presc" component={Prescription} />
          <Route path="/" component={homeContent} />
        </Switch>
      </Router>
    </>
  );
}

export default Home;
