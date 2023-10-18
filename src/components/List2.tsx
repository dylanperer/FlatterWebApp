import { Component, createSignal, For, JSX, ParentComponent } from "solid-js";
import { IComponent } from "../index";
import { ClickableOpacity } from "./ClickableOpacity";
import { VirtualContainer } from "@minht11/solid-virtual-container";

export interface IList extends IComponent {
   items: Array<IListItem>;
   onChange: (item: IListItem) => void;
}

export interface IListItem {
   id: number;
   content: JSX.Element;
   onClick?: () => void;
}

export const List2: Component<IList> = (props) => {
   const ListItem = (props: any) => (
      <div
         // Required for items to switch places.
         style={props.style}
         // Use CSS to set width to 100% or any other value.
         class="w-full"
         // Used for keyboard navigation and accessibility.
         tabIndex={props.tabIndex}
         role="listitem"
      >
         <div>helllo</div>
      </div>
   );

   let items: number[] = new Array<number>(1000000).fill(0);
   let scrollTargetElement!: HTMLDivElement;

   return (
      <div style={{ overflow: "auto" }} ref={scrollTargetElement}>
         <VirtualContainer
            items={items}
            scrollTarget={scrollTargetElement}
            // Define size you wish your list items to take.
            itemSize={{ height: 50 }}
         >
            {ListItem}
         </VirtualContainer>
      </div>
   );
};
