import React from 'react';
import { postDesiantion } from './data';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './destination.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Destination(props) {
  const router = useRouter();
  const pathName = router.pathname;

  const handleClickPost = (e, id) => {
    e.preventDefault();
    router.push(`/destinations/${id}`);
  };

  return (
    <div className={styles['destination-Sec']}>
      <Container>
        <Row>
          <Col md={12}>
            <h5>{props.SubHeading}</h5>
            <h1>{props.Heading}</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className={styles['Grid-Sec']}>
              {postDesiantion.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className={styles['Destination-Mian-Sec']}
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className={styles['Content-sec']}>
                    <div className={styles['Days-Col']}>
                      <h4>{item.toursDays} Tours</h4>
                    </div>

                    <div className={styles['destination-col']}>
                      <a onClick={(e) => handleClickPost(e, item.id)}>
                        <h2>{item.to} / {item.from}</h2>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={1}>
            <Link href="/about" className={styles['H-View-all']}>
              View All
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Destination;
