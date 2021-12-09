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


SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
export default function ExclusivelyYours() {
    const rare_jewelleries = [1]
    const [rare_swiper, set_rare_swiper] = useState({});
    const [current_rare_slide, set_current_rare_slide] = useState(0);

    const [is_story_visible, set_is_story_visible] = useState(false);
    const [is_rare_rm, set_is_rare_rm] = useState(false);
    const [is_movement_rm, set_is_movement_rm] = useState(false);

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
            <PageHeader title={'Iconic Design'}/>

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
                                <header>&nbsp;</header>
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
                                        <p className={'sectionSummary'}>
                                            The design inspiration for our high jewellery collection can come
                                            from places far and wide.
                                            We are connoisseurs of art and have an inclination towards the fine jewellery periods of yore —
                                            <br/><br/>
                                            <span>Georgian, Victorina, Edwardian, Art Nouveau, Art Deco and Retro. <br/><br/></span>
                                        </p>
                                        <img src={'/images/iconic/story/2.png'}/>
                                    </div>
                                </div>
                                <div className={styles.storyBottom}>
                                    <div className={styles.sbLeft}>
                                        {
                                            is_story_visible && <p className={'sectionSummary'}>
                                                You will find our high jewellery make use of either the clean, geometric lines of the Art Deco period or the fluent, floral language of the Art Nouveau period. The use
                                                of colours, techniques, materials and stones though inspired from these iconic art periods, our designs are a modern rendition of the same. <span>All reminiscent of an
                                                    opulent past yet, looking onward to the richness of what’s to come. </span>
                                                We have designed jewellery pieces inspired by the Maharaja of Patliala, Queen of England, royal courtesans of India and other noblemen who celebrated the art and
                                                craftsmanship of high jewellery designers of their time. Our designs are also made keeping their wearer in mind so as to compliment them the best.
                                            </p>
                                        }
                                        {
                                            !is_story_visible && <Button title={'Read More'} casing={'capitalize'} theme={'gold_small'} onClick={() => {
                                                set_is_story_visible(true)
                                            }}/>
                                        }
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
                                    {/*<div className={'bookIndex ' + styles.bookIndex}>*/}
                                    {/*    <header>0{current_rare_slide + 1}/<span>0{rare_jewelleries.length}</span></header>*/}
                                    {/*</div>*/}
                                    <h1 className={'sectionTitle'}>RARE <span>and</span> <br/> pRECIOUS <span>stones</span></h1>
                                </div>
                                <div className={styles.rareTop}>
                                    <Swiper
                                        spaceBetween={130}
                                        onInit={(ev) => {
                                            set_rare_swiper(ev)
                                        }}
                                        onSlideChange={(ev) => {
                                            console.log(ev.activeIndex)
                                            set_current_rare_slide(ev.activeIndex)
                                        }}
                                        slidesPerView={'1'}>
                                        {
                                            rare_jewelleries.map((place, index) => {
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
                                        <p className={'sectionSummary'}>The diamonds and gemstones used in high jewellery are distinct in nature,
                                            colour, shape, carat and clarity.
                                            Owing to their origins they are valued very highly and rare to come by in certain instances.
                                            {
                                                is_rare_rm && <>
                                                    <br/><br/>We use only the finest diamonds that are of superior VVS clarity and E-F grade of being colourless. Other gemstones that we use can range from <span>Colombian
                                                    Emeralds,
                                                    Panjshir Emeralds, Burmese Rubies, Basra Pearls, Spinels, Padparadscha to Alexandrite.</span>
                                                </>
                                            }
                                        </p>
                                        {
                                            !is_rare_rm && <Button title={'Read More'} casing={'capitalize'} theme={'gold_small'} onClick={() => {
                                                set_is_rare_rm(true)
                                            }}/>
                                        }

                                    </div>
                                    {/*<NextBack*/}
                                    {/*    prevDisabled={current_rare_slide === 0}*/}
                                    {/*    nextDisabled={current_rare_slide === rare_jewelleries.length - 1}*/}
                                    {/*    onNext={() => {*/}
                                    {/*        rare_swiper.slideNext()*/}
                                    {/*    }}*/}
                                    {/*    onBack={() => {*/}
                                    {/*        rare_swiper.slidePrev()*/}
                                    {/*    }}/>*/}
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
                                        <p className={'sectionSummary'}>The stones picked are of immense value and need to be mounted to bring out
                                            their unique qualities. As designers of high jewellery, we make sure to use mounting techniques and
                                            settings that do justice to their prominence. Whether it is <span>prong-setting or bezel-setting</span> to
                                            highlight a
                                            single precious stone, or the <span>pave-setting or channel-setting</span> to bring together many stones
                                            in a way to
                                            form beautiful clusters of light or even the <span>flush-setting</span> allowing more romantic play of
                                            hide and seek,
                                            we choose the setting to compliment both, the stone and design.

                                            {
                                                is_movement_rm && <>
                                                    <br/><br/>
                                                    Settings also allow for movement in jewellery so you can enjoy wearing them in more than one way. Using <span>tremblade in necklaces and earrings</span> to add that
                                                    additional touch
                                                    of amusement, we are always keeping ourselves informed of the new techniques used worldwide and the first ones to bring them to you.
                                                </>
                                            }
                                        </p>

                                        <div className={styles.mvLeftImages}>
                                            <img src={'/images/iconic/movement/1.png'}/>
                                            <img className={styles.m2} src={'/images/iconic/movement/2.png'}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.movementRight}>
                                    <img src={'/images/iconic/movement/2.png'}/>
                                    {
                                        !is_movement_rm && <Button title={'Read More'} theme={'blue_small'} casing={'capitalize'} onClick={() => {
                                            set_is_movement_rm(true)
                                        }}/>
                                    }
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
