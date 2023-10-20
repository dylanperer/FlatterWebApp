import { LogoIcon, EmailIcon, LockIcon } from "../../assets/icons";
import {
   InputField,
   InteractiveLabel,
   Checkbox,
   Button,
   ThirdPartyAuth,
   Svg,
} from "../../components";
import { useNavigate } from "@solidjs/router";
import { AppRoutes } from "../../common/navman";
import Logo from "../../assets/svg/logo2.svg";
import {
   AuthenticationClient,
   AuthenticationResponse,
   BadRequestResponse,
   SignUpRequest,
} from "../../api/flatter-api/FlatterClient";
import { createSignal } from "solid-js";
import { Error } from "../../components/Error";
import { FlatterApiSettings } from "../../api/flatter-api/FlatterApiSettings";
import { errors, mapFailedResponse } from "../../common/errors";
import { useFlatterClient } from "../../hooks/useFlatterClient";
import {writeAuthentication} from "../../common/storageMan";
import {useGlobalContext} from "../../contexts/GlobalContext";

interface Form extends SignUpRequest {
   AgreeToTerms?: boolean;
}

const SignUp = () => {
   const {auth}=  useGlobalContext();

   const [, setAuth ] =  auth;

   const navigate = useNavigate();

   const client = new AuthenticationClient(FlatterApiSettings);

   const form: Form = {
      email: "",
      password: "",
      AgreeToTerms: false,
   };

   const [error, setError] = createSignal<string | null>(null);


   const handleSignup = async (): Promise<boolean> => {
      let response: AuthenticationResponse;
      setError(null);
      if (!form.email) {
         setError(errors.signIn.EmailRequired);
      } else if (!form.password) {
         setError(errors.signIn.PasswordRequired);
      } else if (form.password.length < 8) {
         setError(errors.signIn.InvalidPasswordLength);
      } else if (!form.AgreeToTerms) {
         setError(errors.signIn.InvalidTerms);
      }

      if (!error()) {
         const request: SignUpRequest = {
            ...form,
         };
         await useFlatterClient(
            client.signUp(request),
            (error) => {
               setError(error);
            },
            (response) => {
               setAuth({accessToken: response.token, refreshToken: response.refreshToken})
               navigate(
                  `${AppRoutes.CreateProfile}/${AppRoutes.CreateProfileGender}`
               );
            }
         );
      }

      return false;
   };

   return (
      <section class="mx-auto flex h-full animate-fade-in flex-col gap-8 overflow-y-scroll px-4 no-scrollbar md:w-[400px]">
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
         <div class="flex flex-col gap-8">
            <InputField
               placeholder="email"
               leftIcon={EmailIcon}
               inputMode="email"
               onChange={(e) => (form.email = e.target.value.trim())}
            />
            <InputField
               placeholder="password"
               leftIcon={LockIcon}
               type="password"
               onChange={(e) => (form.password = e.target.value.trim())}
            />
            <Error errorMessage={error()} />
            <Checkbox
               class="self-end"
               label="Agree to terms & conditions"
               onChange={(isChecked) => (form.AgreeToTerms = isChecked)}
            />
         </div>
         <Button
            label="Create account"
            onClick={async () => {
               await handleSignup();
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
