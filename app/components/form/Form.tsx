"use client";

import React, { ReactElement } from "react";
import { createUser } from "@/app/actions/user";
import { useFormState } from "react-dom";
import SubmitButton from "../SubmitButton";

export interface InitialState {
  message: string | null;
  errors: { email: string[] | null; name: string[] | null };
}

const initialState: InitialState = {
  message: "",
  errors: {
    email: [],
    name: [],
  },
};

const Form = () => {
  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <div className="bg-[#50495f] max-w-[300px] p-4 rounded-sm">
      <p className="bg-green-300 rounded-sm mb-4 text-black px-1">
        {state.message}
      </p>
      <form action={formAction} className="flex flex-col gap-1">
        <input
          className="border border-sky-400"
          type="text"
          id="name"
          name="name"
        />
        <ul className="flex flex-col gap-2">
          {state?.errors?.name?.map(
            (item: string, index: number): ReactElement<HTMLLIElement> => (
              <li key={index} className="bg-red-800 text-red-400 px-2">
                {item}
              </li>
            ),
          )}
        </ul>
        <input
          className="border border-sky-400"
          type="text"
          id="email"
          name="email"
        />
        <ul className="flex flex-col gap-2">
          {state?.errors?.email?.map(
            (item: string, index: number): ReactElement<HTMLLIElement> => (
              <li key={index} className="bg-red-800 text-red-400 px-2">
                {item}
              </li>
            ),
          )}
        </ul>
        <SubmitButton />
      </form>
    </div>
  );
};

export default Form;
