import { Component, createSignal, For, JSX, ParentComponent } from "solid-js";
import { IComponent } from "../index";
import { ClickableOpacity } from "./ClickableOpacity";

export interface IList extends IComponent {
   items: Array<IListItem>;
   onChange: (item: IListItem) => void;
}

export interface IListItem {
   id: number;
   content: JSX.Element;
   onClick?: () => void;
}

export const List: Component<IList> = (props) => {
   const onClick = (item: IListItem) => {
      if (item.onClick) {
         item.onClick();
         props.onChange(item)
      }
   };

   return (
      <ul class="bg-amber-300 group">
         <For each={props.items} fallback={<div>No items</div>}>
            {(c, i) => (
               <li data-index={c.id} onClick={() => onClick(c)}>
                  <ClickableOpacity class="w-full">
                     {c.content}
                  </ClickableOpacity>
               </li>
            )}
         </For>
      </ul>
   );
};
