import styles from "./footer.module.scss";
import {Fragment, useEffect, useState} from "react";
import BackToTop from "../back-to-top";

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
                                    <a href={'/after-purchase-care'}>
                                        <header className={styles.item}>After Purchase Care</header>
                                    </a>
                                    <a href={'/gia-certification'}>
                                        <header className={styles.item}>GIA Certification</header>
                                    </a>
                                    <a href={'/4cs-of-diamond'}>
                                        <header className={styles.item}>4 Cs of Diamond</header>
                                    </a>
                                    <a href={'/social-responsibility'}>
                                        <header className={styles.item}>Social Responsibility</header>
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
                                    <a href={'/privacy-policy'}>
                                        <header className={styles.item}>Privacy Policy</header>
                                    </a>
                                    <a href={'/disclaimer'}>
                                        <header className={styles.item}>Disclaimer</header>
                                    </a>
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
                                    <a href={'https://instagram.com/sanjaygupta.world?utm_medium=copy_link'} target="_blank">
                                        <header className={styles.item}>Instagram</header>
                                    </a>
                                    <a href={'https://www.facebook.com/sanjaygupta.tibarumals'} target="_blank">
                                        <header className={styles.item}>Facebook</header>
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
                                <header>www.sanjaygupta.world</header>
                            </a>
                            <a href="mailto: info@tibarumalsjewellers.com">
                                <header>info@sanjaygupta.world</header>
                            </a>
                        </div>
                        <div className={styles.address}>
                            Signature 36, Rd.NO.10, OPP. al cazar mall <br/>
                            jublee hills, hyderabad <br/>
                            500033
                            <BackToTop/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>)
}