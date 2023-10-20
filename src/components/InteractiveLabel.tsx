import { Component } from "solid-js";
import { IComponent } from "../common";
import { ClickableOpacity } from "./ClickableOpacity";
import { twMerge } from "tailwind-merge";

interface IInteractiveLabel extends IComponent {
 text?: string;
 onClick?: () => void;
}

export const InteractiveLabel: Component<IInteractiveLabel> = (props) => {
 return (
  <ClickableOpacity
   class={twMerge(
    `font-medium
                text-app-accent-500`,
    props.class
   )}
   onClick={props.onClick}
  >
   {props.text}
  </ClickableOpacity>
 );
};
