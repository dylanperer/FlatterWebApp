import {Component, createSignal, For, JSX} from "solid-js";
import { IComponent } from "../common";
import { ClickableOpacity } from "./ClickableOpacity";
import { TouchableOpacity } from "./TouchableOpacity";
import {twMerge} from "tailwind-merge";

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
   const [active, setActive] = createSignal<number>(0);

   const handActive = (index:number)=>{
      setActive(index);
   }

   return (
      <div class={twMerge(props.class,'overflow-y-scroll')} >
         <For each={items} fallback={<div>No items</div>}>
            {(c, i) => (
               <ClickableOpacity class="relative mb-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-neutral-100 px-4">
                  <span class="absolute w-6 h-6 right-0 mr-3 border-2 border-slate-300 rounded-full pointer-events-none"/>
                  <label
                     for={i().toString()}
                     class="w-full h-12 flex items-center rounded-full bg-neutral-100 font-medium cursor-pointer z-10"
                     onClick={()=>handActive(i())}
                  >
                     {c.element}
                  </label>
                  <input
                     type="radio"
                     id={i().toString()}
                     name={props.name}
                     data-index={i()}
                     class="peer flex-shrink-0 h-4 w-4 appearance-none rounded-full checked:bg-app-accent-500 z-10"
                     onClick={()=>handActive(i())}
                  />
               </ClickableOpacity>
            )}
         </For>
      </div>
   );
};
