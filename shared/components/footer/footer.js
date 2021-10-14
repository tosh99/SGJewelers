import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./footer.module.scss";
import {Fragment, useEffect, useState} from "react";
import Router from "next/router";

export default function Footer() {
    const [is_visible, set_is_visible] = useState({});

    useEffect(() => {
        if (screen.width > 648) {
            set_is_visible({
                follow: true,
                legal: true,
                company: true
            })
        }
    }, [])

    const backToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (<Fragment>
        <div className={"outer " + ' ' + styles.footerOuter}>
            <div className={"inner " + styles.footer}>
                <div className={styles.footerTop}>
                    <div className={styles.ftLeft}>
                        <img src={'/icons/header/logo_footer.svg'}/>
                    </div>
                    <div className={styles.ftRight}>
                        <div className={styles.column}>
                            <div className={styles.clHeader} onClick={() => {
                                set_is_visible(prev => ({...prev, follow: !prev.follow}))
                            }}>
                                <header> Explore</header>
                                <img src={'/icons/common/down_white.svg'}/>
                            </div>
                            {
                                is_visible.follow && <>
                                    <a target="_blank">
                                        <header className={styles.item}>After Purchase Care</header>
                                    </a>
                                    <a target="_blank">
                                        <header className={styles.item}>4 Cs of Diamonds</header>
                                    </a>
                                    <a target="_blank">
                                        <header className={styles.item}>Blog</header>
                                    </a>
                                    <a target="_blank">
                                        <header className={styles.item}>Site Map</header>
                                    </a>
                                </>
                            }
                        </div>
                        <div className={styles.column}>
                            <div className={styles.clHeader} onClick={() => {
                                set_is_visible(prev => ({...prev, legal: !prev.legal}))
                            }}>
                                <header> Legal</header>
                                <img src={'/icons/common/down_white.svg'}/>
                            </div>
                            {
                                is_visible.legal && <>
                                    <header className={styles.item}>GIA & <br/> Other Certifications</header>
                                    <header className={styles.item}>After Purchase Care</header>
                                    <header className={styles.item}>Legal Documents</header>
                                </>
                            }
                        </div>
                        <div className={styles.column}>
                            <div className={styles.clHeader} onClick={() => {
                                set_is_visible(prev => ({...prev, company: !prev.company}))
                            }}>
                                <header>Follow</header>
                                <img src={'/icons/common/down_white.svg'}/>
                            </div>
                            {
                                is_visible.company && <>
                                    <a target="_blank">
                                        <header className={styles.item}>Instagram</header>
                                    </a>
                                    <a target="_blank">
                                        <header className={styles.item}>Twitter</header>
                                    </a>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <div className={styles.fbLeft}>
                        <div className={styles.mobile}>
                            <a>
                                <header>+91 8885 085005</header>
                            </a>
                        </div>
                        <div className={styles.emails}>
                            <a href="https://www.tibarumalsjewellers.com">
                                <header>www.tibarumalsjewellers.com</header>
                            </a>
                            <a href="mailto: info@tibarumalsjewellers.com">
                                <header>info@tibarumalsjewellers.com</header>
                            </a>
                        </div>
                        <div className={styles.address}>
                            Signature 36, Rd.NO.10, OPP. al cazar mall <br/>
                            jublee hills, hyderabad <br/>
                            500033
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>)
}