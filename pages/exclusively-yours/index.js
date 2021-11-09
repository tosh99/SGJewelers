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
    const themes = [{
        title: 'Magnificent',
        sec_title: 'feeling magnificent',
        desc: 'Explore the poetic fusion of age-old traditions and contemporary renditions. Our jewellery, your way.',
        section_1: {
            title: 'Briolette Jhumkas',
            images: ['/images/exclusively/section_1/1.png']
        }
    }, {
        title: 'Magnificent 2'
    }]
    const [selected_theme, set_selected_theme] = useState(0);

    const [section_1_swiper, set_section_1_swiper] = useState({});
    const [current_section_1_slide, set_current_section_1_slide] = useState(0);


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
            <PageHeader title={'Exclusively Yours'}/>

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
                                <div className={styles.themes}>
                                    <div className={styles.themeLeft} onClick={() => {
                                        if (selected_theme > 0) {
                                            set_selected_theme(prev => prev - 1)
                                        }
                                    }}>
                                        <img src={'/images/exclusively/banner/left.svg'}/>
                                    </div>
                                    <div className={styles.themeContent}>
                                        <h2>{themes[selected_theme].title}</h2>
                                    </div>
                                    <div className={styles.themeRight} onClick={() => {
                                        if (selected_theme < themes.length - 1) {
                                            set_selected_theme(prev => prev + 1)
                                        }
                                    }}>
                                        <img src={'/images/exclusively/banner/right.svg'}/>
                                    </div>
                                </div>


                                <header>&nbsp;</header>
                                <Button title={'SEE THE PIECES'} theme={'white_large'}/>
                                <p>We have devised a custom filter that helps you find jewellery that matches your mood and suits your style.
                                </p>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Section 1*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.sectionOneOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.sectionOne}>
                                <div className={styles.sectionOneHeader}>
                                    <h1 className={'sectionTitle'}>{themes[selected_theme].sec_title}</h1>
                                    <p className={'sectionSummary'}>{themes[selected_theme].desc}</p>
                                </div>
                                <div className={styles.sectionOneContent}>
                                    <div className={styles.socLeft}>
                                        <h3>Briolette Jhumkas</h3>
                                        <Swiper
                                            spaceBetween={130}
                                            onInit={(ev) => {
                                                set_section_1_swiper(ev)
                                            }}
                                            onSlideChange={(ev) => {
                                                set_current_section_1_slide(ev.activeIndex)
                                            }}
                                            slidesPerView={'1'}>
                                            {
                                                themes[selected_theme].section_1.images.map((item, index) => {
                                                    return <SwiperSlide>
                                                        <div>
                                                            <img src={item}/>
                                                        </div>
                                                    </SwiperSlide>
                                                })
                                            }
                                        </Swiper>
                                        <div className={styles.sectionOneBottom}>
                                            <header>0{current_section_1_slide + 1}/<span>0{themes[selected_theme].section_1.images.length}</span>
                                            </header>
                                            <NextBack
                                                prevDisabled={current_section_1_slide === 0}
                                                nextDisabled={current_section_1_slide === themes[selected_theme].section_1.images.length - 1}
                                                onNext={() => {
                                                    section_1_swiper.slideNext()
                                                }}
                                                onBack={() => {
                                                    section_1_swiper.slidePrev()
                                                }}/>
                                        </div>
                                    </div>
                                    <div className={styles.socRight}>
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
