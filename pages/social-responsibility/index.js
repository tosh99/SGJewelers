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
export default function SocialResponsibility() {
    const content = [
        {
            title: 'ABOUT PROJECT <br/> NANHI KALI',
            content: '<p class="sectionSummary"> Project Nanhi Kali was established in 1996 with the aim of providing quality education to underprivileged girls in India.' +
                ' Today jointly managed by the K.C Mahindra Education Trust and Naandi Foundation, the project is reaching out to over ' +
                '90,000 girls across 9 states in India covering some of the most deprived, remote, and difficult regions of the country. ' +
                'The project ensures underprivileged girls get access to quality education by providing academic support, material support ' +
                'and social support that also involves counselling parents and the community on the importance of issues related to girl ' +
                'child education and gender equality. In this way enabling the child to attend school with dignity and reducing the chances' +
                'of her dropping out. <span>www.nanhikali.org</span> </p>',
        },
        {
            title: 'FRIENDS OF  <br/>  TRIBALS SOCIETY',
            content: '<header>One Teacher School (OTS) Project - We are very much happy in extenting our support for running 5 OTS for informal education of ' +
                'Tribals Children. </header><br/> <br/> <p class="sectionSummary">In the process of running \'One Teacher school\' it was observed that some children could not attend school ' +
                'as they frequently suffered from diseases. May of these diseases was preventable and that gave an idea of introducing healthcare education, ' +
                'so that attendance in schools improves. Under healthcare education the teacher spreads awareness on health and hygiene among the villagers.' +
                ' He encourages them to consult a doctor whenever they need such attention instead of going to a quack or an ojha. The teachers are provided ' +
                'with a medical kit containing first aid materials and some off the shelf medicines. The teachers are trained in this respect. ' +
                '<span>www.ftsindia.com</span> </p>',
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
                                <h1>Social Responsibility</h1>
                                <header>&nbsp;</header>
                                <p>One of our core values is to extent our support in the communities
                                    where we operate. Why? We see it as our duty to contribute to the areas where we live and work
                                    and operate in ways that are safe and environmentally responsible.
                                </p>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Summary*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.summaryOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.summary}>
                                <h1 className={'sectionTitle'}>NANHI KALI</h1>
                                <p className={'sectionSummary'}>Sanjay Gupta - Tibarumals Jewellers have a philanthropic partnership with Project Blossoming, an auction
                                    hosted by renowed auction house Christies, Sanjay Gupta and Tibarumals crafted a masterpiece. It was Zambian Emerald, Mozambican Ruby and
                                    Diamond necklace set in white gold. Presented by Nanhi Kali of Mahindra Foundation and Gemfields,
                                    Project Blossom partners 10 celebrated jewellers from the country for an auction that raises funds to educate underprivileged young girls.</p>
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
                                        <div dangerouslySetInnerHTML={{__html: c_item.content}}/>
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
