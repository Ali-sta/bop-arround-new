import React from 'react'
import styles from './TravelProcess.module.scss'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { PostTravelProcess } from '@/components/Destination/data';

function TravelProcess() {
  return (
    <div className={styles['Travel-Process-Steps']}>
      <Container>
        <Row>
            <Col md={4}>
                <Image src={'/images/ourprocessimg1.jpg'} className={["Right-Img"]} width={350} height={320} alt={"test"} />
                <Image src={'/images/ourprocessimg2.jpg'} className={["Right-Img"]} width={350} height={510} alt={"test"} />
                <Image src={'/images/ourprocessimg3.jpg'} className={["Right-Img"]} width={350} height={320} alt={"test"} />
            </Col>
            <Col md={8}>
                <h6>How we</h6>
                <h2>Travel & Our Process</h2>
                <p>While the intent of this website is to log our own personal journies, we have incorporated a few tools that may be of use to others as well.</p>
                <p>
                When we are interested in a destination, we embark on a process that is the same for each locale: 
                </p>
            {PostTravelProcess.map((item, id) => {
                return(
                    <div key={item.id} className={styles['Travel-Process-Steps']}>
                        <h4>{item.Heading}</h4>   
                        <p>{item.Content}</p>
                    </div>
                    
            )
            })}
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TravelProcess
