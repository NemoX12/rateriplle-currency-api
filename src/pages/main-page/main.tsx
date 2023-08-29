import React from "react";
import { Form } from "./form";

export const Main = (props: any) => {
  return (
    <div style={{ marginTop: "3rem" }}>
      <Form newCurrency={props.newCurrency} />
    </div>
  );
};
