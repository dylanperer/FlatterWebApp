// import { Component, createEffect, createSignal, Show } from "solid-js";
// import { createStore } from "solid-js/store";
// import { useDrag } from "solid-gesture";
// import { createSpring, animated } from "solid-spring";
// import { useDrawer } from "../../contexts/DrawerContext";
//
// export const Drawer: Component = () => {
//    const [pos, sPos] = createSignal({ x: 0, y: 0 });
//
//    const {
//       isOpen: [isOpen, setIsOpen],
//    } = useDrawer();
//
//    const bindPos = useDrag((params) => {
//       // sPos(() => ({ x: params.offset[0], y: params.offset[1] }));
//       sPos({ x: params.offset[0], y: params.offset[1] });
//    });
//
//    createEffect(() => console.log("@> drawer", isOpen()));
//
//    return (
//       <Show when={isOpen()}>
//          {/*<div*/}
//          {/*   style={{*/}
//          {/*      width: `${window.innerWidth}px`,*/}
//          {/*      height: `${window.innerHeight}px`,*/}
//          {/*      top: 0,*/}
//          {/*      left: 0,*/}
//          {/*      "animation-fill-mode": "forwards",*/}
//          {/*   }}*/}
//          {/*   class="animate-drawer-fade-in absolute z-10 bg-neutral-900"*/}
//          {/*   onClick={() => setIsOpen(false)}*/}
//          {/*></div>*/}
//          {/*<div class="opacity-1 z-100 bottom-0 h-[400px] w-full bg-yellow-400"></div>*/}
//
//          <div
//             class="animate-drawer-fade-in absolute z-10 flex bg-neutral-900"
//             style={{
//                width: `${window.innerWidth}px`,
//                height: `${window.innerHeight}px`,
//                top: 0,
//                left: 0,
//                "animation-fill-mode": "forwards",
//             }}
//             // onClick={() => setIsOpen(false)}
//          >
//             <div
//                class="absolute h-[50px] w-full self-end bg-yellow-200"
//                {...bindPos()}
//                style={{ top: `${pos().y}px` }}
//             >
//                hello
//             </div>
//          </div>
//       </Show>
//    );
// };
