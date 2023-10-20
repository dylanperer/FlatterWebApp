import { createVirtualizer } from "@tanstack/solid-virtual";
import { Component, JSX } from "solid-js";
import { IComponent } from "../common";

interface IVirtualList extends IComponent {
   height: number;
   itemHeight: number;
   items: JSX.Element[];
}

export const VirtualList: Component<IVirtualList> = ({
   height = 100,
   ...props
}) => {
   let containerRef: HTMLDivElement;
   const rowVirtualized = createVirtualizer({
      count: props.items.length,
      getScrollElement: () => containerRef,
      estimateSize: () => props.itemHeight,
      overscan: 5,
   });

   return (
      <div
         ref={(c) => (containerRef = c)}
         class={``}
         style={{
            overflow: "auto",
             height: `${height}px`
         }}
      >
         <div
            style={{
               height: `${rowVirtualized.getTotalSize()}px`,
               width: "100%",
               position: "relative",
            }}
         >
            {rowVirtualized.getVirtualItems().map((virtualRow) => (
                // @ts-ignore
               <div key={virtualRow.index}
                  style={{
                     position: "absolute",
                     top: 0,
                     left: 0,
                     width: "100%",
                     height: `${virtualRow.size}px`,
                     transform: `translateY(${virtualRow.start}px)`,
                  }}
               >
                  {props.items[virtualRow.index]}
               </div>
            ))}
         </div>
      </div>
   );
};
