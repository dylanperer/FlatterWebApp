import { IComponent } from "../common";
import { ParentComponent, createSignal } from "solid-js";
import { ReactNativeHaptic } from "../api/react-native/ReactNativeClient";
import { ReactNativeHapticEvent } from "../api/react-native";

interface IClickableOpacity extends IComponent {
   enabled?: boolean;
   onClick?: () => void;
}

export const ClickableOpacity: ParentComponent<IClickableOpacity> = ({
   enabled = true,
   onClick = () => {},
   ...props
}) => {
   const [isTouching, setIsTouching] = createSignal<boolean>(false);

   const handleTouch = (b: boolean) => {
      if (enabled) {
         setIsTouching(b);
      }
   };

   return (
      <button
         class={`select-none
      transition-all
      duration-300
      ${enabled ? "active:opacity-50" : ""}
      ${isTouching() ? "opacity-50" : "opacity-100"}
      ${props.class}`}
         onClick={() => {
            ReactNativeHaptic(ReactNativeHapticEvent.Light);
            onClick();
         }}
         ontouchstart={() => handleTouch(true)}
         ontouchend={() => handleTouch(false)}
      >
         {props.children}
      </button>
   );
};
