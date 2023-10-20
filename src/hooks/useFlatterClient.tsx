import { BadRequestResponse } from "../api/flatter-api/FlatterClient";
import { AppRoutes } from "../common/navman";
import { errors } from "../common/errors";

export const useFlatterClient = async  <T,>(
   request: Promise<T>,
   onError: (error: string) => void,
   onSuccess: (response: T) => void
) => {
   try {
      const response = await request;
      const error = response as BadRequestResponse;

      if (error.message) {
         onError(error.message);
      } else {
         onSuccess(response);
      }
   } catch(e) {
      console.log(e);
      onError(errors.generic);
   }
};
