import { Component, createSignal, For, JSX } from "solid-js";
import { IComponent } from "../common";
import { ClickableOpacity } from "./ClickableOpacity";
import { TouchableOpacity } from "./TouchableOpacity";
import { twMerge } from "tailwind-merge";
import { useGlobalContext } from "../contexts/GlobalContext";
import {ReactNativeConsoleLog} from "../api/react-native/ReactNativeClient";

export interface IRadioButtonItem {
   id: number;
   value: string;
   element: JSX.Element;
}

interface IRadioButton extends IComponent {
   name: string;
   items?: IRadioButtonItem[];
   onChange: (selected: IRadioButtonItem) => void;
}

export const RadioButtonGroup: Component<IRadioButton> = ({
   items = [],
   ...props
}) => {
   const {
      bottomDrawerSnapIndex: [currentIndex],
   } = useGlobalContext();

   const [active, setActive] = createSignal<number>(0);

   const handActive = (index: number) => {
      setActive(index);
      props.onChange(items[index]);
   };

   ReactNativeConsoleLog('@> test');
   return (
      <>
         <p>{currentIndex()}</p>
         <div
            class={twMerge(props.class, "overflow-y-scroll")}
            style={{ height: `${currentIndex()}px` }}
         >
            <For each={items} fallback={<div>No items</div>}>
               {(c, i) => (
                  <ClickableOpacity class="relative mb-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-neutral-100 px-4">
                     <span class="pointer-events-none absolute right-0 mr-3 h-6 w-6 rounded-full border-2 border-slate-300" />
                     <label
                        for={i().toString()}
                        class="z-10 flex h-12 w-full cursor-pointer items-center rounded-full bg-neutral-100 font-medium"
                        onClick={() => handActive(i())}
                     >
                        {c.element}
                     </label>
                     <input
                        type="radio"
                        id={i().toString()}
                        name={props.name}
                        data-index={i()}
                        class="peer z-10 h-4 w-4 flex-shrink-0 appearance-none rounded-full checked:bg-app-accent-500"
                        onClick={() => handActive(i())}
                     />
                  </ClickableOpacity>
               )}
            </For>
         </div>
      </>
   );
};
