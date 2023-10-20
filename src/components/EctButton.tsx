import { Component } from "solid-js";
import { IComponent } from "../common";
import { ClickableOpacity } from "./ClickableOpacity";
import { twMerge } from "tailwind-merge";

interface IEtcButton extends IComponent {}

export const EctButton: Component<IEtcButton> = (props) => {
 return (
  <ClickableOpacity class={twMerge("flex flex-row gap-[2px] w-12 rounded-full h-8 justify-center items-center", props.class)}>
   <div class="h-[4px] w-[4px] rounded-full bg-slate-500" />
   <div class="h-[4px] w-[4px] rounded-full bg-slate-500" />
   <div class="h-[4px] w-[4px] rounded-full bg-slate-500" />
  </ClickableOpacity>
 );
};
