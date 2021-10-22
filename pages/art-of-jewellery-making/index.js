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

            {/*Tibarumal*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.tibarumalOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.tibarumal}>
                                <div className={styles.tibarumalTop}>
                                    <h1 className={'sectionTitle'}>THE LEGACY <span>of</span> <br/> TIBARUMALS JEWELLERS</h1>
                                </div>
                                <div className={styles.tibarumalContent}>
                                    <div className={styles.tibarumalLeft}>
                                        <img src={'/images/art/tibarumal-1.png'}/>
                                        <p className={'sectionSummary'}>Sanjay Gupta by Tibarumals celebrates and honours a century
                                            old tradition of opulence. Mr. Tibarumal was the preferred jeweller to the royal family
                                            of the Nizam of Hyderabad, <span>His Highness Mir Osman Ali Pasha (7th Nizam)</span>, an esteemed
                                            position that has been held strongly by Mr. Sanjay Gupta by being the notable jewellery
                                            designer in the industry today.
                                        </p>
                                        <Button title={'Read More'} theme={'blue'}/>
                                    </div>
                                    <div className={styles.tibarumalRight}>
                                        <img src={'/images/art/tibarumal-2.png'}/>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>


            {/*Generations*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.generationsOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.generations}>
                                <div className={styles.generationsTop}>
                                    <h1 className={'sectionTitle'}>Generations <span>of</span> jewellers</h1>
                                    <p className={'sectionSummary'}>The love and appreciation for the art of jewellery making was passed down to
                                        Mr. Sanjay Gupta by his forefathers. Having taken the reigns over from his
                                        father and industry stalwart, Mr. Haitram Gupta, Sanjay Gupta has paved way
                                        for designs that are one-of-a-kind and has successfully set sail into yet
                                        another glorious era for Tibarumals by setting up <span>his first flagship store -Sanjay Gupta by
                                        Tibarumals Jewellers.</span></p>
                                </div>
                                <div className={styles.generationsVid}>
                                    <video width="320" height="240" controls>
                                        <source src="movie.mp4" type="video/mp4"/>
                                    </video>
                                </div>
                                <div className={styles.generationsBottom}>
                                    <p className={'sectionSummary'}>
                                        A keen eye for gems, antiques, innate skill in jewellery design and a team of hand-picked
                                        master craftsmen are what set our jewellery apart. Imparting these values and the devotion
                                        towards the art of jewellery making to his son, Shivek Gupta who is also a jewellery designer,
                                        the next generation of jewellers are gearing to take the brand to new heights.
                                    </p>
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
