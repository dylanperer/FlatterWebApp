export enum IReactNativeAction {
 OpenBottomDrawer = "OpenBottomDrawer",
 DrawerItemSelected = 'DrawerItemSelected',
 InvokeHaptic = "InvokeHaptic",
 Log = "Log",
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
