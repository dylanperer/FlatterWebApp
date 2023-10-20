import { EmailIcon, LockIcon } from "../../assets/icons";
import {
   InputField,
   InteractiveLabel,
   Checkbox,
   Button,
   ThirdPartyAuth,
   Svg,
} from "../../components";
import { useLocation, useNavigate } from "@solidjs/router";
import { AppRoutes } from "../../common/navman";
import Logo from "../../assets/svg/logo2.svg";
import {
   AuthenticationClient,
   AuthenticationResponse,
   SignInRequest,
   SignUpRequest,
} from "../../api/flatter-api/FlatterClient";
import { FlatterApiSettings } from "../../api/flatter-api/FlatterApiSettings";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { string } from "yup";
import { useFormValidator } from "../../hooks/useFormValidator";
import { errors } from "../../common/errors";
import { useFlatterClient } from "../../hooks/useFlatterClient";
import { createSignal } from "solid-js";
import { Error } from "../../components/Error";

interface Form extends SignInRequest {
   isRememberMe?: boolean;
}

const SignIn = () => {
   const {
      auth: [, setAuth],
   } = useGlobalContext();
   const location = useLocation();

   const navigate = useNavigate();

   const client = new AuthenticationClient(FlatterApiSettings);

   const schema: Form = {
      //@ts-ignore
      email: location.state?.email || "",
      password: "",
      isRememberMe: false,
   };

   const [error, setError] = createSignal<string | null>(null);

   const handleSignIn = async (): Promise<boolean> => {
      setError(null);

      await useFormValidator(
         {
            password: string().required(errors.signIn.PasswordRequired),
            email: string().required(errors.signIn.EmailRequired),
         },
         schema,
         (error) => setError(error)
      );

      if (!error()) {
         const request: SignUpRequest = {
            ...schema,
         };
         await useFlatterClient<AuthenticationResponse>(
            client.signIn(request),
            {
               onError: (error) => {
                  setError(error);
               },
               onSuccess: (response) => {
                  setAuth({
                     accessToken: response.token,
                     refreshToken: response.refreshToken,
                  });
                  navigate(
                     `${AppRoutes.Discover}`
                  );
               },
            }
         );
      }

      return false;
   };

   // @ts-ignore
   return (
      <section class="animate-fade-in-slow mx-auto flex h-full flex-col gap-8 overflow-y-scroll px-4 no-scrollbar md:w-[400px]">
         <Svg src={Logo} width={22} class="mx-auto flex-shrink-0" />
         <div class="flex  flex-col">
            <h1 class="text-3xl font-semibold text-slate-600">Sign in</h1>
            <h6 class="">Hello there, let's get back into it.</h6>
         </div>
         <ThirdPartyAuth
            class="mx-auto w-full px-12 md:w-[300px]"
            topSlot="Sigin into your account with..."
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
               //@ts-ignore
               value={location.state?.email}
               onChange={(e) => (schema.email = e.target.value.trim())}
            />
            <InputField
               placeholder="password"
               leftIcon={LockIcon}
               type="password"
               onChange={(e) => (schema.password = e.target.value.trim())}
               rightLabel={<InteractiveLabel text={"Forgot?"} />}
            />
            <Error errorMessage={error()} />
            <Checkbox
               class="self-end"
               label="Remember me"
               onChange={(isChecked) => (schema.isRememberMe = isChecked)}
            />
         </div>
         <Button
            label="Sign in"
            onClick={async () => {
               await handleSignIn();
            }}
         />
         <div class="mx-auto flex">
            <span class="mr-2">{"Don't have on yet?"}</span>
            <InteractiveLabel
               text="Create account"
               class="justify-start"
               onClick={() =>
                  navigate(AppRoutes.SignUp, { state: { email: schema.email } })
               }
            />
         </div>
      </section>
   );
};

export default SignIn;
