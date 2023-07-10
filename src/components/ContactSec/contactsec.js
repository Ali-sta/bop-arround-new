import React from 'react';
import { Container , Row , Col } from 'react-bootstrap'
import Image from 'next/image'
import styles from './contact.module.scss'
import ContactForm from '../ContactForm/contactform';




function Contactsec(props) {
  return (
    <>
      <Container fluid className={styles['Contact-Main-Sec']}>
        <Row>
            <Col md={3}>
                <Image src={'/images/contactsec.jpg'} width={400} height={630} alt={"test"} ></Image>
            </Col>
            <Col md={9} className={styles['Contact_From_Sec']}>
              <h2>{props.ContactFormHeading}</h2>
              <ContactForm />
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Contactsec
