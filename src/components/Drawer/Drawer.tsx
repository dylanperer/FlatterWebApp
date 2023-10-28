import { Component, createEffect, createSignal, Show } from "solid-js";
import { useDrag } from "solid-gesture";
import { useDrawer } from "../../contexts/DrawerContext";
import MyComponent from "./Test";

export const Drawer: Component = () => {
   const [pos, sPos] = createSignal({ x: 0, y: 0 });

   const {
      isOpen: [isOpen, setIsOpen],
   } = useDrawer();

   const bindPos = useDrag((params) => {
      // sPos(() => ({ x: params.offset[0], y: params.offset[1] }));
      sPos({ x: params.offset[0], y: params.offset[1] });
   });

   createEffect(() => console.log("@> drawer", isOpen()));

   let ref: HTMLDivElement | null = null;

   createEffect(() => {
      if (ref) {
         ref.addEventListener("dragstart", () => {
            console.log("Div is being dragged!");
         });

         ref.addEventListener("dragend", () => {
            console.log("Dragging ended!");
         });
      }
   }, [ref]);

   return (
      <Show when={true}>

         {/*<div*/}
         {/*   class="animate-drawer-fade-in absolute z-10 flex bg-neutral-900"*/}
         {/*   style={{*/}
         {/*      width: `${window.innerWidth}px`,*/}
         {/*      height: `${window.innerHeight}px`,*/}
         {/*      top: 0,*/}
         {/*      left: 0,*/}
         {/*      "animation-fill-mode": "forwards",*/}
         {/*   }}*/}
         {/*   // onClick={() => setIsOpen(false)}*/}
         {/*>*/}
         <div
            draggable={true}
            class="absolute h-[400px] w-full self-end bg-yellow-200"
            {...bindPos()}
            style={{ top: `${pos().y}px` }}
            ref={(r) => (ref = r)}
         >
            hello
         </div>
         {/*</div>*/}
         <MyComponent/>
      </Show>
   );
};
