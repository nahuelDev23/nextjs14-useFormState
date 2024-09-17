"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit" className="bg-blue-400 rounded-sm">
      {pending ? "sending" : "Sign up"}
    </button>
  );
};

export default SubmitButton;
