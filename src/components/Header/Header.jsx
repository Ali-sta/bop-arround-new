import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Header.module.scss"
import { Col, Container, Row } from 'react-bootstrap';
import { FaSearch , FaFacebookF , FaTwitter , FaInstagram , FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  return (
    <header className={styles["header-col"]}>
      <Container>
        <Row>
          <Col md={2}>
          <Image src={'/logo/Logo.png'} className={["Logo-img"]} width={150} height={150} alt={"test"} />
          </Col>
          <Col md={8}>
            <ul className={styles["nav-menu"]}>
              <li className={router.pathname == "/" ? `${styles["active"]}` : ""}><Link href={'/'}>Home</Link></li>
              <li className={router.pathname == "/about" ? `${styles["active"]}` : ""}><Link href={'/about'}>About</Link></li>
              <li className={router.pathname == "/destinations" ? `${styles["active"]}` : ""}><Link href={'/destinations'}>Destinations</Link></li>
              <li className={router.pathname == "/faqs" ? `${styles["active"]}` : ""}><Link href={'/faqs'}>FAQs</Link></li>
              <li className={router.pathname == "/service" ? `${styles["active"]}` : ""}><Link href={'/service'}>Services</Link></li>
              <li className={router.pathname == "/contact" ? `${styles["active"]}` : ""}><Link href={'/contact'}>Contact</Link></li>
              <li ><Link href={''}><FaSearch /></Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <ul className={styles["nav-icon"]}>
              <li><Link href={'https://www.facebook.com/'} target={'_blank'}><FaFacebookF /></Link></li>
              <li><Link href={'https://twitter.com/'} target={'_blank'}><FaTwitter /></Link></li>
              <li><Link href={'https://www.instagram.com/'} target={'_blank'}><FaInstagram /></Link></li>
              <li><Link href={'https://www.linkedin.com/'} target={'_blank'}><FaLinkedinIn /></Link></li>
            </ul>
          </Col>
        </Row>
     </Container>
    </header>
  )
}
export default Header;
