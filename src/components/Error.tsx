import { Component } from "solid-js";
import { IComponent } from "../common";
import { twMerge } from "tailwind-merge";

interface IError extends IComponent {
   errorMessage: string | null;
}

export const Error: Component<IError> = (props) => {
   return (
      <span
         class={twMerge(
            "self-center text-center text-sm  font-semibold select-none",
            props.errorMessage ? "animate-fade-in text-red-300" : "text-transparent"
         )}
      >
         {props.errorMessage || "__"}
      </span>
   );
};
