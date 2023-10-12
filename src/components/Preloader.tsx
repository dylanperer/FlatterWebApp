import { Component } from "solid-js";
import { IComponent } from "../index";
import { LogoIcon } from "../assets/icons";
import logo from '../assets/svg/logo2.svg'
import { Svg } from "./Svg";

export const Preloader: Component<IComponent> = (props) => {
 return (
  <div class="-my-12 flex h-full animate-pulse items-center justify-center">
   <Svg
    class="-my-12 flex h-full items-center justify-center animate-fade-in"
    src={logo}
    width={22}
   />
  </div>
 );
};
