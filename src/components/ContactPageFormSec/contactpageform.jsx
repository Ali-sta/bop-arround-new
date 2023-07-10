import React from 'react'
import styles from './contactpageform.module.scss'
import { Container , Row , Col } from 'react-bootstrap'
import ContactForm from '../ContactForm/contactform'
function contactpageform(props) {
  return (
    <div className={styles['Contact-Form-Page']}>
        <Container>
            <Row>
                <Col md={12}>
                    <div className={styles['heading-Sec']}>
                        <h4>{props.SubHeading}</h4>
                        <h1>{props.Heading}</h1>
                    </div>
                    <div className={styles['Form-Sec']}>
                        <ContactForm />
                    </div>
                   
                </Col>
            </Row>
        </Container>
      
    </div>
  )
}

export default contactpageform
