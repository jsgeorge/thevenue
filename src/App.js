import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/layout/header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Footer from "./components/layout/footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px " }}>
        <Header />
        <Featured />
        <VenueInfo />
        <Highlights />
        <Pricing />
        <Footer />
      </div>
    );
  }
}

export default App;
