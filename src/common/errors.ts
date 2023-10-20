export const errors = {
   generic: "Sorry, something went wrong. Please try again.",
   signIn: {
      EmailRequired: "Email is required. Please try again.",
      PasswordRequired: "Password is required. Please try again.",
      InvalidPasswordLength: "Password must be least 8 characters. Please try again.",
      InvalidTerms:
         "Sorry, please read and accept terms and conditions to complete sign up.",
   },
};

type FaildResultResponse = {
   message: string;
};

export const mapFailedResponse = (
   response: any,
   setError: (errorRes: string) => void
) => {
   debugger
   try {
      setError(response.message);
   } catch {
      setError(errors.generic);
   }
};
