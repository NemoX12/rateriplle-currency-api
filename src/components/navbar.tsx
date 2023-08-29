import React from "react";
import "../css/navbar.css";

export const NavBar = (props: any) => {
  return (
    <div className="navbar">
      <a href="https://github.com/NemoX12" className="h2">
        RateRipple
      </a>
      <div className="currency">
        <p>
          CAD: <u>{props.cad}</u>
        </p>
        <p style={{ marginLeft: "0.7rem" }}>
          EUR: <u>{props.eur}</u>
        </p>
        <p style={{ marginLeft: "0.7rem" }}>
          GBP: <u>{props.gbp}</u>
        </p>
      </div>
    </div>
  );
};
