export const delay = async (milliseconds: number): Promise<void> => {
 return new Promise((resolve) => {
  setTimeout(resolve, milliseconds);
 });
};

export const postMessageToReactNative = (obj:any) => {
 try {
  //@ts-ignore
  window.ReactNativeWebView.postMessage(JSON.stringify(obj));
 } catch (e: any) {
  console.log("postMessageToReactNative unsuccessful", e.message);
 }
};
