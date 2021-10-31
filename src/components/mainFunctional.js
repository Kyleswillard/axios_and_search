import React, { useState, useEffect } from "react";
import user from "../APIs/user";
import cats from "../APIs/cats";
import countries from "../APIs/countries";
import covid from "../APIs/covid";
import spaceX from "../APIs/spaceX";

import Search from './search'
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
    <Search data={data} />
    </div>
  );
}

export default MainFunctional;


