import { Component } from "solid-js";
import { IComponent } from "..";
import { ClickableOpacity } from "./ClickableOpacity";
import { twMerge } from "tailwind-merge";
import appleSvg from "../assets/svg/apple.min.svg";
import facebookSvg from "../assets/svg/facebook.min.svg";
import googleSvg from "../assets/svg/google.min.svg";
import { Svg } from ".";

interface IThirdPartyAuth extends IComponent {
 topSlot?: any;
 bottomSlot?: any;
}

export const ThirdPartyAuth: Component<IThirdPartyAuth> = (props) => {
 return (
  <div class={twMerge("flex flex-col gap-8", props.class)}>
   <span class="self-center text-sm font-medium text-slate-400">
    {props.topSlot}
   </span>
   <div class="mx-auto flex w-full justify-between">
    <ClickableOpacity>
     <Svg src={googleSvg} />
    </ClickableOpacity>
    <ClickableOpacity>
     <Svg src={facebookSvg} />
    </ClickableOpacity>
    <ClickableOpacity>
     <Svg src={appleSvg} />
    </ClickableOpacity>
   </div>
   <span class="self-center  text-sm font-medium ">{props.bottomSlot}</span>
  </div>
 );
};
