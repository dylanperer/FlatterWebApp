import { lazy } from "solid-js";

export enum AppRoutes {
 Discover = "/",
 SignIn = "/sign-in",
 SignUp = "/sign-up",
 CreateProfile = "/create-profile",
 CreateProfileGender = "/gender",
 Utils = "/utils",
 ContentInjector = '/content-injector'
}

export const Discover = lazy(() => import("./pages/Discover"));
export const SignIn = lazy(() => import("./pages/SignIn"));
export const SignUp = lazy(() => import("./pages/SignUp"));
export const Gender = lazy(() => import("./pages/profile-creation/Gender"));
export const ContentInjector = lazy(() => import("./pages/ContentInjector"));
