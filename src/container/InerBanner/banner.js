import React from 'react'
import styles from './banner.module.scss'
import { Col, Container, Row } from 'react-bootstrap';
function Innerbanner(props) {
    return (
        <div style={{backgroundImage: `url(${props.BgImageURL})`}} className={styles['Banner-Col']}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div>
                            <h2>{props.BannerHeading}</h2>
                        </div>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Innerbanner
