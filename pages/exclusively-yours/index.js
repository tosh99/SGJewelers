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
                                <h1>I am looking for jewellery TO compliment my mood of FEELING</h1>
                                <p>Having been the jewellery designers for the imperial courts of the Nizams,
                                    we have been the preferred jewellers of many noblemen, not only because of our
                                    dedication towards perfection but also because of our keen eye for design.
                                    Our precision and deliberation at every stage of jewellery making is
                                    what makes our high jewellery enviable.
                                </p>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Rare*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.rareOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.rare}>
                                <div className={styles.rareHeader}>
                                    <h1 className={'sectionTitle'}>Jewellery <br/> <span>that</span> tells a story</h1>
                                </div>
                                <div className={styles.rareContent}>
                                    <div className={styles.rcLeft}>
                                        <header>Briolette Jhumkas</header>
                                        <Swiper
                                            spaceBetween={130}
                                            slidesPerView={'1'}>
                                            {
                                                places.map((place, index) => {
                                                    return <SwiperSlide>
                                                        <div>
                                                            <img src={'/images/iconic/places/1.png'}/>
                                                        </div>
                                                    </SwiperSlide>
                                                })
                                            }
                                        </Swiper>
                                        <div className={styles.rareBottom}>
                                            <header>01/03</header>
                                            <NextBack/>
                                        </div>
                                    </div>
                                    <div className={styles.rcRight}>
                                        <Button title={'See Info'}/>
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
