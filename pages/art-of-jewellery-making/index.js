import styles from './index.module.scss'
import {Fragment, useEffect, useState} from "react";
import {motion} from "framer-motion"
import {InView} from 'react-intersection-observer';
import Footer from "../../shared/components/footer/footer";
import Head from "next/head";
import PageHeader from "../../shared/components/page-header/page-header";
import Button from "../../shared/components/button";

import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/core';


SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
export default function ExclusivelyYours() {

    const [device, set_device] = useState(2);

    const [is_legacy, set_is_legacy] = useState(false);
    const [is_inspired, set_is_inspired] = useState(false);

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
            <PageHeader title={'Art Of Jewellery Making'}/>

            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.traditionOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.tradition}>
                                <h1>Preserving <span>the</span> <br/> art <span>AND</span> craftsmanship <br/>
                                    <span>of&nbsp;</span> jewellery <span>making</span></h1>
                                <header>&nbsp;</header>
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

                                            {
                                                is_legacy && <>
                                                    <br/><br/>
                                                    Tibarumals has always been noted to preserve the age-old techniques while the designs embody modernity. This same appreciation for all things art and the skillful
                                                    craftsmanship of artisans who make jewellery is what Mr. Sanjay Gupta holds dear and practices even today. Our story is one
                                                    of <span>nostalgia and a Nizami wonder</span>, growing
                                                    with the times but never forgetting the patronage to craftsmanship of the yesteryears.
                                                </>

                                            }
                                        </p>
                                        <Button title={'Read More'} theme={'blue_small'} casing={'capitalize'} onClick={() => {
                                            set_is_legacy(true)
                                        }}/>
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
                                    <h1 className={'sectionTitle'}>Generations <span>of</span> <br/> jewellers</h1>
                                    <p className={'sectionSummary'}>The love and appreciation for the art of jewellery making was passed down to
                                        Mr. Sanjay Gupta by his forefathers. Having taken the reigns over from his
                                        father and industry stalwart, Mr. Haitram Gupta, Sanjay Gupta has paved way
                                        for designs that are one-of-a-kind and has successfully set sail into yet
                                        another glorious era for Tibarumals by setting up <span>&nbsp;his first flagship store -Sanjay Gupta by
                                        Tibarumals Jewellers.</span>
                                    </p>
                                </div>
                                <div className={styles.generationsVid}>
                                    {/*<video width="320" height="240" controls>*/}
                                    {/*    <source src="movie.mp4" type="video/mp4"/>*/}
                                    {/*</video>*/}
                                        <img src={'/images/art/generations.png'}/>
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

            {/*Inspired*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.inspiredOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.inspired}>
                                <div className={styles.inspiredLeft}>
                                    <img src={'/images/art/inspired/1.png'}/>
                                </div>
                                <div className={styles.inspiredRight}>
                                    <h1 className={'sectionTitle'}>Inspired <span>and</span> <br/> innovative designs</h1>
                                    <img src={'/images/art/inspired/2.png'}/>
                                    <div className={styles.inspiredContent}>
                                        <img src={'/images/art/inspired/1.png'}/>
                                        <div className={styles.icRight}>
                                            <p className={'sectionSummary'}>Heritage jewellery by Sanjay Gupta has always been the talk-of-the-town
                                                and is
                                                a
                                                sure head turner. We are appreciators of artisanship and enjoy the romantic renditions of yore. Hand
                                                selected
                                                by our CEO and Creative Director, Mr. Sanjay Gupta himself, these are rare gems of artistry and can
                                                only
                                                be
                                                understood by a true patron of the art of jewellery making.

                                                {
                                                    is_inspired && <>
                                                        <br/><br/>
                                                        We find opportunities in every obstacle and have paved the way for utility jewellery, changeable and even dual pieces such as ear hoops that can be worn as
                                                        bracelets. Our prêt pieces are always <span>walking the line between art and jewellery</span>. May it be classic designs or contemporary, one thing is for sure that you will
                                                        fall in love with them over and over again.
                                                    </>
                                                }
                                            </p>
                                            <Button theme={'gold_small'} title={'Read More'} casing={'capitalize'} onClick={() => {
                                                set_is_inspired(true)
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>


            {/*<BookNow/>*/}
            {/*<BackToTop/>*/}
            <Footer/>
        </Fragment>
    )
}
