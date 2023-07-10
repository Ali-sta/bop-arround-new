import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Destination.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { postDesiantion } from '@/components/Destination/data';

function Destination(props) {
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedToursDays, setSelectedToursDays] = useState('');
  const router = useRouter();
  const pathName = router.pathname;

  const arrayTwo = postDesiantion.map(function (item, index) {
    return item.continent;
  });
  const arrayThree = arrayTwo.filter(
    (elem, index, arr) => index === arr.findIndex((t) => t.id === elem.id)
  );

  const arrayFour = postDesiantion.map(function (item, index) {
    return item.TourDays.toursDays;
  });
  const arrayFive = arrayFour.filter(
    (elem, index, arr) => index === arr.findIndex((t) => t === elem)
  );

  const handleChangeContinent = (value) => {
    setSelectedContinent(value);
  };

  const handleChangeToursDays = (value) => {
    setSelectedToursDays(value);
  };

  const filteredDestinations = postDesiantion.filter(
    (item) =>
      (selectedContinent === '' || item.continent.id === selectedContinent) &&
      (selectedToursDays === '' || item.TourDays.toursDays === selectedToursDays)
  );

  const handleChangePost = (e, id) => {
    e.stopPropagation();
    router.push(`${pathName}/${id}`);
  };

  return (
    <div className={styles['Destination-Filter']}>
      <Container>
        <Row>
          <Col md={12}>
            <h5>{props.SubHeading}</h5>
            <h2 className={styles['heading']}>{props.Heading}</h2>
            <div className={styles['Filter-Sec']}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="continent-dropdown"
                  className={styles['dropdown-basics']}
                >
                  {selectedContinent
                    ? arrayThree.find((row) => row.id === selectedContinent).name
                    : 'Select Continent'}
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles['Drop-menu']}>
                  {arrayThree.map((row) => (
                    <Dropdown.Item
                      key={row.id}
                      value={row.id}
                      onClick={() => handleChangeContinent(row.id)}
                      className={styles['drop-items']}
                    >
                      {row.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="tours-days-dropdown"
                  className={styles['dropdown-basics']}
                >
                  {selectedToursDays || 'Select Tours Days'}
                </Dropdown.Toggle>

                <Dropdown.Menu className={styles['Drop-menu']}>
                  {arrayFive.map((toursDays) => (
                    <Dropdown.Item
                      key={toursDays}
                      value={toursDays}
                      onClick={() => handleChangeToursDays(toursDays)} 
                      className={styles['drop-items']}
                    >
                      {toursDays}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          <Col md={12}>
            <div className={styles['Grid-Sec']}>
              {filteredDestinations.map((item, id) => (
                <div
                  key={id}
                  className={styles['Destination-Mian-Sec']}
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className={styles['Content-sec']}>
                    <div className={styles['Days-Col']}>
                      <h4>{item.TourDays.toursDays} Tours</h4>
                    </div>

                    <div className={styles['destination-col']}>
                      <a onClick={(e) => handleChangePost(e, item.id)}>
                        <h2>{item.to} / {item.from}</h2>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Destination;
