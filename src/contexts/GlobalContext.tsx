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
import {number} from "yup";

interface IGlobalContext {
   auth: Signal<{
      accessToken: string;
      refreshToken: string;
   }>;
   isRememberSession: boolean;
   isDarkMode: Accessor<boolean>;
   bottomDrawerSnapIndex: Signal<number>;
}

const GlobalContext = createContext<IGlobalContext>();

export const GlobalContextProvider: ParentComponent = (props) => {
   const [isDarkMode, setIsDarkMode] = createSignal<boolean>(false);

   const auth = createSignal<{
      accessToken: string;
      refreshToken: string;
   }>({ accessToken: "", refreshToken: "" });

   const bottomDrawerSnapIndex = createSignal<number>(0);

   window.addEventListener("message", (event) => {
      const receivedMessage = Number(event.data);

      switch (receivedMessage){
         case 0:{
            bottomDrawerSnapIndex[1](window.innerHeight * 0.46);
            break;
         }
         case 1:{
            bottomDrawerSnapIndex[1](window.innerHeight * 0.68);
            break;
         }
         case 2:{
            bottomDrawerSnapIndex[1](window.innerHeight * 0.8);
            break;
         }
      }
      //
      // if (receivedMessage === 0) {
      //    bottomDrawerSnapIndex[1](window.innerHeight * 38);
      // } else if (receivedMessage === 1) {
      //    bottomDrawerSnapIndex[1](window.innerHeight * 68);
      // } else if (receivedMessage === 2) {
      //    bottomDrawerSnapIndex[1](window.innerHeight * 80);
      // }
   });

   createEffect(() => {
      writeAuthentication(auth[0]().accessToken, auth[0]()?.refreshToken);
   });

   return (
      <GlobalContext.Provider
         value={{
            auth,
            isRememberSession: false,
            isDarkMode,
            bottomDrawerSnapIndex,
         }}
         children={props.children}
      ></GlobalContext.Provider>
   );
};

export const useGlobalContext = () => useContext(GlobalContext)!;
