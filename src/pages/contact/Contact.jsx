import React from 'react'
import styles from './contact.module.css'
import Innerbanner from '@/container/InerBanner/banner'
import { motion, useScroll } from "framer-motion"
import NewsLetterSection from '@/components/NewsLetterSection/newslettersection';
import ContactPageFormSec from '@/components/ContactPageFormSec/contactpageform'

const Contact = () => {
    const { scrollYProgress } = useScroll();
    return ( 
        <div className={styles['Contact-page']}>
            <motion.div className={styles['progress-bar']} style={{ scaleX: scrollYProgress }} /> 
            <Innerbanner BgImageURL='./images/Bannercontact.png' BannerHeading='Contact Us' />
            <ContactPageFormSec SubHeading='Get in' Heading='touch with us' />
     <NewsLetterSection SubHeading="Get The Latest updates on new" Heading="destinations &
itineraries" />
        </div>
     );
}
 
export default Contact;