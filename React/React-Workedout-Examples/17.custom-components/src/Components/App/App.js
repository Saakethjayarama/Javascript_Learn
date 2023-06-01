import React, { useState } from "react";
import { ConfirmCC, ConfirmFC } from "../Confirm";
import { DateCC, DateFC } from "../Date";
import { NavigationCC, NavigationFC } from "../Navigation";
import { ProductCC, ProductFC } from "../Product";
import image from "../../assets/image.png";
import { HeaderCC, HeaderFC } from "../Header";
import logo from "../../assets/logo.png";
import Landing from "../Landing";
import { FooterCC, FooterFC } from "../Footer";

function App() {
  const [value, onChange] = useState("");
  return (
    <div className="App">
      {/* Navigation Component */}
      {/* <NavigationCC /> */}
      {/* <NavigationFC /> */}

      {/* Confirm component */}
      {/* <ConfirmCC />
      <ConfirmFC /> */}
      {/* Date Component */}
      {/* <DateFC day={12} month={8} year={2000} format={"dd-mm-yyyy"} /> */}
      {/* <DateCC day={12} month={8} year={2000} format={"dd-mm-yyyy"} /> */}
      {/* Product Component */}
      <ProductCC
        image={image}
        description={"This is a very good description"}
        price={20}
      />
      <ProductCC
        image={image}
        description={"This is a very good description"}
        price={20}
      />
      <ProductCC
        image={image}
        description={"This is a very good description"}
        price={20}
      />
      <ProductCC
        image={image}
        description={"This is a very good description"}
        price={20}
      />
      <ProductCC
        image={image}
        description={"This is a very good description"}
        price={20}
      />
      <ProductCC
        image={image}
        description={"This is a very good description"}
        price={20}
      />
      <ProductCC
        image={image}
        description={"This is a very good description"}
        price={20}
      />
      <ProductCC
        image={image}
        description={"This is a very good description"}
        price={20}
      />
      {/* Header Component */}
      {/* <HeaderCC logo={logo} items={["Home", "About", "Contact"]} /> */}
      {/* <HeaderFC logo={logo} items={["Homes", "Abouts", "Contacts"]} /> */}
      {/* Footer Component */}
      {/* <FooterCC content={<h4>Copyright &reg;</h4>} /> */}
      {/* <FooterFC content={<h4>Copyright &reg;</h4>} /> */}
      {/* Landing Component */}
      {/* <Landing /> */}
    </div>
  );
}

export default App;
