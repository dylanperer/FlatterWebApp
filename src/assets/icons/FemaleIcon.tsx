import { Component } from "solid-js";
import { IIcon } from ".";

export const FemaleIcon: Component<IIcon> = ({ fills = [], ...props }) => {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   width="18"
   height="18"
   viewBox="0 0 10 16"
   fill="none"
  >
   <circle cx="5" cy="5" r="4.5" stroke="white" class={fills[1]} />
   <rect x="4" y="9" width="2" height="7" rx="1" fill="white" class={fills[0]} />
   <rect
    x="8"
    y="12"
    width="1"
    height="6"
    rx="0.5"
    transform="rotate(90 8 12)"
    fill="white"
    class={fills[0]}
   />
  </svg>
 );
};
