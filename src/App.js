import React, { useState } from "react";
import "./styles.css";

var carDB = {
  Under1L: [
    {
      manufacturer: "Maruti Suzuki",
      make: "Zen",
      year: "1998",
      specLink: "https://www.zigwheels.com/newcars/Maruti-Suzuki/zen",
      imageLink: "https://www.zigwheels.com/newcars/Maruti-Suzuki/zen"
    },
    {
      manufacturer: "Mitsubishi",
      make: "Lancer",
      year: "2000",
      specLink: "https://www.zigwheels.com/newcars/Mitsubishi/lancer",
      imageLink: "https://www.zigwheels.com/newcars/Mitsubishi/lancer"
    }
  ],

  Under2L: [
    {
      manufacturer: "Honda",
      make: "City",
      year: "1998",
      specLink: "https://www.zigwheels.com/newcars/Honda/City/specifications",
      imageLink: "https://www.zigwheels.com/newcars/Honda/City/pictures"
    },
    {
      manufacturer: "Ford",
      make: "Fiesta",
      year: "2006",
      specLink: "https://www.zigwheels.com/newcars/Ford/fiesta",
      imageLink: "https://www.zigwheels.com/newcars/Ford/fiesta/pictures"
    }
  ],

  Under3L: [
    {
      manufacturer: "Skoda",
      make: "Octavia",
      year: "2006",
      specLink:
        "https://www.zigwheels.com/newcars/Skoda/Octavia/specifications",
      imageLink: "https://www.zigwheels.com/newcars/Skoda/Octavia/pictures"
    },
    {
      manufacturer: "Maruti Suzuki",
      make: "Swift",
      year: "2007",
      specLink:
        "https://www.zigwheels.com/newcars/Maruti-Suzuki/Swift/specifications",
      imageLink:
        "https://www.zigwheels.com/newcars/Maruti-Suzuki/Swift/pictures"
    }
  ],

  Under4L: [
    {
      manufacturer: "Ford",
      make: "Figo",
      year: "2011",
      specLink: "https://www.zigwheels.com/newcars/Ford/Figo/specifications",
      imageLink: "https://www.zigwheels.com/newcars/Ford/Figo/pictures"
    },
    {
      manufacturer: "Maruti Suzuki",
      make: "Ritz",
      year: "2013",
      specLink: "https://www.zigwheels.com/newcars/Maruti-Suzuki/ritz",
      imageLink: "https://www.zigwheels.com/newcars/Maruti-Suzuki/ritz/pictures"
    }
  ],

  Above4L: [
    {
      manufacturer: "Volkswagen",
      make: "Polo GT",
      year: "2016",
      specLink:
        "https://www.zigwheels.com/newcars/Volkswagen/polo/specifications",
      imageLink: "https://www.zigwheels.com/newcars/Volkswagen/polo/pictures"
    },
    {
      manufacturer: "Chevrolet",
      make: "Cruze",
      year: "2012",
      specLink: "https://www.zigwheels.com/newcars/Chevrolet/cruze",
      imageLink: "https://www.zigwheels.com/newcars/Chevrolet/cruze/pictures"
    }
  ]
};

var selectBudget = Object.keys(carDB);

export default function App() {
  const [selectedBudget, setBudget] = useState("Above4L");
  function budgetClickHandler(range) {
    setBudget(range);
  }

  return (
    <div className="App">
      <h1>RevHeads</h1>
      <sub style={{ display: "block", marginTop: "0px", marginBottom: "1rem" }}>
        Set the roads on fire, not your wallet.
      </sub>
      <h2>Find a used car for the enthusiast in you within your budget.</h2>
      <div style={{ fontSize: "1rem", margin: "0.5rem" }}>
        Select your budget to see my top picks
      </div>
      {selectBudget.map((range) => {
        return (
          <span
            key={range}
            style={{ cursor: "pointer" }}
            onClick={() => budgetClickHandler(range)}
            className="spanList"
          >
            {range}
          </span>
        );
      })}
      <ul className="container">
        {carDB[selectedBudget].map((cars) => (
          <li key={cars.make} className="container carList">
            <div>Manufacturer: {cars.manufacturer}</div>
            <div>Make: {cars.make}</div>
            {/* <div>Year: {cars.year}</div> */}
            <a target="_blank" className="link carList" href={cars.specLink}>
              Specifications
            </a>
            <a target="_blank" className="link carList" href={cars.imageLink}>
              Images
            </a>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
