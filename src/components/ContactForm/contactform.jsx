import React from 'react'
import styles from './contactform.module.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from '../Validations/contactFormValidation';
import { Container ,  Row , Col } from 'react-bootstrap';


const ContactForm = () => {
 
  
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className={styles['Contact-Form']}>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                message: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
        <Form >
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={`Input-Box ${touched.firstName && errors.firstName ? 'error' : ''}`}>
                            <label htmlFor="firstName">First Name</label>
                            <Field type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={`Input-Box ${touched.lastName && errors.lastName ? 'error' : ''}`}>
                            <label htmlFor="lastName">Last Name</label>
                            <Field type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={`Input-Box ${touched.email && errors.email ? 'error' : ''}`}>
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" placeholder="Enter your email" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={`Input-Box ${touched.phoneNumber && errors.phoneNumber ? 'error' : ''}`}>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <Field type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" />
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={`Input-Box ${touched.message && errors.message ? 'error' : ''}`}>
                            <label htmlFor="message">Message</label>
                            <Field as="textarea" id="message" name="message" placeholder="Enter your message" />
                        </div>
                    </Col>
                    <Col md={12}>
                     <button type="submit">Submit</button>
                    </Col>
                </Row>
            </Container>
        </Form>
           )}
        </Formik>
    </div>
  );
};

export default ContactForm;

