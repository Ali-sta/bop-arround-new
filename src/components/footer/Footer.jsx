import styles from './Footer.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { Col, Container, Row  } from 'react-bootstrap';
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF , FaTwitter , FaInstagram , FaLinkedinIn } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";
import React, { useState, useEffect } from 'react';


function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer>
      <div className={styles['Footer-col']}>
        <Container>
          <Row>
            <Col md={2}>
              <Image src={'/logo/Vector.png'} className={["footer-Logo-img"]} width={200} height={200} alt={"test"} />
            </Col>

            <Col md={6}> 
              <div className={styles['Footer-Nav']}>
                <h1>Quick Link</h1>
                <ul className={styles['Nav-Footer-Menu']}>
                  <li><Link href={'/'}>Home</Link></li>
                  <li><Link href={'/about'}>About</Link></li>
                  <li><Link href={'/destinations'}>Destinations</Link></li>
                  <li><Link href={'/faqs'}>FAQs</Link></li>
                  <li><Link href={'/contact'}>Our Blog</Link></li>
                  <li><Link href={'/contact'}>Contact Us</Link></li>
                </ul>
              </div>
            </Col>

            <Col md={4}>
              <div className={styles['Footer-Social-icon']}>
                <h1>Contact Us</h1>
                <ul>
                  <li><FiPhoneCall /><Link href="tel:000-000-000">000-000-000</Link></li>
                  <li> 
                    <div><Link href={'https://www.facebook.com/'} target={'_blank'}><FaFacebookF /></Link></div>
                    <div><Link href={'https://twitter.com/'} target={'_blank'}><FaTwitter /></Link></div>
                    <div><Link href={'https://www.instagram.com/'} target={'_blank'}><FaInstagram /></Link></div>
                    <div><Link href={'https://www.linkedin.com/'} target={'_blank'}><FaLinkedinIn /></Link></div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles['Footer-CopyRigth-Sec']}>
        <Container>
          <Row>
            <Col md={10}>
              <p>© Copyright 2023 <Link href="/">BOP Around Travel</Link> All Rights Reserved. Designed & Developed By Dallas Web Design Company <Link href="https://www.appverticals.com/" target={'_blank'}>App Verticals</Link></p>
            </Col>
            <Col md={2}>
              {showScrollToTop && (
              <Link href="#topscroll" className="scroll-to-top" onClick={scrollToTop}> <BsArrowUp /> </Link>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer;
