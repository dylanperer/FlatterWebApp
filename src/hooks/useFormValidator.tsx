import { boolean, ObjectShape, object, string } from "yup";

export const useFormValidator = async (shape: ObjectShape, schema: object, onError: (error:string)=>void) => {
    const schemaValidation = object().shape(shape);

    try {
        await schemaValidation.validate(schema);
    } catch (e:any) {
        onError(e.message);
    }
};