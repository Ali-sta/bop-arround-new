import React from 'react'
import styles from './destinations.module.css'
import Innerbanner from '@/container/InerBanner/banner'
import Destination from '@/container/Destinations/Destination'
//import { motion, useScroll } from "framer-motion"
import Contactsec from '@/components/ContactSec/contactsec';
import NewsLetterSection from '@/components/NewsLetterSection/newslettersection';

function destinations() {
  //const { scrollYProgress } = useScroll();
  return (
    <div className={styles['Destination-Page']}>
        {/* <motion.div className={styles['progress-bar']} style={{ scaleX: scrollYProgress }} />  */}
        <Innerbanner BgImageURL='./images/Destinationbanner.jpg' BannerHeading='destinations' />
        <Destination SubHeading='Destinations' Heading='Where do you want to go?' Btn1='Continent' Btn2='geographic region'/>
        <Contactsec ContactFormHeading='Contact Us'/>
     <NewsLetterSection SubHeading="Get The Latest updates on new" Heading="destinations &
itineraries" />
    </div>
  )
}

export default destinations
