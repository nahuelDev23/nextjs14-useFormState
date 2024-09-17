"use client";
import React from "react";
import { getError } from "../actions/erroruse";

const GetErrorButton = () => {
  return (
    <div>
      <div>
        <form action={getError}>
          <button type="submit">Generar Error</button>
        </form>
      </div>{" "}
    </div>
  );
};

export default GetErrorButton;
