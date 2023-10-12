import { Component } from "solid-js"
import { IIcon } from "."

export const LockIcon:Component<IIcon> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 20 20"
      class={`fill-slate-300 ${props.class}`}
    >
      <path d="M10 20C8.02219 20 6.08879 19.4135 4.4443 18.3147C2.79981 17.2159 1.51809 15.6541 0.761209 13.8268C0.00433284 11.9996 -0.193701 9.98891 0.192152 8.0491C0.578004 6.10929 1.53041 4.32746 2.92894 2.92894C4.32746 1.53041 6.10929 0.578004 8.0491 0.192152C9.98891 -0.193701 11.9996 0.00433284 13.8268 0.761209C15.6541 1.51809 17.2159 2.79981 18.3147 4.4443C19.4135 6.08879 20 8.02219 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20ZM10 18C11.5823 18 13.129 17.5308 14.4446 16.6518C15.7602 15.7727 16.7855 14.5233 17.391 13.0615C17.9965 11.5997 18.155 9.99113 17.8463 8.43928C17.5376 6.88743 16.7757 5.46197 15.6569 4.34315C14.538 3.22433 13.1126 2.4624 11.5607 2.15372C10.0089 1.84504 8.40035 2.00347 6.93854 2.60897C5.47673 3.21447 4.2273 4.23985 3.34825 5.55544C2.4692 6.87104 2 8.41775 2 10C2 12.1217 2.84286 14.1566 4.34315 15.6569C5.84344 17.1572 7.87827 18 10 18ZM9 10.792C8.4736 10.5623 8.04236 10.1583 7.77879 9.64797C7.51522 9.13767 7.43539 8.55218 7.55274 7.98994C7.67008 7.42771 7.97744 6.92302 8.42313 6.56075C8.86882 6.19848 9.42565 6.00072 10 6.00072C10.5744 6.00072 11.1312 6.19848 11.5769 6.56075C12.0226 6.92302 12.3299 7.42771 12.4473 7.98994C12.5646 8.55218 12.4848 9.13767 12.2212 9.64797C11.9576 10.1583 11.5264 10.5623 11 10.792V14H9V10.792Z" />
    </svg>
  )
}
