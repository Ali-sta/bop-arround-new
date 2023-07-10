import React from 'react'
import styles from './aboutsec.module.scss';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

function Aboutsec({btn}) {
  return (
    <div className={styles['home-about-sec']}>
      <Container>
        <Row>
            <Col md={6}>
                <div className={styles['Image-col']}>
                    <Image src={'/images/image1.jpg'} className={["left-img"]} width={500} height={760} alt={"test"} />
                </div>
            </Col>
            <Col md={6}>
                <h6>Life was meant for good</h6>
                <h2>Friends and great adventures</h2>
                <p>Welcome to Bop Around Travel! We are a group of friends that love to explore the world; from the untamed backcountry to the beautiful cities that dot the globe. From the planner, to the photographer, the translator, to the hype woman, we all play a small part in making our adventures just a little bit better than they would otherwise be without one another. We look forward to a lifetime of exploring and we invite you to share in, and sometimes learn from, our experiences!</p>
                <p>For every trip we take we have a process that we embark on to ensure we maximize our time and ability to see as many things as we possibly can. That process includes building informational maps of the most visited attractions, possible day trips, and hiking trails for a given destination. Once we have narrowed our interests down from our map, sharing them both, they might allebviate even the slightest of stress to help you embrace the thrill of travel all the more!</p>
                {btn? (
                  <button>Read More</button>
                ):''}
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Aboutsec
