import { type Component, Suspense } from "solid-js";

import { Route, Routes } from "@solidjs/router";
import { Preloader } from "./components/Preloader";
import { AppRoutes } from "./navman";
import { Discover, SignIn, SignUp, Gender } from "./navman";
import ContentInjector from "./pages/ContentInjector";

const Main: Component = () => {
   return (
      <div class="container mx-auto h-full overflow-y-scroll py-5 no-scrollbar ">
         <div class="mx-auto h-full overflow-y-scroll no-scrollbar ">
            <Routes>
               <Route
                  path={AppRoutes.SignIn}
                  component={() => (
                     <Suspense fallback={<Preloader />}>
                        {/*<SignIn />*/}
                        <ContentInjector />
                     </Suspense>
                  )}
               />
               <Route
                  path={AppRoutes.SignUp}
                  component={() => (
                     <Suspense fallback={<Preloader />}>
                        <SignUp />
                     </Suspense>
                  )}
               />
               <Route
                  path={AppRoutes.Discover}
                  component={() => (
                     <Suspense fallback={<Preloader />}>
                        <Discover />
                     </Suspense>
                  )}
               />
               <Route path={AppRoutes.CreateProfile}>
                  <Route
                     path={AppRoutes.CreateProfileGender}
                     component={() => (
                        <Suspense fallback={<Preloader />}>
                           <Gender />
                        </Suspense>
                     )}
                  />
               </Route>
               <Route path={AppRoutes.Utils}>
                  <Route
                     path={AppRoutes.ContentInjector}
                     component={() => (
                        <Suspense fallback={<Preloader />}>
                           <ContentInjector />
                        </Suspense>
                     )}
                  />
               </Route>
            </Routes>
         </div>
      </div>
   );
};

export default Main;
