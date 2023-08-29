import React, { useState } from "react";
import { Options } from "./options";
import "../../css/form.css";

export const Form = (props: any) => {
  const [currValue1, setCurrValue1] = useState("default");
  const [currValue2, setCurrValue2] = useState("default");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<number | string | null>();

  let input = Number(inputValue) * props.newCurrency?.[currValue1];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setResult(input * props.newCurrency[currValue2]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <select
          onChange={(e) => {
            setCurrValue1(e.target.value);
          }}
        >
          <Options />
        </select>{" "}
        <br />
        {currValue1 !== "default" && (
          <input
            style={{ marginTop: "5px" }}
            type="number"
            placeholder="Enter value..."
            className="val1"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        )}
        <p>To</p>
        <select
          onChange={(e) => {
            setCurrValue2(e.target.value);
          }}
        >
          <Options />
        </select>
        <p>
          Converted: {result === undefined ? "" : Math.floor(Number(result))}
        </p>
        <input type="submit" value="Convert" className="sbm" />
      </div>
    </form>
  );
};
