import TravelProcess from '@/container/AboutUs/TravelProcess';
import styles from './about.module.scss'
import Aboutsec from '@/components/AboutSec/aboutsec'
import Innerbanner from '@/container/InerBanner/banner'
import Image from 'next/image';
import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import TravelerProfiles from '@/container/AboutUs/TravelerProfiles';
import { motion, useScroll } from "framer-motion"
import Contactsec from '@/components/ContactSec/contactsec';
import NewsLetterSection from '@/components/NewsLetterSection/newslettersection';

function About() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div className={styles['progress-bar']} style={{ scaleX: scrollYProgress }} /> 
    <Innerbanner BgImageURL='./images/Innerbanner1.png' BannerHeading='About Us'/>
    <Aboutsec />
    <div className={styles['About-Page-Direct']}>
      <Container >
        <Row>
          <Col md={7}>
            <h6>Who</h6>
            <h1>Are We</h1>
            <p>We are two couples, and long-time friends, who share a love of travel, exploration, and experiencing new things. While our adventures don&apos;t always go as smoothly as our extensive planning might suggest, we always return with stories to tell and a passion for the places that we&apos;ve been. Each of us brings a fondness for different topics which leaves us with a well rounded experience every place we go. This site was created to log our journeys together and provide us with a reminder of the memories we&apos;ve made, even after they&apos;ve begun to fade.</p>
            <p>
            We are not .full-time travelers, each of us with normal jobs that keep us busy much of the year. However, we try to use our vacation time to its maximum potential and get the most out of every trip we take. We know it is unlikely that we will get to return to every place we visit; as such, we do our best to see as much as possible the first time and leave a destination feeling satisfied. Since that doesn&apos;t always mean seeing everything, it provides us with a chance for new experiences and exciting things to look forward to if we should ever be fortunate enough to return to some of our favorite stops. 
            </p>
          </Col>
          <Col md={5}>
            <Image src={'/images/image 1.jpg'} className={["Right-Img"]} width={450} height={600} alt={"test"} />
          </Col>
        </Row>
      </Container>
    </div>
    <TravelProcess />
    <TravelerProfiles SubHeading='Traveler' Heading='Profiles' />
    <Contactsec ContactFormHeading='Contact Us'/>
     <NewsLetterSection SubHeading="Get The Latest updates on new" Heading="destinations &
itineraries" />

    </>
  )
}

export default About
