import { Component, JSX, Show, createSignal } from "solid-js";
import { ClickableOpacity } from "./ClickableOpacity";
import { TouchableOpacity } from "./TouchableOpacity";
import { twMerge } from "tailwind-merge";
import { IComponent } from "../common";
import female from "../assets/icons/female.png";
import femaleActive from "../assets/icons/femaleActive.png";
import male from "../assets/icons/male.png";
import maleActive from "../assets/icons/maleActive.png";

interface IIToggler
 extends IComponent,
  JSX.InputHTMLAttributes<HTMLInputElement> {
}

export const Toggler: Component<IIToggler> = ({
 ...props
}) => {
 const [isActive, setIsActive] = createSignal<boolean>(props.checked || false);

 return (
  <ClickableOpacity class={twMerge("", props.class)}>
   <div class="relative w-fit">
    <input
     type="checkbox"
     class="show 
            peer 
            h-[50px]
            w-[180px]
            cursor-pointer
            appearance-none
            rounded-full
            border-2
            border-slate-200
            shadow-[0px_0px_20px_-14px_#3700ff]
            "
     {...props}
     onChange={(e) => {
      setIsActive(e.target.checked);
     }}
    />
    <div
     class="pointer-events-none
                absolute
                left-[1px]
                top-0
                flex
                h-[50px]
                w-[90px]
                cursor-pointer
                items-center
                justify-center
                rounded-full
                bg-app-accent-500
                transition
                ease-in-out
                peer-checked:translate-x-[88px]"
    ></div>
    <div class="pointer-events-none absolute right-0 top-0 flex h-[50px] w-[90px] items-center justify-center">
     <Show
      when={isActive()}
      fallback={
       <img
        width={"12px"}
        height={"12px"}
        src={femaleActive}
       />
      }
     >
      <img
       src={female}
       width={"12px"}
       height={"12px"}
      />
     </Show>
    </div>
    <div class="pointer-events-none absolute left-[1px]  top-0 flex h-[50px] w-[90px] items-center justify-center rounded-full">
     <Show
      when={isActive()}
      fallback={
       <img  width={"16px"} height={"16px"} src={male} />
      }
     >
      <img
       src={maleActive}
       width={"16px"}
       height={"16px"}
      />
     </Show>
    </div>
   </div>
  </ClickableOpacity>
 );
};
