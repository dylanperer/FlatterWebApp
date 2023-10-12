import { Component } from "solid-js"
import { IIcon } from "."

export const EmailIcon:Component<IIcon> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      class={`fill-slate-300 ${props.class}`}
    >
      <path d="M10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20C11.5458 19.982 13.0664 19.6054 14.442 18.9L13.557 17.1C12.4567 17.6705 11.2392 17.9785 10 18C8.41775 18 6.87103 17.5308 5.55544 16.6518C4.23984 15.7727 3.21447 14.5233 2.60896 13.0615C2.00346 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10V11C18 11.692 17.687 13 16.5 13C15.1 13 15.006 11.181 15 11V6H13V6.025C12.1393 5.36395 11.0853 5.00383 10 5C9.1676 4.99611 8.3474 5.2001 7.6138 5.59347C6.8802 5.98684 6.25641 6.55714 5.79903 7.25263C5.34166 7.94812 5.06515 8.74681 4.99461 9.57622C4.92407 10.4056 5.06172 11.2395 5.39507 12.0023C5.72843 12.765 6.24694 13.4325 6.90357 13.9441C7.5602 14.4557 8.33417 14.7953 9.15527 14.932C9.97638 15.0688 10.8186 14.9983 11.6056 14.7271C12.3926 14.4559 13.0994 13.9925 13.662 13.379C13.9395 13.8847 14.3515 14.3037 14.8524 14.5898C15.3532 14.8759 15.9235 15.0178 16.5 15C18.773 15 20 12.939 20 11V10C19.9971 7.34873 18.9426 4.80688 17.0679 2.93215C15.1931 1.05742 12.6513 0.0029116 10 0ZM10 13C9.40666 13 8.82664 12.8241 8.33329 12.4944C7.83994 12.1648 7.45542 11.6962 7.22836 11.1481C7.0013 10.5999 6.94189 9.99667 7.05764 9.41473C7.1734 8.83279 7.45912 8.29824 7.87868 7.87868C8.29824 7.45912 8.83279 7.1734 9.41473 7.05764C9.99667 6.94189 10.5999 7.0013 11.1481 7.22836C11.6962 7.45542 12.1648 7.83994 12.4944 8.33329C12.8241 8.82664 13 9.40666 13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13Z" />
    </svg>
  )
}
