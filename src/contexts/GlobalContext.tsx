import {
    Accessor,
    createContext,
    createSignal,
    ParentComponent, useContext,
} from "solid-js";

interface IGlobalContext {
   accessToken: string | null;
   refreshToken: string | null;
   isRememberSession: boolean;

   isDarkMode: Accessor<boolean>;
}

const GlobalContext = createContext<IGlobalContext>();

export const GlobalContextProvider: ParentComponent = (props) => {
   const [isDarkMode, setIsDarkMode] = createSignal<boolean>(false);

   return (
      <GlobalContext.Provider
         value={{
            accessToken: null,
            refreshToken: null,
            isRememberSession: false,
            isDarkMode,
         }}
         children={props.children}
      ></GlobalContext.Provider>
   );
};

export const useGlobalContext = () => useContext(GlobalContext)!;