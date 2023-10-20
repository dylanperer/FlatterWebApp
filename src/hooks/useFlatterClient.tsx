import {
   BadRequestResponse,
   ErrorResponse,
} from "../api/flatter-api/FlatterClient";
import { AppRoutes } from "../common/navman";
import { errors } from "../common/errors";

type OnStates<T> = {
   onError?: (error: string) => void;
   onSuccess?: (response: T) => void;
   onNotFound?: () => void;
};
export const useFlatterClient = async <T,>(
   request: Promise<T>,
   onStates: OnStates<T>
) => {
   try {
      const response = await request;
      onStates.onSuccess && onStates.onSuccess(response);
   } catch (e: any) {
      const error = e as ErrorResponse;
      const badRequest = e as BadRequestResponse;

      if (badRequest.message) {
         onStates.onError && onStates.onError(badRequest.message);
      } else if (error.status === 404) {
         onStates.onNotFound && onStates.onNotFound();
      } else {
         onStates.onError && onStates.onError(errors.generic);
      }
   }
};
