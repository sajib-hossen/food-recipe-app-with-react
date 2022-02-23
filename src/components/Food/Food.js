import React from "react";
import axios from "axios";
import { useState } from "react";
import "./Food.css";
import logo from "../../images/logo.png";

const Food = () => {
  const [query, setQuery] = useState("");
  const [recive, setRecive] = useState([]);
  const [list, setList] = useState("alcohol-free");

  const YOUR_APP_ID = "dcd5f808";
  const YOUR_APP_KEY = "df1c7abb62072b9477b30655f3d7e946";
  const url = ` https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${list}`;

  async function getRecipe() {
    const result = await axios.get(url);
    setRecive(result.data.hits);
    console.log(result.data);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getRecipe();
  };

  return (
    <div className="food-container">
      <div className="header">
        <nav className="nav">
          <div className="logo">
            <img src={logo} alt="" className="image" />
          </div>
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="home">Sponsers</a>
            </li>
            <li>
              <a href="home">Customer</a>
            </li>
            <li>
              <a href="home">Meals</a>
            </li>
            <li>
              <a href="home">Contacts</a>
            </li>
          </ul>
          <form className="form_1" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name=""
              placeholder="Enter your name of product"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              id=""
            />
            <button type="submit" className="button_1">
              Submit
            </button>
          </form>
        </nav>

        <div className="container">
          <div className="text">
            <h1>
              <span>Fastest Delivery</span> On Eart
            </h1>
            <p>
              Feel The <span>Taste</span>
            </p>
          </div>
          <div className="print">
            {recive.map((item, index) => {
              return (
                <div key={index} className="product">
                  <img src={item["recipe"]["image"]} alt="" />
                  <p> {item["recipe"]["label"]} </p>
                  <p> calories : {item["recipe"]["calories"].toFixed(2)} </p>
                  <div className="link">
                    <a href={item["recipe"]["url"]}>Read More</a>
                    <button className="button_2"> Order </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
