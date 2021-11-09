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
    const pickings = [
        {
            bg_img_url: '/images/heritage/picking/1.png',
            content: 'We meticulously hand-select each and every one of our diamonds, assessing them individually by eye. ' +
                'We look for the  <span>perfect alignment of facets and angles, which maximises how a diamond reflects, refracts and ' +
                'disperses light. </span> This not only represents the quality of a diamond but results in its ultimate sparkle, ' +
                'so you can confidently shine.'
        },
        {
            bg_img_url: '/images/heritage/picking/1.png'
        },
        {
            bg_img_url: '/images/heritage/picking/1.png'
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
            <PageHeader title={'Heritage Jewellery'}/>

            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.traditionOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.tradition}>
                                <h1>TIMELESS <br/> CREATIONS <span>of</span> AN <br/> ETHEREAL <span>era</span></h1>
                                <header>&nbsp;</header>
                                <p>Having been passed down generations as heirloom pieces and adorning the modern-day
                                    bride,
                                    our heritage jewellery is appreciated by the quintessential modern woman who
                                    respects her heritage even
                                    as she appreciates the freshness of the future.
                                </p>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Vintage Design*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.vintageOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.vintage}>
                                <div className={styles.vintageTop}>
                                    <h1 className={'sectionTitle'}>VINTAGE DESIGN</h1>
                                    <p className={'sectionSummary'}>Ancient jewellery making techniques such
                                        as <span>&nbsp;enamelling,
                                        inlay and gold etching</span> have stood the test of time, and are fostered in
                                        our modern collections. We
                                        marry the old and the new to create visually intriguing pieces crafted using
                                        these ancient techniques,
                                        creating fine luxury masterpieces with genuine workmanship.
                                    </p>
                                </div>
                                <div className={styles.vintageBanner}>
                                    <img src={'/images/heritage/vintage/vintage-design-banner.png'}/>
                                </div>
                                <div className={styles.vintageCarousel}>
                                    <Button theme={'blue_small'} title={'Read More'} casing={'capitalize'}/>
                                    <div className={styles.carousel}>
                                        {/*<Swiper*/}
                                        {/*    spaceBetween={30}*/}
                                        {/*    slidesPerView={'2'}>*/}
                                        {/*    {*/}
                                        {/*        places.map((place, index) => {*/}
                                        {/*            return <SwiperSlide>*/}
                                        {/*                <div>*/}
                                        {/*                    <img src={'/images/homepage/places/1.png'}/>*/}
                                        {/*                </div>*/}
                                        {/*            </SwiperSlide>*/}
                                        {/*        })*/}
                                        {/*    }*/}
                                        {/*</Swiper>*/}
                                        <div>
                                            <img src={'/images/heritage/vintage/1.png'}/>
                                        </div>
                                        <div>
                                            <img src={'/images/heritage/vintage/2.png'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Sketching*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.sketchingOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.sketching}>
                                <div className={styles.sketchingLeft}>
                                    <h1 className={'sectionTitle'}>SKETCHING</h1>
                                    <div className={styles.sketchingContent}>
                                        <Button theme={'gold_small'} title={'Read More'} casing={'capitalize'}/>
                                        <p className={'sectionSummary'}>Mr. Sanjay Gupta sees design in everything
                                            around him.
                                            He draws inspiration from artistic vintage paintings, marble statues,
                                            portraits of a
                                            Royal courtsman or even architecture.
                                        </p>
                                        <div className={styles.sketchingImages}>
                                            <img src={'/images/sketching/sketch-1.png'}/>
                                            <img className={styles.img2} src={'/images/sketching/sketch-2.png'}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.sketchingRight}>
                                    <img src={'/images/sketching/sketch-2.png'}/>
                                    <Button theme={'gold_small'} title={'Read More'} casing={'capitalize'}/>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Pick*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.pickOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={styles.pick}>
                                <div className={styles.sliders}>
                                    {/*<Swiper*/}
                                    {/*    spaceBetween={120}*/}
                                    {/*    slidesPerView={'1'}>*/}
                                    {/*    {*/}
                                    {/*        pickings.map((place, index) => {*/}
                                    {/*            return <SwiperSlide>*/}
                                    {/*                <div className={styles.slide}*/}
                                    {/*                     style={{*/}
                                    {/*                         background: 'url(' + place.bg_img_url + ')',*/}
                                    {/*                         backgroundSize: 'cover',*/}
                                    {/*                         backgroundRepeat: 'no-repeat'*/}
                                    {/*                     }}>*/}
                                    {/*                    <h1 className={'sectionTitle'}>Picking <br/> <span>and</span> mounting <br/> stones</h1>*/}
                                    {/*                    <div className={styles.slideContent}>*/}
                                    {/*                        <p className={'sectionSummary'} dangerouslySetInnerHTML={{__html: place.content}}/>*/}
                                    {/*                    </div>*/}
                                    {/*                    <Button title={'Read More'} casing={'capitalize'} theme={'white_large'}/>*/}
                                    {/*                </div>*/}
                                    {/*            </SwiperSlide>*/}
                                    {/*        })*/}
                                    {/*    }*/}
                                    {/*</Swiper>*/}
                                    <div className={styles.slide}>
                                        <h1 className={'sectionTitle'}>Picking <br/>
                                            <span>and</span> mounting <br/> stones</h1>
                                        <div className={styles.slideContent}>
                                            <p className={'sectionSummary'}>
                                                We meticulously hand-select each and every one of our diamonds,
                                                assessing them individually by eye.
                                                We look for the <span>perfect alignment of facets and angles,
                                                which maximises how a diamond reflects, refracts and disperses light.
                                            </span> This not only represents the quality of a diamond but results in its
                                                ultimate
                                                sparkle,
                                                so you can confidently shine.
                                            </p>

                                        </div>
                                        <Button title={'Read More'} casing={'capitalize'} theme={'white_small'}/>
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
