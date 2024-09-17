"use client";
import React from "react";
import { getError } from "../actions/erroruse";

const GetErrorButton = () => {
  return (
    <div>
      <div>
        <form action={getError}>
          <button className="bg-red-600 px-1 rounded-sm" type="submit">
            Generar Error
          </button>
        </form>
      </div>{" "}
    </div>
  );
};

export default GetErrorButton;
