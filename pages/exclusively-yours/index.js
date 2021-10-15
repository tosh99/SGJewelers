import styles from './index.module.scss'
import {Fragment, useEffect, useState} from "react";
import {motion} from "framer-motion"
import {InView} from 'react-intersection-observer';
import Footer from "../../shared/components/footer/footer";
import Head from "next/head";
import BookNow from "../../shared/components/book-now";
import PageHeader from "../../shared/components/page-header/page-header";
import Button from "../../shared/components/button";

import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/core';
import {Swiper, SwiperSlide} from 'swiper/react';
import NextBack from "../../shared/components/nextback/nextback";


SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
export default function ExclusivelyYours() {
    const places = [1, 2, 3, 4]

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
                                <h1>I am looking for <br/> jewellery TO <br/> compliment my mood of <br/> FEELING</h1>
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
                        <motion.div className={"outer " + styles.magniOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.magni}>
                                <div className={styles.magniHeader}>
                                    <h1>feeling magnificent</h1>
                                    <p>
                                        Explore the poetic fusion of age-old traditions and contemporary renditions. Our jewellery, your way.
                                    </p>
                                </div>
                                <div className={styles.magniContent}>
                                    <div className={styles.item}>
                                        <div className={styles.itemAbout}>
                                            <h3>Briolette Jhumkas</h3>
                                            <Swiper
                                                spaceBetween={130}
                                                slidesPerView={'1'}>
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
                                            <div className={styles.navigation}>
                                                <NextBack/>
                                            </div>
                                        </div>
                                        <div className={styles.itemAction}>
                                            <Button title={'See Info'}/>
                                        </div>
                                    </div>

                                    <div className={styles.item + ' ' + styles.itemReversed}>
                                        <div className={styles.itemAbout}>

                                            <Swiper
                                                spaceBetween={130}
                                                slidesPerView={'1'}>
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
                                            <div className={styles.navigation}>
                                                <NextBack/>
                                            </div>
                                        </div>
                                        <div className={styles.itemAction}>
                                            <h3>Briolette Jhumkas</h3>
                                            <Button title={'See Info'}/>
                                        </div>
                                    </div>


                                    <div className={styles.item + ' ' + styles.itemFull}>
                                        <div className={styles.itemAbout}>
                                            <Swiper
                                                spaceBetween={130}
                                                slidesPerView={'1'}>
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
                                            <div className={styles.navigation}>
                                                 <h3>Briolette Jhumkas</h3>
                                                <NextBack/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
