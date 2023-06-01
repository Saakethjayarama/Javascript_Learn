import React from "react";
import { HeaderFC } from "../Header";
import logo from "../../assets/logo.png";
import { ProductFC, ProductCC } from "../Product";
import image from "../../assets/image.png";
import { FooterFC } from "../Footer";
import "./landing.css";

function Landing() {
  return (
    <div className="Landing">
      <HeaderFC logo={logo} items={["Home", "About", "Contact"]} />
      <div className="Landing__body">
        <ProductCC
          image={image}
          description={"A Very good Product Description"}
        />
        <ProductCC
          image={image}
          description={"A Very good Product Description"}
        />
        <ProductCC
          image={image}
          description={"A Very good Product Description"}
        />
        <ProductCC
          image={image}
          description={"A Very good Product Description"}
        />
        <ProductCC
          image={image}
          description={"A Very good Product Description"}
        />
        <ProductCC
          image={image}
          description={"A Very good Product Description"}
        />
      </div>
      <FooterFC content={<h4>Copyright 2021 &copy;</h4>} />
    </div>
  );
}

export default Landing;
