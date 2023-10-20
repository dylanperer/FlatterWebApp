import { lazy } from "solid-js";

export enum AppRoutes {
   Discover = "/",
   SignIn = "/sign-in",
   SignUp = "/sign-up",
   CreateProfile = "/create-profile",
   CreateProfileGender = "/gender",
   Drawer = "/drawer",
   GenderList = "/gender-list",
}

export const Discover = lazy(() => import("../pages/Discover"));
export const SignIn = lazy(() => import("../pages/authentication/SignIn"));
export const SignUp = lazy(() => import("../pages/authentication/SignUp"));
export const Gender = lazy(() => import("../pages/profile-creation/Gender"));
export const GenderList = lazy(() => import("../pages/content-injection/GenderList"));
