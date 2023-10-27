import { IReactNativeAction, IReactNativeEvent, ReactNativeHapticEvent } from ".";

const postMessage = (messages: Array<IReactNativeEvent>) => {
 try {
  //@ts-ignore
  window.ReactNativeWebView.postMessage(JSON.stringify([...messages]));
 } catch (e: any) {
  console.log("postMessageToReactNative unsuccessful", e.message);
 }
};

export const ReactNativeDrawer = (route: string) => {
 const messages: Array<IReactNativeEvent> = [
  { action: IReactNativeAction.OpenBottomDrawer, message: route },
  {
   action: IReactNativeAction.InvokeHaptic,
   message: ReactNativeHapticEvent.Light,
  },
 ];
 postMessage(messages);
};

export const ReactNativeHaptic = (haptic: ReactNativeHapticEvent) => {
 postMessage([{ action: IReactNativeAction.InvokeHaptic, message: haptic }]);
};

export const ReactNativeConsoleLog = (msg: string) => {
 postMessage([{ action: IReactNativeAction.Log, message: msg }]);
};


