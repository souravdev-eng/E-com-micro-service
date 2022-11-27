import * as Yup from 'yup';

export const logInSchema = Yup.object().shape({
  email: Yup.string().email('Oops! Email is invalid').required('Oops! Email is required.'),
  password: Yup.string().required('Oops! Password is required.'),
});

export const signupValidationSchema = Yup.object().shape({
  name: Yup.string().required('Oops! Name is required.'),
  email: Yup.string().email('Oops! Email is invalid').required('Oops! Email is required.'),
  password: Yup.string()
    .required('Oops! Password is required.')
    .min(6, 'Oops! Please enter at least 6 characters.'),
  passwordConform: Yup.string()
    .required('Oops! Password conform is required.')
    .oneOf([Yup.ref('password')], 'Oops! your passwords do not match...'),
});
