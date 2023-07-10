import React from 'react'
import { postAdventure } from '../Destination/data';
import { Col, Container, Row} from 'react-bootstrap';
import styles from './adventure.module.scss';
import Link from 'next/link';

function Adventure(props) {
  return (
    <div className={styles['Advneture-Main-Sec']}>
      <Container>
        <Row>
            <Col md={6}>
                <h4>{props.SubHeading}</h4>
                <h1>{props.Heading}</h1>
            </Col>
            <Col md={6} className={styles['View-all-btn']}>
                <Link href={'/'}>View All Post</Link>
            </Col>
        </Row>
        </Container>
      <div className={styles['Content-Cont']}>
        <Container >
          <Row className={styles['Content-Row']}>
                  {postAdventure.map((item, id)=>{
                      return(
                          <Col md={4} key={id}>
                          <div  className={styles['Advn-Mian-Sec']}>
                              <div style={{ backgroundImage: `url(${item.img})`, }} className={styles['advn-bg-img']}>
                                  <div className={styles['Date']}>
                                      <h4>{item.date}</h4>
                                  </div>
                              </div>
                            <div className={styles['content-box']}>
                              <h6>{item.subTitle}</h6>
                              <h2>{item.title}</h2>
                              <p>{item.excerpt}</p>
                              <Link href={'/'}>Read More</Link>
                            </div>
                          </div>
                          </Col>
                        )
                  })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Adventure
