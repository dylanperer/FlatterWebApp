import { Component } from "solid-js";
import { IIcon } from ".";

export const MaleIcon: Component<IIcon> = ({ fills = [], ...props }) => {
 return (
  <svg
   xmlns="http://www.w3.org/2000/svg"
   width="18"
   height="18"
   viewBox="0 0 18 18"
   fill="none"
   class={props.class}
  >
   <g clip-path="url(#clip0_146_67)">
    <path
     fill-rule="evenodd"
     clip-rule="evenodd"
     d="M6.09 15.834C7.38213 15.834 8.62134 15.3207 9.53502 14.407C10.4487 13.4933 10.962 12.2541 10.962 10.962C10.962 9.66987 10.4487 8.43064 9.53502 7.51697C8.62134 6.60329 7.38213 6.09 6.09 6.09C4.79786 6.09 3.55866 6.60329 2.64498 7.51697C1.7313 8.43064 1.218 9.66987 1.218 10.962C1.218 12.2541 1.7313 13.4933 2.64498 14.407C3.55866 15.3207 4.79786 15.834 6.09 15.834ZM6.09 17.052C4.47483 17.052 2.92582 16.4104 1.78372 15.2683C0.641625 14.1262 0 12.5772 0 10.962C0 9.34684 0.641625 7.79783 1.78372 6.65573C2.92582 5.51363 4.47483 4.87201 6.09 4.87201C7.70516 4.87201 9.25419 5.51363 10.3963 6.65573C11.5384 7.79783 12.18 9.34684 12.18 10.962C12.18 12.5772 11.5384 14.1262 10.3963 15.2683C9.25419 16.4104 7.70516 17.052 6.09 17.052ZM11.57 0H16.443C16.849 0 17.052 0.203009 17.052 0.609009C17.052 1.01501 16.849 1.21799 16.442 1.21799H11.571C11.165 1.21799 10.961 1.015 10.961 0.608002C10.961 0.203002 11.164 0 11.57 0Z"
     fill={"#1262FB"}
     class={fills[0]}
    />
    <path
     fill-rule="evenodd"
     clip-rule="evenodd"
     d="M16.442 3.05176e-05C16.849 3.05176e-05 17.052 0.203039 17.052 0.609039V5.48102C17.052 5.88702 16.849 6.09003 16.442 6.09003C16.037 6.09003 15.834 5.88704 15.834 5.48004V0.609039C15.834 0.203039 16.037 -0.000976562 16.443 -0.000976562L16.442 3.05176e-05Z"
     fill={"#1262FB"}
     class={fills[0]}
    />
    <path
     fill-rule="evenodd"
     clip-rule="evenodd"
     d="M10.536 7.37598L9.67603 6.51498L16.012 0.177979L16.874 1.03998L10.536 7.37598Z"
     fill={"#1262FB"}
     class={fills[0]}
    />
   </g>
   <defs>
    <clipPath id="clip0_146_67">
     <rect width="17.052" height="17.052" fill="white" />
    </clipPath>
   </defs>
  </svg>
 );
};
