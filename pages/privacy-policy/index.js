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
            title: 'LIMITATION <span>of</span> LIABILITY',
            header: 'Under no circumstances and under no legal or equitable theory, whether in tort, contract, strict liability or otherwise, shall sanjaygupta.world or any of its employees, directors, officers, agents, vendors or suppliers be liable to you or to any other person for any indirect, special, incidental or consequential losses or damages of any nature arising out of or in connection with the use of or inability to use the www.sanjaygupta.world website, including, without limitation, damages for lost profits, loss of goodwill, loss of data, work stoppage, accuracy of results, or computer failure or malfunction, even if an authorized representative of www.sanjaygupta.world. Has been advised of or should have known of the possibility of such damages. In no event will sanjaygupta.world be liable for any damages in excess of the fees paid by you in connection with your use of the site during the six month period preceding the date on which the claim arose.'
        },
        {
            title: 'Caution',
            header: 'In case of any doubts user may seek clarifications from www.sanjaygupta.world through \n' +
                'Email : <a href="mailto: info@sanjaygupta.world">info@sanjaygupta.world</a> and should not use any service / place order before he gets a written ' +
                'clarification about the same. Users of www.sanjaygupta.world are supposed to have thoroughly read and ' +
                'understood all the terms and conditions mentioned herein. Users are considered to have unconditionally agreed, approved,' +
                ' understood and accepted all the terms, conditions, procedures, risks and consequences of using the products / services at ' +
                'sanjaygupta.world and they cannot, at any time, claim ignorance of any or all of them. All relationship of any user' +
                ' whosesoever situated is governed by and in accordance with the laws of <span>HYDERABAD, TELANGANA, INDIA.</span>'
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
                        <motion.div className={"outer " + styles.privacyPolicyOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.privacyPolicy}>
                                <h1 className={'sectionTitle'}>Privacy Policy</h1>

                                <div className={styles.ppItem}>
                                    <img src={'/images/tc-diamond/bullet.svg'}/>
                                    <p>We are committed to protecting your privacy. We will only use the information that we collect about you lawfully. </p>
                                </div>

                                <div className={styles.ppItem}>
                                    <img src={'/images/tc-diamond/bullet.svg'}/>
                                    <p>We collect information about you for 2 reasons: firstly, to process your order and second, to provide you with the best possible service.</p>
                                </div>


                                <div className={styles.ppItem}>
                                    <img src={'/images/tc-diamond/bullet.svg'}/>
                                    <p>The type of information we will collect about you includes: <br/>
                                        <span>Your Name</span>
                                        <span>Address</span>
                                        <span>Phone Number</span>
                                        <span>Email Address</span>
                                    </p>
                                </div>

                                <div className={styles.ppItem}>
                                    <img src={'/images/tc-diamond/bullet.svg'}/>
                                    <p>We will never collect sensitive information about you without your explicit consent. The information we hold will be accurate and up to date. You can check the information that we
                                        hold about you by emailing us. If you find any inaccuracies we will delete or correct it promptly.</p>
                                </div>

                                <div className={styles.ppItem}>
                                    <img src={'/images/tc-diamond/bullet.svg'}/>
                                    <p>The personal information which we hold will be held securely in accordance with our internal security policy and the law.</p>
                                </div>

                                <div className={styles.ppItem}>
                                    <img src={'/images/tc-diamond/bullet.svg'}/>
                                    <p>We may use technology to track the patterns of behaviour of visitors to our site. This can include using a "cookie" which would be stored on your browser. You can usually modify
                                        your browser to prevent this happening. The information collected in this way can be used to identify you unless you modify your browser settings.</p>
                                </div>

                                <div className={styles.ppItem}>
                                    <img src={'/images/tc-diamond/bullet.svg'}/>
                                    <p>If you have any questions / comments about privacy, you should contact us.</p>
                                </div>

                            </div>
                        </motion.div>
                    )
                }
            </InView>

            <InView threshold={0.25} triggerOnce={true}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + styles.usingOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={"inner " + styles.using} id={'using'}>
                                <h1 className={'sectionTitle'}>By using SANJAYGUPTA.WORLD </h1>
                                <header>the user unconditionally accepts the terms and conditions of use as given here under :</header>

                                <p className={'sectionSummary'}>Before jumping to any conclusions or placing an order, the user may carefully read products information and services displayed in relevant sections and information. <br/><br/>

                                    www.sanjaygupta.world is owned and managed by Sanjay Gupta by Tibarumals Jewellers, Jubilee Hills, Hyderabad. All the contents of the site are only for general information or use. They
                                    do not constitute advice and should not be relied upon in making any decision. Certain elements of the site will contain material submitted by users. www.sanjaygupta.world accepts no
                                    responsibility for the content or accuracy of such material.<br/><br/>

                                    sanjaygupta.world is not responsible for the contents of any linked sites. We do not endorse the companies or products to which it links. Your access to any of these third party sites
                                    is done entirely at your own risk. The details of the products or product specifications (for instance weight, color, handwork details, size, etc.) quoted with the product displays are
                                    only fairly accurate values. Since most of the products have intricate handwork, there may be slight variation in the pictures displayed and the respective actual products.<br/><br/>

                                    sanjaygupta.world will not be liable for any loss of data, loss / profits or any damages under any circumstances whatsoever including any circumlocutory, special, subsidiary, indirect,
                                    consequential or other damages that result from the use of or inability to use the products / services offered at www.sanjaygupta.world. In no occurrence / event shall
                                    sanjaygupta.world be accountable to the user for any damages, losses, negligence or any actions otherwise, beyond the amount paid by the user to www.sanjaygupta.world for any specific
                                    product or service.<br/><br/>

                                    With a view to provide our users / customers latest information and material, www.sanjaygupta.world will make changes in the products or services described on this site from time to
                                    time. Availability and prices of items are cause to undergo change without prior notice. Any prices displayed on www.sanjaygupta.world may not be indicative of the actual selling
                                    prices in any particular area. We at reserve the right to limit sales, including the right to prohibit sales to re-sellers. www.sanjaygupta.world is not responsible for any
                                    typographical or photographic errors / shortcomings.<br/><br/>

                                    Apart from any or all of the aforesaid Terms, Conditions and Disclaimers, FAQs or anywhere else in the site, any refund or payment by www.sanjaygupta.world to the user (or anybody
                                    acting on his behalf for any reason whatsoever) shall not become a waiver of any or all of the terms and conditions made and shall not become a precedent for similar actions / claims
                                    in future or confer any rights on the applicant. All such refunds or payments, if any when made, shall be subjected to a deduction product damage cost, Bank charges and other
                                    processing overheads.</p>

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
                                        <h1 className={'sectionTitle'} dangerouslySetInnerHTML={{__html: c_item.title}}/>
                                        <p className={'sectionSummary'} dangerouslySetInnerHTML={{__html: c_item.header}}/>
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
