import { EmailIcon, LockIcon } from "../../assets/icons";
import {
   InputField,
   InteractiveLabel,
   Checkbox,
   Button,
   ThirdPartyAuth,
   Svg,
} from "../../components";
import { createStore } from "solid-js/store";
import { useNavigate } from "@solidjs/router";
import { AppRoutes } from "../../common/navman";
import Logo from "../../assets/svg/logo2.svg";
import {
   ReactNativeConsoleLog,
} from "../../api/react-native/ReactNativeApi";
import {
   SignInRequest,
   UtilsClient,
} from "../../api/flatter-api/FlatterClient";
import { FlatterApiSettings } from "../../api/flatter-api/FlatterApiSettings";
import {useGlobalContext} from "../../contexts/GlobalContext";

const SignIn = () => {
   const {} = useGlobalContext();
   const navigate = useNavigate();


   const handleSubmit = async () => {
      // ReactNativeConsoleLog(`1, ${request}`);

      try {
         const utilsClient = new UtilsClient(FlatterApiSettings.prod);
         const x = await utilsClient.ping();
          ReactNativeConsoleLog(`2, ${x}`);
      } catch (e) {
      }
   };

   return (
      <section class="mx-auto flex h-full animate-fade-in flex-col gap-8 overflow-y-scroll px-4 no-scrollbar md:w-[400px]">
         <Svg src={Logo} width={22} class="mx-auto flex-shrink-0" />
         <div class="flex  flex-col">
            <h1 class="text-3xl font-semibold text-slate-600">Sign in</h1>
            <h6 class="">Hello there, let's get back into it.</h6>
         </div>

         <div class="flex flex-col gap-8">
            <InputField
               placeholder="email"
               leftIcon={EmailIcon}
               inputMode="email"
               // onChange={(e) => setFormData("email", e.target.value)}
            />
            <InputField
               placeholder="password"
               leftIcon={LockIcon}
               type="password"
               // onChange={(e) => setFormData("password", e.target.value)}
            />
            <Checkbox class="self-end" label="Remember me" onChange={()=> {

            }} />
         </div>
         <Button
            label="Sign in"
            onClick={async () => {
               await handleSubmit();
            }}
         />
         <ThirdPartyAuth
            class="mx-auto w-full px-12 md:w-[300px]"
            topSlot="Or, sign with..."
         />
         <div class="mx-auto flex">
            <span class="mr-2">{"Don't have on yet?"}</span>
            <InteractiveLabel
               text="Create account"
               class="justify-start"
               onClick={() => navigate(AppRoutes.SignUp)}
            />
         </div>
      </section>
   );
};

export default SignIn;
