import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { postDesiantion } from '@/components/Destination/data.js';
import Innerbanner from '@/container/InerBanner/banner'
import { Col, Container, Row } from 'react-bootstrap';
import styles from './destinations.module.css';
import Image from 'next/image';
import { motion, useScroll } from "framer-motion"


function SingleBlog() {
    const { scrollYProgress } = useScroll();
    const [ postNum, setPostNum] = useState(8); // Default number of posts dislplayed

    function handleClick() {
      setPostNum(prevPostNum => prevPostNum + 4) // 3 is the number of posts you want to load per click
    }

    const router = useRouter()

    const [blogDetails, setBlogsDetails] = useState({})

    useEffect(() => {

        if (router.query?.destinationSingle) {

            setBlogsDetails(postDesiantion.find((blog) => blog.id == router.query?.destinationSingle))
        }

    }, [router.query?.destinationSingle])

    return (
        <>
         <motion.div className={styles['progress-bar']} style={{ scaleX: scrollYProgress }} /> 
        <Innerbanner BgImageURL='../images/Destinationbanner.jpg' BannerHeading='destinations' />

       
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles['Content-Box']}>
                            <h6>Destinations</h6>
                            <h1>{blogDetails?.HeadingSingle}</h1>
                            {blogDetails?.Description ? (
                             <p> 
                             {blogDetails?.Description}  
                             </p>  
                            ):""}
                           
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles['Image-col']}>
                            <Image src={blogDetails?.SingleImg}  className={["left-img"]} width={500} height={700} alt={"test"} />
                        </div>
                    </Col>
                </Row>
                </Container>
                <section className={styles['Map-Mian-Sec']}>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <div className={styles['Map-Section']}>
                                    <h1>Paris Map</h1>
                                    <Image src={blogDetails?.mapimg}  className={["map-img"]} width={1240} height={650} alt={"test"} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
             
             <Container>
                <Row>
                    <Col md={12} className={styles['destination-Sec']}>

                    <div className={styles['Grid-Sec']}>
                    {blogDetails?.gallery?.slice(0, postNum).map(item => {
                        return(
                    <div key={item.id} className={styles['Destination-Gallery-sec']} style={{ backgroundImage: `url(${item.url})`, }}>
                        <div className={styles['Content-sec']}>
                        <div className={styles['destination-col']}>
                            <h2>{item.LocationName}</h2>
                        </div>
                        
                        </div>
                    </div>
                    )
                        })}
                    
                    </div>
                    <div className={styles['load-more-btn']}>
                    <button onClick={handleClick} className={styles['Destination-Load-More']}>Load More</button>
                    </div>
                    
                    </Col>
                </Row>
             </Container>
             
           

        </>
    )
}

export default SingleBlog