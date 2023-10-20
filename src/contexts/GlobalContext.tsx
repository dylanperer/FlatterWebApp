import {
   Accessor,
   createContext,
   createEffect,
   createSignal,
   ParentComponent,
   Signal,
   useContext,
} from "solid-js";
import { writeAuthentication } from "../common/storageMan";

interface IGlobalContext {
   auth: Signal<{
      accessToken: string;
      refreshToken: string;
   }>;

   isRememberSession: boolean;

   isDarkMode: Accessor<boolean>;
}

const GlobalContext = createContext<IGlobalContext>();

export const GlobalContextProvider: ParentComponent = (props) => {
   const [isDarkMode, setIsDarkMode] = createSignal<boolean>(false);
   const auth = createSignal<{
      accessToken: string;
      refreshToken: string;
   }>({ accessToken: "", refreshToken: "" });

   createEffect(() => {
      writeAuthentication(auth[0]().accessToken, auth[0]()?.refreshToken);
   });

   return (
      <GlobalContext.Provider
         value={{
            auth,
            isRememberSession: false,
            isDarkMode,
         }}
         children={props.children}
      ></GlobalContext.Provider>
   );
};

export const useGlobalContext = () => useContext(GlobalContext)!;
