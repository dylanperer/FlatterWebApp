import {Component} from "solid-js";
import {IComponent} from "../common";
import {twMerge} from "tailwind-merge";

interface IError extends IComponent {
    errorMessage: string | null;
}

export const Error: Component<IError> = (props) => {
    return (

        <span
            class={twMerge("self-center text-sm font-semibold text-red-300 h-0 text-center", props.errorMessage ? 'animate-fade-in':'')}
        >
            {props.errorMessage}
         </span>
    );
};
