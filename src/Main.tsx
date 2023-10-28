import { type Component, Suspense } from "solid-js";

import { Route, Routes } from "@solidjs/router";
import { Preloader } from "./components/Preloader";
import { AppRoutes, GenderList, SignIn } from "./common/navman";
import { Discover, SignUp, Gender } from "./common/navman";
//@todo: only for dev mode
import "solid-devtools";
import { GlobalContextProvider } from "./contexts/GlobalContext";

const Main: Component = () => {
   return (
      <GlobalContextProvider>
            <section class="relative">
               <Routes>
                  <Route
                     path={AppRoutes.SignIn}
                     component={() => (
                        <Suspense fallback={<Preloader />}>
                           <SignIn />
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
                           <Gender />
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
                  <Route path={AppRoutes.Drawer}>
                     <Route
                        path={AppRoutes.GenderList}
                        component={() => (
                           <Suspense fallback={<Preloader />}>
                              <GenderList />
                           </Suspense>
                        )}
                     />
                  </Route>
               </Routes>
            </section>
      </GlobalContextProvider>
   );
};

export default Main;
