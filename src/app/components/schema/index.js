import * as Yup from "yup";

const validRegex = new RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export const contactSchema = Yup.object({
  firstName: Yup.string("name must be at least 5 characters")
    .min(5)
    .required("plese enter your first name"),
  lastName: Yup.string("please enter your Lirst Name").required(
    "please enter your last name"
  ),
  email: Yup.string("enter a valid email")
    .matches(validRegex, "valid email is required")
    .required(),
  number: Yup.string("name must be at least 11 characters")
    .max(11)
    .required("please a valid phone number"),
  message: Yup.string("enter message").required("please enter Message"),
});
