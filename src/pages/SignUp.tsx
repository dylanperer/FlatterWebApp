import { LogoIcon, EmailIcon, LockIcon } from "../assets/icons";
import {
   InputField,
   InteractiveLabel,
   Checkbox,
   Button,
   ThirdPartyAuth,
   Svg,
} from "../components";
import { useNavigate } from "@solidjs/router";
import { AppRoutes } from "../navman";
import Logo from "../assets/svg/logo2.svg";
import { SignUpRequest } from "../api/flatter-api/FlatterClient";
import { createSignal } from "solid-js";
import { Error } from "../components/Error";

interface Form extends SignUpRequest {
   agreeToTerms: boolean;
}

const SignUp = () => {
   const navigate = useNavigate();

   const form: Form = {
      Email: "",
      Password: "",
      agreeToTerms: false,
   };

   const [error, setError] = createSignal<string | null>(null);

   return (
      <section class="mx-auto flex h-full animate-fade-in flex-col gap-10 overflow-y-scroll px-4 no-scrollbar md:w-[400px]">
         <Svg src={Logo} width={22} class="mx-auto flex-shrink-0" />
         <div class="flex  flex-col">
            <h1 class="text-3xl font-semibold text-slate-600">Sign up</h1>
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
               onChange={(e) => (form.Email = e.target.value)}
            />
            <InputField
               placeholder="password"
               leftIcon={LockIcon}
               type="password"
               onChange={(e) => (form.Password = e.target.value)}
            />
            <Error
               errorMessage={error()}
            />
            <Checkbox class="self-end" label="Agree to terms & conditions" />
         </div>
         <Button
            label="Create account"
            onClick={async () => {
               setError("Sorry, account with that email already exits.");
               // navigate(
               //    `${AppRoutes.CreateProfile}/${AppRoutes.CreateProfileGender}`
               // );
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
