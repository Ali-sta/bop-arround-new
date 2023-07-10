import React from 'react'
import styles from './TravelerProfiles.module.scss'
import { Container , Row , Col } from 'react-bootstrap'
import { PostTravelerProfiles } from '@/components/Destination/data';


function TravelerProfiles(props) {
  return (
    <div className={styles['Traveler-Profiles']}>
        <Container>
            <Row>
                <Col md={12}>
                    <h5>{props.SubHeading}</h5>
                    <h2>{props.Heading}</h2>
                </Col>
            {PostTravelerProfiles.map((Clients, id) => {
                return(
                    <Col md={6} key={id} className={styles['Main-Col']}>
                        <div className={styles['Client-image']}  style={{ backgroundImage: `url(${Clients.img})`, }}>
                            <h4>{Clients.clientName}</h4>
                        </div>
                        <div className={styles['Reviews']}>
                            <p>
                            {Clients.clientReviwe}
                            </p>
                        
                        </div>
                    </Col>
                )
                })}
                
            </Row>
        </Container>

      
    </div>
  )
}

export default TravelerProfiles
