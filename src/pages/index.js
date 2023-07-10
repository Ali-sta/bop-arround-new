import Aboutsec from '@/components/AboutSec/aboutsec';
import Adventure from '@/components/Adventure/adventure';
import Banner from '@/components/Banner/banner';
import Contactsec from '@/components/ContactSec/contactsec';
import Destination from '@/components/Destination/destination';
import NewsLetterSection from '@/components/NewsLetterSection/newslettersection';
import React, {Fragment} from 'react'
import styles from '../styles/Home.module.css';
//import { motion, useScroll } from "framer-motion"



function index() {

  //const { scrollYProgress } = useScroll();

  return (
    <Fragment>
      {/* <motion.div className={styles['progress-bar']} style={{ scaleX: scrollYProgress }} />   */}
      <Banner />
      <Aboutsec btn="true"/>
      <Destination SubHeading='Destinations' Heading='Where do you want to go?'/>
      <Adventure SubHeading='Explore Our Itineraries &' Heading='Adventures' />
     <Contactsec ContactFormHeading='Contact Us'/>
     <NewsLetterSection SubHeading="Get The Latest updates on new" Heading="destinations &
itineraries" />
    </Fragment>
     
  );
}

export default index
