import React from 'react'
import styles from "./Service.module.css"
import Innerbanner from '@/container/InerBanner/banner'
import { motion, useScroll } from "framer-motion"

const Service = () => {
    const { scrollYProgress } = useScroll();
    return ( 
        <div className={styles['Serviecs_page']}>
            <motion.div className={styles['progress-bar']} style={{ scaleX: scrollYProgress }} /> 
            <Innerbanner BgImageURL='./images/Banner-faq.jpg' BannerHeading='Services' />
        </div>
     );
}
 
export default Service ;
