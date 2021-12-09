import styles from './index.module.scss'
import {Fragment, useEffect, useState} from "react";
import {motion} from "framer-motion"
import {InView} from 'react-intersection-observer';
import Footer from "../../shared/components/footer/footer";
import Head from "next/head";
import PageHeader from "../../shared/components/page-header/page-header";

import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/core';


SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
export default function ExclusivelyYours() {
    const virtual_designs = [
        {
            image: '/images/virtual/1.png'
        },
        {
            image: '/images/virtual/2.png'
        }

    ]

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
            <PageHeader title={'Discover Luxury'}/>

            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.traditionOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.tradition}>
                                <h1>THE SANJAY GUPTA <br/><span>experience</span> OF HANDCRAFTED<br/> <span>perfection</span></h1>
                                <header>&nbsp;</header>
                                <p>Sanjay gupta is built on the foundation of traditions and culture, where our specialised craftsmen and artists come
                                    together to create luxury with our skilled designers who bring their modern-age impressions. Thus, bringing you
                                    new world designs mixed with old world charm.
                                    <br/><br/>
                                    <span>Each piece is a hallmark of sheer dedication and pure craftsmanship. Come down to our store to experience it for yourself.</span>
                                </p>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Virtual Design*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.virtualOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.virtual}>
                                <div className={styles.virtualTop}>
                                    <h1 className={'sectionTitle'}>Virtual <br/> <span>design</span> Consultations</h1>
                                    <p className={'sectionSummary'}>Our client base is spread around the globe. To make it easier for you to own your
                                        exclusive Sanjay Gupta masterpiece,
                                        we also offer virtual consultations on special requests. Drop us an email
                                        at <a href="mailto: info@sanjaygupta.world"><span>info@sanjaygupta.world</span></a> to
                                        set up an appointment with the design team.
                                    </p>
                                </div>
                                <div className={styles.virtualCarousel}>
                                    <div>
                                        <img src={device === 2 ? '/images/discover-luxury/virtual/1.png' : '/images/discover-luxury/virtual/1_mobile.png'}/>
                                    </div>
                                    <div>
                                        <img src={'/images/discover-luxury/virtual/2.png'}/>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>


            {/*Boxed with Love*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.boxedOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.boxed}>
                                <div className={styles.boxedTop}>
                                    <h1 className={'sectionTitle'}>Boxed <span>with</span> love </h1>
                                    <img src={'/images/discover-luxury/boxed-love-1.png'}/>
                                </div>
                                <div className={styles.boxedBottom}>
                                    <p className={'sectionSummary'}>We believe that every touchpoint of that first look is of prime importance.
                                        Our jewellery boxes have been especially designed to add to the jewellery’s shine. They have been <span>handcrafted in
                                        India </span> and made to keep your jewellery secure so when you open the box, the first look leaves you
                                        mesmerised
                                    </p>
                                    <img src={'/images/discover-luxury/boxed-love-2.png'}/>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>


            {/*Gift Wrapping*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.giftWrappingOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.giftWrapping}>
                                <div className={styles.giftWrappingLeft}>
                                    <h1 className={'sectionTitle'}><span>Gift</span> Wrapping</h1>
                                    <img src={'/images/discover-luxury/gift-wrap-1.png'}/>
                                </div>
                                <div className={styles.giftWrappingRight}>
                                    <p className={'sectionSummary'}>We are here for all your needs and to go above and beyond to make
                                        your jewellery dreams come true. Offering Gift Wrapping services for a large custom order so that you can
                                        <span>&nbsp;elevate your gifting experience.</span>
                                    </p>
                                    <img src={'/images/discover-luxury/gift-wrap-2.png'}/>
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
