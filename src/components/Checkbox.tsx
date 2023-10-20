import { TouchableOpacity } from "./TouchableOpacity";
import { Component } from "solid-js";
import { InvokeHaptic } from "../api/react-native/ReactNativeApi";
import { ReactNativeHapticEvent } from "../api/react-native";
import { IComponent } from "../common";

interface ICheckbox extends IComponent {
   label: string;
   onChange: (isChecked?: boolean) => void;
}

export const Checkbox: Component<ICheckbox> = (props) => {
   const handleCheckboxChange = (event: any) => {
      InvokeHaptic(ReactNativeHapticEvent.Light);
      props.onChange(event.target.checked)
      console.log(event.target.checked);
   };

   return (
      <TouchableOpacity class={`max-w-max ${props.class}`}>
         <label
            class="flex
              max-w-max
              cursor-pointer
              flex-row
              gap-2
              font-normal
             "
         >
            <div class="relative flex items-center justify-center">
               <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  class="
            peer
            h-5 
            w-5 
            cursor-pointer
            appearance-none
            rounded-full
            border-2
            border-slate-300
            bg-transparent
            outline-none
          "
               />
               <span class="absolute left-0 ml-[0.25rem] h-3 w-3 transform rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-app-accent-500" />
            </div>
            {props.label}
         </label>
      </TouchableOpacity>
   );
};
