import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react'
import validationSchema from '../Validations/newsletterValidation';
import styles from './newsletter.module.scss'
const NewsletterForm = () => {
    const handleSubmit = (values, { setSubmitting }) => {
      // Handle form submission logic here
      console.log(values);
      setSubmitting(false);
    };
  
    return (
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >

        <Form>
            <div className={styles['Form-and-btn']}>
                <div>
                    <Field type="email" id="email" name="email" placeholder="Enter your email" />
                    <ErrorMessage name="email" component="div" />
                </div>
                <button type="submit">Submit</button>
            </div>
        </Form>
      </Formik>
    );
  };
  
  export default NewsletterForm;
  