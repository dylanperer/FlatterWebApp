import { createEffect, onCleanup } from "solid-js";
import {
   ReactNativeConsoleLog,
   ReactNativeDrawer,
} from "../api/react-native/ReactNativeClient";
import { IReactNativeEvent } from "../api/react-native";

export const useDrawerCallBack = <T,>(
   callBack: (data: T) => void,
   closeOnCallBack: boolean
) => {
   createEffect(() => {
      const handle = (event: any) => {
         try {
            const reactNativeEvent = JSON.parse(event.data) as IReactNativeEvent;
            ReactNativeConsoleLog(`@here ${reactNativeEvent.message.id}`)

            callBack(reactNativeEvent.message as T);
         } catch (e:any) {
            ReactNativeConsoleLog(`${e.message}`)

            console.error(e);
         }
      };

      window.addEventListener("message", handle);
      onCleanup(() => {

         ReactNativeConsoleLog("CreateEffect Cleanup");

      });
      // return window.removeEventListener("message", handle);
   }, []);
};
