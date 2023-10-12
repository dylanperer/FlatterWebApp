import { IReactNativeAction, IReactNativeEvent, ReactNativeHapticEvent } from ".";

const postMessage = (messages: Array<IReactNativeEvent>) => {
 try {
  //@ts-ignore
  window.ReactNativeWebView.postMessage(JSON.stringify([...messages]));
 } catch (e: any) {
  console.log("postMessageToReactNative unsuccessful", e.message);
 }
};

export const OpenBottomDrawer = (route: string) => {
 const messages: Array<IReactNativeEvent> = [
  { action: IReactNativeAction.OpenBottomDrawer, message: route },
  {
   action: IReactNativeAction.InvokeHaptic,
   message: ReactNativeHapticEvent.Light,
  },
 ];
 postMessage(messages);
};

export const InvokeHaptic = (haptic: ReactNativeHapticEvent) => {
 postMessage([{ action: IReactNativeAction.InvokeHaptic, message: haptic }]);
};