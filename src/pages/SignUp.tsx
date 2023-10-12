import { Show, createEffect, createSignal } from "solid-js";
import { LogoIcon, EmailIcon, LockIcon } from "../assets/icons";
import {
 InputField,
 InteractiveLabel,
 Checkbox,
 Button,
 ThirdPartyAuth,
 Svg,
} from "../components";
import { createStore } from "solid-js/store";
import { postMessageToReactNative } from "../ulits";
import { Navigate, useNavigate } from "@solidjs/router";
import { AppRoutes } from "../navman";
import { Preloader } from "../components/Preloader";
import Logo from "../assets/svg/logo2.svg";

const SignUp = () => {
 const navigate = useNavigate();
 const [formData, setFormData] = createStore({
  email: "",
  password: "",
 });

 return (
  <section class="mx-auto flex h-full animate-fade-in flex-col gap-10 overflow-y-scroll px-4 no-scrollbar md:w-[400px]">
   <Svg src={Logo} width={22} class="mx-auto flex-shrink-0" />
   <div class="flex  flex-col">
    <h1 class="text-3xl font-semibold text-slate-600">
     Sign up
    </h1>
    <h6 class="">Your new adventure begins here.</h6>
   </div>
   <ThirdPartyAuth
    class="mx-auto w-full px-12 md:w-[300px]"
    topSlot="Create your account with..."
    bottomSlot={
     <span class="self-center text-sm text-slate-400">
      {"Or, with email..."}
     </span>
    }
   />
   <div class="flex flex-col gap-10">
    <InputField
     placeholder="email"
     leftIcon={EmailIcon}
     inputMode="email"
     onChange={(e) => setFormData("email", e.target.value)}
    />
    <InputField
     placeholder="password"
     leftIcon={LockIcon}
     type="password"
     onChange={(e) => setFormData("password", e.target.value)}
    />
    <Checkbox class="self-end" label="Agree to terms & conditions" />
   </div>
   <Button
    label="Create account"
    onClick={async () => {
     navigate(`${AppRoutes.CreateProfile}/${AppRoutes.CreateProfileGender}`);
    }}
   />
   <div class="mx-auto flex">
    <span class="mr-2">{"Already have an account?"}</span>
    <InteractiveLabel
     text="Sign in "
     class="justify-start"
     onClick={() => navigate(AppRoutes.SignIn)}
    />
   </div>
  </section>
 );
};

export default SignUp;
