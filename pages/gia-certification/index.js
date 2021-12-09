import styles from './index.module.scss'
import {Fragment} from "react";
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
            title: 'RESEARCH',
            header: 'GIA has the world’s most comprehensive gemological research program. For more than 80 years, GIA researchers have studied the scientific properties of gems to develop new methods of identifying natural, laboratory-grown and treated gems.',

        },
        {
            title: 'STANDARDS',
            header: 'GIA has developed and maintained the methods and best practices for evaluating diamonds, colored stones and pearls. They are the creators of the 4Cs and the GIA International Diamond Grading System™',

        },
        {
            title: 'ACCURACY',
            header: 'Every GIA laboratory operates under the same set of standard procedures and principles designed to ensure the objectivity and accuracy of every gem identification or grading report issued.\n',

        }
    ]


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
                                <h1>GIA CERTIFICATION</h1>
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
                                <p className={'sectionSummary'}>Gemological Institute of America (GIA) is the world’s most trusted name in diamond grading and gem identification. With objectivity and expertise as its hallmarks, GIA ensures the
                                    integrity and accuracy of every report it issues. GIA tests every material submitted to determine whether it is natural or not, and discloses any treatments discovered during their
                                    examination.
                                    <br/><br/>
                                    A report from GIA is an expert statement of a gem’s identity and quality characteristics. A GIA report is your assurance of your gemstone’s quality, with clear disclosure if the
                                    material is laboratory-grown or if it has been treated to enhance or alter its appearance. The report provides the kind of evidence that is vital to a confident gem or jewellery
                                    purchase.
                                </p>
                            </div>
                        </motion.div>
                    )
                }
            </InView>

            {/*Research*/}
            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.researchOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            {
                                content.map((c_item, c_index) => {
                                    return <div className={"inner " + styles.research}>
                                        <h1 className={'sectionTitle'}>{c_item.title}</h1>
                                        <p className={'sectionSummary'}>{c_item.header}</p>
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
