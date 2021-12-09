import styles from './index.module.scss'
import {Fragment, useEffect, useState} from "react";
import {motion} from "framer-motion"
import {InView} from 'react-intersection-observer';
import Footer from "../../shared/components/footer/footer";
import Head from "next/head";
import PageHeader from "../../shared/components/page-header/page-header";

import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/core';


SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
export default function TcDiamondJewellery() {
    const content = [
        {
            title: 'THE BASICS <span>of</span> KEEPING <span>your <br/></span> DIAMOND CLEAN',
            header: 'So how can you keep your diamond looking its very best, Here are some tips on diamond care:',
            header_2: 'Regular cleaning will keep your diamond jewellery in gleaming condition and ready to sparkle on that special occasion.',
            pointers: [
                'Handle your diamond sparingly, as your fingers provide enough oil from your skin to alter the way your diamond looks.',
                'Clean your diamond regularly. A simple plan to keep your diamond jewellery always looking beautiful is to soak the diamond in an ammonia-based household cleaner (such as window cleaner) overnight, once or twice weekly. In the morning, remove the diamond from the cleaner and brush it with a soft, clean toothbrush to remove any leftover dirt. Take extra care to brush the back of the diamond as this                    will be the area that has collected the most oil and dirt.',
                'Be aware that fragile settings and estate jewellery won\'t take kindly to being scrubbed with a toothbrush, so use a soft touch. Then, just rinse the diamond with water and wipe with a soft, lint-free cloth.',
                'Don\'t use harmful solutions. Chlorine or abrasives should never be used when cleaning diamonds, especially those set in jewellery. These erode some of the metals often used in diamond settings, and may loosen prongs, or even dissolve the metal completely.',
            ]
        },
        {
            title: 'TIPS  <span>for</span> <br/>' + 'GENERAL CARE',
            header: 'Even though you may wear your diamond engagement ring 24 hours a day, you should still give thought to its care.',
            pointers: [
                'Don\'t wear it when you\'re doing rough work or going to the gym. Even though a diamond is durable, it can be chipped by a hard blow.\n' +
                'Don\'t let your diamond come in contact with a chlorine bleach when you\'re doing household chores. It can damage and discolor the mounting.',
                'Do see your jeweler at least once a year and have him check your ring and other precious pieces for loose prongs and wear of mountings. He\'ll usually give them a professional "shine-up" too.'
            ]
        },
          {
            title: 'PUTTING DIAMONDS <span>away</span>',
            pointers: [
                'When you\'re not wearing diamonds and precious jewellery, they still require attention. Keep your precious pieces in a fabric-lined jewel case, or a box with compartments or dividers.',
                'lf you prefer to use ordinary boxes, wrap each piece individually in tissue paper',
                'Don\'t jumble your diamond pieces in a drawer or jewellery case, because diamonds can scratch other jewellery-and can even scratch each other.',
                'Don\'t leave your ring on the rim of a sink when you remove it to wash your hands. It can easily slip down the drain.',
            ]
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
                                <h1>HOW <span>to</span> <br/>
                                    TAKE CARE <span>of</span> <br/>
                                    DIAMOND JEWELLERY</h1>
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
                                        {
                                            c_item.header && <header>{c_item.header}</header>
                                        }
                                        {
                                            c_item.pointers.map((pointer, pindex) => {
                                                return <div>
                                                    <img src={'/images/tc-diamond/bullet.svg'}/>
                                                    <p className={'sectionSummary'}>{pointer}</p>
                                                </div>
                                            })
                                        }
                                        {
                                            c_item.header_2 && <header>{c_item.header_2}</header>
                                        }
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
