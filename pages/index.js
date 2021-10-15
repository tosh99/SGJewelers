import styles from './index.module.scss'
import {Fragment, useEffect, useState} from "react";
import {motion} from "framer-motion"
import {InView} from 'react-intersection-observer';
import Footer from "../shared/components/footer/footer";
import Head from "next/head";
import BookNow from "../shared/components/book-now";
import PageHeader from "../shared/components/page-header/page-header";
import Button from "../shared/components/button";

import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/core';
import {Swiper, SwiperSlide} from 'swiper/react';


SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
export default function Home() {
    const places = [1, 2, 3, 4, 5]

    const [device, set_device] = useState(2);

    useEffect(() => {
        if (screen.width <= 648) {
            set_device(0)
        }
    }, [])

    const gotoShop = () => {

    }

    return (
        <Fragment>
            <Head>
                <title>Sanjay Gupta</title>
            </Head>
            <PageHeader/>

            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.traditionOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.tradition}>
                                <h1>Honouring a century <br/> <span>Old</span> tradition <span className={styles.lower}>of</span><br/> opulence</h1>
                                <p>Sanjay Gupta is built on the foundation laid by our predecessors in 1925 — of honouring culture and the century old
                                    tradition of opulence. Our passion for perfection and modern-age interpretation of Indian jewellery have
                                    procured us the praise and patronage of many notable connoisseurs and noblemen, alike.
                                </p>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.preservingOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.preserving}>
                                <div className={styles.pLeft}>
                                    <h1>Preserving <br/> the Art</h1>
                                    <p>Our story is one of nostalgia and an imperial wonder, growing with the times but never forgetting
                                        the patronage to craftsmanship of the yesteryears. We have always had a deep devotion towards the art of jewellery making and
                                        work with artisans who have dedicated their life’s work to preserving these age-old renditions.
                                    </p>
                                    <Button title={'Learn More'}/>
                                </div>
                                <div className={styles.pRight}>
                                    <img src={'/images/homepage/preserving.png'}/>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Distinguished*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.distinguishedOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.distinguished}>
                                <div className={styles.disTop}>
                                    <h1>Distinguished designs</h1>
                                    <p>Our story is one of nostalgia and an imperial wonder, growing with the times but never forgetting
                                        the patronage to craftsmanship of the yesteryears. We have always had a deep devotion towards the art of jewellery making and
                                        work with artisans who have dedicated their life’s work to preserving these age-old renditions.
                                    </p>
                                </div>
                                <div className={styles.disBottom}>
                                    <img src={'/images/homepage/distinguished/1.png'}/>
                                    <img src={'/images/homepage/distinguished/2.png'}/>
                                </div>
                                <Button theme={'gold_large'} title={'Discover High Jewellery'}/>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Timeless*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.timelessOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 0.8}}>
                            <div className={"inner " + styles.timeless}>
                                <div className={styles.tlLeft}>
                                    <div className={styles.tlContent}>
                                        <img className={styles.timelessone} src={'/images/homepage/timeless/1.png'}/>
                                        <div className={styles.tlCreation}>
                                            <header>Timeless creations</header>
                                            <p>Heritage jewellery by Sanjay Gupta has always been the talk-of-the-town as part of our signature collections.
                                                These timeless creations are appreciated by those who enjoy romantic renditions of yore. The versatility
                                                and immaculate precision of these designs renders them to any celebration.</p>
                                        </div>
                                    </div>

                                    <img className={styles.timelesstwo} src={'/images/homepage/timeless/2.png'}/>
                                </div>
                                <div className={styles.tlRight}>
                                    <img className={styles.timelessthree} src={'/images/homepage/timeless/3.png'}/>
                                    <img className={styles.timelessfour} src={'/images/homepage/timeless/4.png'}/>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Find What*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.findOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.find}>
                                <h1>Find <span>what</span> <br/> you are looking <br/><span>for</span></h1>
                                <p>We have devised a custom filter that helps you find jewellery that matches your mood and suits your style.
                                    Explore the poetic fusion of age-old traditions and contemporary renditions. Our jewellery, your way.
                                </p>
                                <div className={styles.sliders}>
                                    <Swiper
                                        spaceBetween={30}
                                        slidesPerView={'2'}>
                                        {
                                            places.map((place, index) => {
                                                return <SwiperSlide>
                                                    <div>
                                                        <img src={'/images/homepage/find/1.png'}/>
                                                        {place}
                                                    </div>
                                                </SwiperSlide>
                                            })
                                        }
                                    </Swiper>
                                    <div className={styles.btn}>
                                        <Button theme={'white_large'} title={'Explore Exclusively Yours'}/>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*SG Exp*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.sgExOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.sgEx}>
                                <div className={styles.sgExTop}>
                                    <h2>The Sanjay Gupta <br/> Experience</h2>
                                    <p>We have devised a custom filter that helps you find jewellery that matches your mood and suits your style.
                                        Explore the poetic fusion of age-old traditions and contemporary renditions. Our jewellery, your way.
                                    </p>
                                </div>
                                <div className={styles.sgExBottom}>
                                    <div className={styles.sgExBLeft}>
                                        <img className={styles.timelessthree} src={'/images/homepage/sgex/1.png'}/>
                                        <p>Handcrafted designs,hand-wrapped <br/> with love.
                                        </p>
                                        <Button title={'Discover Luxury'} theme={'blue'}/>
                                    </div>

                                    <div className={styles.sgExBRight}>
                                        <div className={styles.timelessthree}>
                                            <img src={'/images/homepage/sgex/2.png'}/>
                                            <header>Unbox old memories</header>
                                        </div>
                                        <div className={styles.timelessfour}>
                                            <img src={'/images/homepage/sgex/3.png'}/>
                                            <header>Design <br/> your dream piece</header>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Legacy*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.legacyOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 0.8}}>
                            <div className={"inner " + styles.legacy}>
                                <div className={styles.legTop}>
                                    <h1>Legacy <span>of&nbsp;</span> perfection <span>and</span> <br/>craftsmanship</h1>
                                    <div className={styles.legBottom}>
                                        <img src={'/images/homepage/legacy.png'}/>
                                    </div>
                                    <p>Having established the standard of impeccable jewellery in 1925, Tibarumals is the forefather of preserving
                                        craftsmanship that elevates jewellery. Sanjay Gupta being an offspring of this school of thought has carried
                                        forward this legacy with the same dedication towards perfection.
                                    </p>
                                </div>
                                <div className={styles.legBottom}>
                                    <img src={'/images/homepage/legacy.png'}/>
                                </div>
                                <Button title={'Learn More'}/>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Book*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.bookOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 0.8}}>
                            <div className={"inner " + styles.book}>
                                <div className={styles.bookTop}>
                                    <h1>Book <span>an</span> <br/> Appointment in the <br/> private <span className={styles.cap}>Salon</span></h1>
                                    <p>We have a sequestered space in the store where we conduct our design consultations with clients who
                                        request bespoke jewellery for their special occasions. The space is designed for you to have an intimate moment with the
                                        design that is going to add the glimmer to your shine.
                                    </p>
                                </div>
                                <div className={styles.bookBottom}>
                                    <Swiper
                                        spaceBetween={30}
                                        centeredSlides={true}
                                        loop={true}
                                        slidesPerView={'auto'}>
                                        {
                                            places.map((place, index) => {
                                                return <SwiperSlide>
                                                    <div>
                                                        <img src={'/images/homepage/places/1.png'}/>
                                                    </div>
                                                </SwiperSlide>
                                            })
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>


            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer"}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 0.8}}>

                        </motion.div>
                    )
                }
            </InView>

            <BookNow/>
            {/*<BackToTop/>*/}
            <Footer/>
        </Fragment>
    )
}
