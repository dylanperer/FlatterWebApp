import { Component, JSX } from "solid-js";
import { IComponent } from "../common";
import { TouchableOpacity } from "./TouchableOpacity";

interface IInputField
  extends IComponent,
    JSX.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: any;
  rightLabel?: any;
}

export const InputField: Component<IInputField> = ({
  leftIcon: LeftIcon,
  rightLabel,
  ...props
}) => {
  return (
   <div class={`relative ${props.class}`}>
    <TouchableOpacity
     class={`
      flex
      flex-row
      gap-2
      border-b
      border-b-slate-300
      transition-all
      duration-200 
      focus-within:border-b-app-accent-500`}
    >
     <input
      class="
        h-8
        peer
        order-1
        w-full
        placeholder-slate-300
        focus:border-transparent
        focus:outline-none
        "
      {...props}
     />
     {LeftIcon && (
      <LeftIcon class="self-center peer-focus:fill-app-accent-500" />
     )}
    </TouchableOpacity>
    {rightLabel && <span class="absolute right-0 top-[.4rem] bg-white z-10">{rightLabel}</span>}
   </div>
  );
};
