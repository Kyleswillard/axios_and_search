import React, { useState, useEffect } from "react";
import user from "../APIs/user";
import cats from "../APIs/cats";
import countries from "../APIs/countries";
import covid from "../APIs/covid";
import spaceX from "../APIs/spaceX";

import "./mainFunctional.styles.css";

function MainFunctional() {
  const [data, setData] = useState([]);

  useEffect(() => {
    user.getRandomUserNames().then((response) => {
      setData(response.data.results);
    });
    // spaceX.latest().then((response) => {
    //   console.log("got spaceX", response.data);
    // });
    // cats.getRandomCat().then((response) => {
    //   console.log("got random cat: ", response);
    // });
    // countries.getCountries().then((response) => {
    //   console.log("got countries", response);
    // });
    // covid.getCurrentCovidStats().then((response) => {
    //   console.log("got covid", response);
    // });
  }, []);

  return (
    <div className="App">
      <div className="search_container">
        <input className="search_bar" />
        <button type="submit" className="search_button">
          Search
        </button>
      </div>
      <div className="content_container">
        {data.map((item, index) => {
          return (
            <div className="user_card" key={index}>
              {" "}
              <h3 className="user_name">
                name: {item.name.first} {item.name.last}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainFunctional;
