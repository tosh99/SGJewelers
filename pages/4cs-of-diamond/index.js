import styles from './index.module.scss'
import {Fragment, useEffect, useState} from "react";
import {motion} from "framer-motion"
import {InView} from 'react-intersection-observer';
import Footer from "../../shared/components/footer/footer";
import Head from "next/head";
import PageHeader from "../../shared/components/page-header/page-header";
import Button from "../../shared/components/button";

import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/core';
import {Swiper, SwiperSlide} from 'swiper/react';
import NextBack from "../../shared/components/nextback/nextback";


SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
export default function CsOfDiamonds() {
    const content = [
        {
            title: 'CUT',
            content: 'An expertly cut diamond with perfectly symmetrical and aligned facets will maximise sparkle. ' +
                'This is because it reflects light internally from one mirror-like facet to another, dispersing it through its uppermost surface, ' +
                'referred to as the table. Finally, the polish gives a diamond its beautiful outside finish. <span>Graded by the GIA on a scale from Excellent to' +
                ' Poor, the cut is what fully unlocks a diamond’s potential. </span>',
        },
        {
            title: 'COLOUR',
            content: 'White diamonds occur in a variety of shades, from truly colourless, which is very rare, to warm whites with hints of yellow. After which ' +
                'they become Fancy Colours. The difference between one shade and the next is very subtle, so grading in the laboratory is performed under' +
                ' controlled lighting, placing the polished diamond upside down and using master samples for comparison and accuracy. <span> Diamonds are graded on ' +
                'a scale of 23 shades, from ice white D (colourless) to warmer Z (light colour) </span>',
        },
        {
            title: 'CLARITY',
            content: 'Natural diamonds have been created by extreme heat and pressure deep within the earth, millions, and even billions, of years ago. ' +
                'This organic process means that just about all diamonds contain internal features, for example traces of minerals or uncrystallised carbon, ' +
                'called inclusions. Clarity refers to a diamond’s natural inclusions. Diamonds with fewer of these characteristics are deemed to have a higher ' +
                'clarity, <span> ranging from the very rare FL (flawless internally and externally) to I, signalling a number of more significant inclusions ' +
                'and blemishes.</span>',
        },
        {
            title: 'CARAT',
            content: 'Carat is a measurement of weight, with one diamond carat equal to 200 milligrams. Precise measurements are ' +
                'taken to the hundredth decimal place to ensure complete accuracy.',
        },
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
                                <h1>4Cs OF  DIAMONDS</h1>
                                <header>&nbsp;</header>
                                <p>The 4Cs relate to cut, colour, clarity and carat weight - a universal language that was established by the Gemological
                                    Institute of America (GIA). The combination of these factors determines a diamond`s relative rarity and value.
                                </p>
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
                            {
                                content.map((c_item, c_index) => {
                                    return <div className={"inner " + styles.movement}>
                                        <h1 className={'sectionTitle'} dangerouslySetInnerHTML={{__html: c_item.title}}/>
                                        <p className={'sectionSummary'} dangerouslySetInnerHTML={{__html: c_item.content}}/>
                                    </div>
                                })
                            }
                        </motion.div>
                    )
                }
            </InView>

            {/*<BookNow/>*/}
            <Footer/>
        </Fragment>
    )
}
