import styles from './index.module.scss'
import {Fragment, useEffect, useState} from "react";
import {motion} from "framer-motion"
import {InView} from 'react-intersection-observer';
import Footer from "../shared/components/footer/footer";
import SwiperCore, {Autoplay, Controller, Navigation, Pagination} from 'swiper/core';
import Head from "next/head";
import BackToTop from "../shared/components/back-to-top";
import BookNow from "../shared/components/book-now";
import PageHeader from "../shared/components/page-header/page-header";


SwiperCore.use([Autoplay, Pagination, Navigation, Controller]);
const strip_items = [
    {
        title: 'Body',
        url: '/products#body'
    },
    {
        title: 'Hair',
        url: '/products#hair'
    },
    {
        title: 'Skincare',
        url: '/products#skincare'
    },
    {
        title: 'Supplements',
        url: '/products#supplements'
    },
    {
        title: 'Tools',
        url: '/products#tools'
    }
]

export default function Home() {
    const [current_slide, set_current_slide] = useState(0);

    const [is_menu_visible, set_is_menu_visible] = useState(false);

    const [slider, set_slider] = useState({});
    const carousel_content = [
        {
            title: 'Body',
            content: 'A range of hand-picked brands for the best of body care products that are made with clean, active ingredients and are result-driven. Taking care of your body is equally rewarding.',
            url: '/products#body'
        },
        {
            title: 'Hair',
            content: 'Give your hair care routine a bump onto the next level. Whether it is finding the right products for your hair type and concern or adding some lovely serums for that extra bounce, we’ve curated an array of products for each and every one of your needs.',
            url: '/products#hair'
        },
        {
            title: 'Skincare',
            content: 'Whether you’re a beginner or a skincare enthusiast, we have something for you all. Choose from our repertoire of curated skincare products that have acquired a cult status for their new-age formulations and are targeted towards lasting skincare benefits. A healthy glow awaits you.',
            url: '/products#skincare'
        },
        {
            title: 'Supplements',
            content: 'At Glow, we promote overall well-being for healthy skin and hair. Find supplements that come recommended for a glow that’s from within.',
            url: '/products#supplements'
        },
        {
            title: 'Tools',
            content: 'For at-home facials and upkeep, we have a range of some of the most innovative technology that will work on a deeper level for that glow from within. Prep, prime and polish your skin with these must-try tools. Starting from easy-to-use to high-tech devices, we have a variety of tools that will enhance your at home beauty regime.',
            url: '/products#tools'
        }
    ];

    useEffect(() => {
        const ids = ['banner', 'bannerText', 'SkinCarePhilosophy', 'sayHello', 'services', 'sliders', 'edit', 'visitus', 'journey']
        let id = 0;

        // window.addEventListener("wheel", function (e) { // or window.addEventListener("scroll"....
        //     if (e.wheelDelta >= 0) {
        //         if (id > 0) {
        //             if (id - 1 === 0) {
        //                 window.scrollTo(0, 0)
        //             } else {
        //                 document.getElementById(ids[id - 1]).scrollIntoView({behavior: "smooth", block: "start",});
        //             }
        //             id -= 1;
        //         }
        //
        //
        //     } else {
        //         if (id < ids.length - 1) {
        //             document.getElementById(ids[id + 1]).scrollIntoView({behavior: "smooth", block: "start",});
        //             id += 1;
        //         }
        //
        //     }
        //     console.log(id)
        // }, false);
    }, [])

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

            <InView threshold={0.25}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.traditionOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 2}}>
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

            <InView threshold={0.25}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.preservingOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 2}}>
                            <div className={"inner " + styles.preserving}>
                                <div className={styles.pLeft}>
                                    <h1>Preserving <br/> the Art</h1>
                                    <p>Our story is one of nostalgia and an imperial wonder, growing with the times but never forgetting
                                        the patronage to craftsmanship of the yesteryears. We have always had a deep devotion towards the art of jewellery making and
                                        work with artisans who have dedicated their life’s work to preserving these age-old renditions.
                                    </p>
                                </div>
                                <div className={styles.pRight}>
                                    <img src={'/images/homepage/preserving.png'}/>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>


            <InView threshold={0.25}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.distinguishedOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 2}}>
                            <div className={"inner " + styles.distinguished}>
                                <div className={styles.disTop}>
                                    <h1>Distinguished designs</h1>
                                    <p>Our story is one of nostalgia and an imperial wonder, growing with the times but never forgetting
                                        the patronage to craftsmanship of the yesteryears. We have always had a deep devotion towards the art of jewellery making and
                                        work with artisans who have dedicated their life’s work to preserving these age-old renditions.
                                    </p>
                                </div>
                                <div className={styles.disBottom}>
                                    <img src={'/images/homepage/preserving.png'}/>
                                    <img src={'/images/homepage/preserving.png'}/>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>


            <InView threshold={0.25}>
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
                            </div>
                        </motion.div>
                    )
                }
            </InView>


            <InView threshold={0.25}>
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
                                    <img src={'/images/homepage/legacy.png'}/>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>


            <InView threshold={0.25}>
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
