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
                                <h1>Distinguished <br/><span>designs</span> that make <br/> heads <span>turn</span></h1>
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

            {/*Story*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.storyOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.story}>
                                <div className={styles.storyHeader}>
                                    <h1 className={'sectionTitle'}>Jewellery <br/> <span>that</span> tells <span>a</span> story</h1>
                                </div>
                                <div className={styles.storyTop}>
                                    <div className={styles.stLeft}>
                                        <img src={'/images/iconic/story/1.png'}/>
                                    </div>
                                    <div className={styles.stRight}>
                                        <p className={'sectionSummary'}>The design inspiration for our high jewellery collection can come
                                            from places far and wide.
                                            We are connoisseurs of art and have an inclination towards the fine jewellery periods of yore —
                                            <br/><br/>
                                            <span>Georgian, Victorina, Edwardian, Art Nouveau, Art Deco and Retro.</span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.storyBottom}>
                                    <div className={styles.sbLeft}>
                                        <Button title={'Read More'}/>
                                    </div>
                                    <div className={styles.sbRight}>
                                        <img src={'/images/iconic/story/2.png'}/>
                                    </div>
                                </div>
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
                                    <header>01/03</header>
                                    <h1 className={'sectionTitle'}>RARE <span>and</span> <br/> pRECIOUS sTONES</h1>
                                </div>
                                <div className={styles.rareTop}>
                                    <Swiper
                                        spaceBetween={130}
                                        slidesPerView={'1'}>
                                        {
                                            places.map((place, index) => {
                                                return <SwiperSlide>
                                                    <div>
                                                        <img src={'/images/iconic/rare/1.png'}/>
                                                    </div>
                                                </SwiperSlide>
                                            })
                                        }
                                    </Swiper>
                                </div>
                                <div className={styles.rareBottom}>
                                    <div className={styles.rbLeft}>
                                        <p className={'sectionSummary'}>The diamonds and gemstones used in high jewellery are distinct in nature, colour, shape, carat and clarity.
                                            Owing to their origins they are valued very highly and rare to come by in certain instances. </p>
                                        <Button title={'Read More'}/>
                                    </div>
                                    <NextBack/>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Movement*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.movementOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.movement}>
                                <div className={styles.movementLeft}>
                                    <h1 className={'sectionTitle'}>Movement <span>AND</span> <br/> Setting</h1>
                                    <div className={styles.mvLeftContent}>
                                        <p className={'sectionSummary'}>The design inspiration for our high jewellery collection can come
                                            from places far and wide.
                                            We are connoisseurs of art and have an inclination towards the fine jewellery periods of yore —
                                            <br/><br/>
                                            <span>Georgian, Victorina, Edwardian, Art Nouveau, Art Deco and Retro.</span>
                                        </p>

                                        <div className={styles.mvLeftImages}>
                                            <img src={'/images/iconic/movement/1.png'}/>
                                            <img className={styles.m2} src={'/images/iconic/movement/2.png'}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.movementRight}>
                                    <img src={'/images/iconic/movement/2.png'}/>
                                    <Button title={'Read More'} theme={'blue'}/>
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
