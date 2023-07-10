import React from 'react'
import styles from './faqs.module.scss'
import Innerbanner from '@/container/InerBanner/banner'
import FaqAccordion from '@/container/Faqs/Accordions/Accordion'
//import { motion, useScroll } from "framer-motion"
import Contactsec from '@/components/ContactSec/contactsec';
import NewsLetterSection from '@/components/NewsLetterSection/newslettersection';

function faqs() {
 // const { scrollYProgress } = useScroll();
  return (
    <div className={styles['Faqs-Page']}>
       {/* <motion.div className={styles['progress-bar']} style={{ scaleX: scrollYProgress }} />  */}
      <Innerbanner BgImageURL='./images/Banner-faq.jpg' BannerHeading='Faqs' />
      <FaqAccordion Subheading ='Frequently' Heading='Asked Questions' />
      <Contactsec ContactFormHeading='Contact Us'/>
     <NewsLetterSection SubHeading="Get The Latest updates on new" Heading="destinations &
itineraries" />
    </div>
  )
}

export default faqs
