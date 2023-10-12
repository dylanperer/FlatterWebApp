import { type Component, Suspense } from "solid-js";

import { Route, Routes } from "@solidjs/router";
import { Preloader } from "./components/Preloader";
import { AppRoutes } from "./navman";
import { Discover, SignIn, SignUp, Gender } from "./navman";

const Main: Component = () => {
 return (
  <div class="no-scrollbar container mx-auto h-full overflow-y-scroll py-5 ">
   <div class="no-scrollbar mx-auto h-full overflow-y-scroll ">
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
    </Routes>
   </div>
  </div>
 );
};

export default Main;
