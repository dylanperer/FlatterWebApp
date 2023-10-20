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
   SignUpRequest,
} from "../../api/flatter-api/FlatterClient";
import { createSignal } from "solid-js";
import { Error } from "../../components/Error";
import { FlatterApiSettings } from "../../api/flatter-api/FlatterApiSettings";
import { errors } from "../../common/errors";
import { useFlatterClient } from "../../hooks/useFlatterClient";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { boolean, string } from "yup";
import { useFormValidator } from "../../hooks/useFormValidator";

interface Form extends SignUpRequest {
   agreeToTerms?: boolean;
}

const SignUp = () => {
   const {
      auth: [, setAuth],
   } = useGlobalContext();

   const navigate = useNavigate();

   const location = useLocation();

   const client = new AuthenticationClient(FlatterApiSettings);

   const schema: Form = {
      //@ts-ignore
      email: location.state?.email || "",
      password: "",
      agreeToTerms: false,
   };

   const [error, setError] = createSignal<string | null>(null);

   const handleSignup = async (): Promise<boolean> => {
      setError(null);

      await useFormValidator(
         {
            agreeToTerms: boolean().isTrue(errors.signIn.InvalidTerms),
            password: string()
               .required(errors.signIn.PasswordRequired)
               .min(8, errors.signIn.InvalidPasswordLength),
            email: string().required(errors.signIn.EmailRequired),
         },
         schema,
         (error) => setError(error)
      );

      if (!error()) {
         const request: SignUpRequest = {
            ...schema,
         };
         await useFlatterClient(
            client.signUp(request),
            (error) => {
               setError(error);
            },
            (response) => {
               setAuth({
                  accessToken: response.token,
                  refreshToken: response.refreshToken,
               });
               navigate(
                  `${AppRoutes.CreateProfile}/${AppRoutes.CreateProfileGender}`
               );
            }
         );
      }

      return false;
   };

   return (
      <section class="animate-fade-in-slow mx-auto flex h-full flex-col gap-8 overflow-y-scroll px-4 no-scrollbar md:w-[400px]">
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
               //@ts-ignore
               value={location.state?.email}
               onChange={(e) => (schema.email = e.target.value.trim())}
            />
            <InputField
               placeholder="password"
               leftIcon={LockIcon}
               type="password"
               onChange={(e) => (schema.password = e.target.value.trim())}
            />
            <Error errorMessage={error()} />
            <Checkbox
               class="self-end"
               label="Agree to terms & conditions"
               onChange={(isChecked) => (schema.agreeToTerms = isChecked)}
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
               onClick={() =>
                  navigate(AppRoutes.SignIn, { state: { email: schema.email } })
               }
            />
         </div>
      </section>
   );
};

export default SignUp;
