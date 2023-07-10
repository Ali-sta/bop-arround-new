import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import styles from './Accordion.module.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { PostFaqsData } from '@/components/Destination/data';
import Image from 'next/image'

function FaqAccordion(props) {
  return (
    <div className={styles['Faqs-page']}>
      <Container>
        <Row>
            <Col md={7}>
                <div className={styles['Faqs-Col']}>
                    <h5>{props.Subheading}</h5>
                    <h2 className={styles.FAQMH}>{props.Heading}</h2>
                    <Accordion defaultActiveKey={0}>
                        {PostFaqsData.map((FAQS, index) =>{
                        return(
                                <Accordion.Item Key={index}>
                                    <Accordion.Header>{FAQS.Heading}</Accordion.Header>
                                    <Accordion.Body>
                                    {FAQS.Description}
                                    </Accordion.Body>
                                </Accordion.Item>
                        )
                        })}
                    </Accordion>
            </div>
            </Col>
         
        <Col md={5} className={styles['Image-Sec']}>
            <Image src={'/images/Faqsright.jpg'}  width={450} height={700} alt={"test"} />
        </Col>
        </Row>
      </Container>
        
    </div>
  );
}

export default FaqAccordion;
