import { errorsDefault } from './ContactForm';

export const CheckFormData = (form: EventTarget & HTMLFormElement) => {
    const data = new FormData(form);
    const newErrors = { ...errorsDefault };
    newErrors.name = data?.get("name")?.toString().length <= 0;
    const emailMatchRes = data?.get("email")?.toString().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    newErrors.email = emailMatchRes === null || emailMatchRes === undefined;
    newErrors.subject = data?.get("subject")?.toString().length <= 0;
    newErrors.message = data?.get("message")?.toString().length <= 0;
    return newErrors;
};
