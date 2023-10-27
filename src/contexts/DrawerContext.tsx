import {
   createContext,
   createEffect,
   createSignal,
   ParentComponent,
   Signal,
   useContext,
} from "solid-js";

interface IDrawerContext {
   isOpen: Signal<boolean>;
}

const DrawerContext = createContext<IDrawerContext>();

export const DrawerContextProvider: ParentComponent = (props) => {
   const isOpen = createSignal<boolean>(false);

   createEffect(()=>console.log(isOpen[0]()))

   return (
      <DrawerContext.Provider
         value={{
            isOpen,
         }}
         children={props.children}
      ></DrawerContext.Provider>
   );
};

export const useDrawer = () => useContext(DrawerContext)!;
