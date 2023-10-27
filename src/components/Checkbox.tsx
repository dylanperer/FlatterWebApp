import { TouchableOpacity } from "./TouchableOpacity";
import { Component } from "solid-js";
import { ReactNativeHaptic } from "../api/react-native/ReactNativeClient";
import { ReactNativeHapticEvent } from "../api/react-native";
import { IComponent } from "../common";

interface ICheckbox extends IComponent {
   label: string;
   onChange: (isChecked?: boolean) => void;
}

export const Checkbox: Component<ICheckbox> = (props) => {
   const handleCheckboxChange = (event: any) => {
      ReactNativeHaptic(ReactNativeHapticEvent.Light);
      props.onChange(event.target.checked);
      console.log(event.target.checked);
   };

   return (
      <div class={props.class}>
         <TouchableOpacity class="relative mb-2 flex h-8 w-full items-center justify-center gap-2 rounded-full pl-1">
            <span class="absolute left-0  h-6 w-6 rounded-full border-2 border-slate-300 pointer-events-none" />
            <input
               type="checkbox"
               id={props.label}
               name={props.label}
               class="peer h-4 w-4 flex-shrink-0 appearance-none rounded-full checked:bg-app-accent-500"
            />
            <label
               for={props.label}
               class="w-full cursor-pointer rounded-full font-medium"
            >
               {props.label}
            </label>
         </TouchableOpacity>
      </div>
   );
};
