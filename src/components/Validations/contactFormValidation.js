import * as Yup from 'yup';

const contactFormValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});

export default contactFormValidationSchema;
