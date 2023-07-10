import React from 'react'
import { Container ,  Row , Col } from 'react-bootstrap'
import styles from './newslettersection.module.scss'
import NewsletterForm from '../NewsLetter/newsletter'


function newslettersection(props) {
  return (
    <div className={styles['NewsLetter-Section']}>
      <Container>
        <Row>
            <Col md={6}>
                <div className={styles['Newsletter-Heading']}>
                    <h6>{props.SubHeading}</h6>
                    <h1>{props.Heading}</h1>
                </div>
            </Col>
            <Col md={6} className={styles['NewsLetter-Sec']}>
                <div>
                    <NewsletterForm />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default newslettersection
