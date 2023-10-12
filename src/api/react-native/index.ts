export enum IReactNativeAction {
 OpenBottomDrawer = "OpenBottomDrawer",
 InvokeHaptic = "InvokeHaptic",
}

export enum ReactNativeHapticEvent {
 Success = "success",
 Error = "error",
 Warning = "warning",
 Light = "light",
 Medium = "medium",
 Heavy = "Heavy",
}


export interface IReactNativeEvent {
 action: IReactNativeAction;
 message: any;
}
