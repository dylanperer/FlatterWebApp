import { Component } from "solid-js"
import { IIcon } from "."

export const LogoIcon:Component<IIcon> = ({fills=[],...props}) => {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   width={props.width || "30"}
   height={props.height || "27"}
   viewBox="0 0 30 27"
   fill="none"
   class={props.class}
  >
   <path
    d="M28.9803 12.9823L15.867 26.489L9.17922 19.6701C6.50776 16.5652 7.09937 13.0155 8.52356 11.2776L16.7849 2.75391C18.1837 1.31144 22.0303 -0.708004 26.2265 2.75391C30.4228 6.21582 30.7638 11.2407 28.9803 12.9823Z"
    fill={"#6E3FFE"}
    class={fills[0]}
   />
   <ellipse
    cx="8.91705"
    cy="8.91705"
    rx="8.91705"
    ry="8.91705"
    fill={"#E99CFC"}
    class={fills[1]}
    fill-opacity="0.75"
   />
  </svg>
 );
}
