import React from 'react'
import styles from './banner.module.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from "typewriter-effect";


function Banner() {

  return (
    <div className={styles.banner}>
      <Container>
        <Row>
            <Col md={6}>
                <div>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Best Travel Agency")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Agency")
                      .start();
                    }}
                  />
                    <h2>BOP AROUND TRAVEL</h2>
                    <p>satisfying Our wanderlust one experience at a time. </p>
                </div>
            </Col>
            <Col md={6}>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
