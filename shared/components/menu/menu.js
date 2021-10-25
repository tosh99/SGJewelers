import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./menu.module.scss";
import {Fragment, useState} from "react";
import Link from "next/link";
import Router from "next/router";

export default function Menu({close}) {
    const [page, set_page] = useState(1);

    const getPageName = () => {

    }

    const navigateHome = () => {
        Router.push('/');
    }

    return (<Fragment>
        <div className={styles.menu
        + ' ' + (page === 1 ? styles.menuFirst : '')
        + ' ' + (page === 2 ? styles.menuSecond : '')
        + ' ' + (page === 3 ? styles.menuThird : '')
        + ' ' + (page === 4 ? styles.menuFourth : '')
        + ' ' + (page === 5 ? styles.menuFifth : '')
        + ' ' + (page === 6 ? styles.menuFourth : '')
        }>
            <InView threshold={0.5}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + ' ' + styles.servicesOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={styles.menuTop}>
                                <img className={styles.close} src={'/icons/common/back.svg'} onClick={close}/>
                                <img className={styles.logo} src={'/images/header/logo.svg'} onClick={navigateHome}/>
                                <header>MENU</header>
                            </div>
                            <div className={styles.menuContent}>
                                <Link href="/exclusively-yours">
                                    <header onMouseOver={() => {
                                        set_page(1);
                                    }} onClick={close}>Exclusively Yours
                                    </header>
                                </Link>
                                <Link href="/heritage-jewellery">
                                    <header onMouseOver={() => {
                                        set_page(2);
                                    }} onClick={close}>Heritage Jewellery
                                    </header>
                                </Link>
                                <Link href="/iconic-design">
                                    <header onMouseOver={() => {
                                        set_page(3);
                                    }} onClick={close}>Iconic Designs
                                    </header>
                                </Link>
                                <Link href="/art-of-jewellery-making">
                                    <header onMouseOver={() => {
                                        set_page(4);
                                    }} onClick={close}>Art of Jewellery Making
                                    </header>
                                </Link>
                                <Link href="/discover-luxury">
                                    <header onMouseOver={() => {
                                        set_page(5);
                                    }} onClick={close}>Discover Luxury
                                    </header>
                                </Link>
                                <Link href="/blogs">
                                    <header onMouseOver={() => {
                                        set_page(6);
                                    }} onClick={close}>Blogs
                                    </header>
                                </Link>
                            </div>
                            <div className={styles.menuBottom}>
                                {/*<p>make AN appointment</p>*/}
                                <div className={styles.menuLast}>
                                    <Link href="/">
                                        <header onClick={close}>Back to Home</header>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>)
                }
            </InView>
        </div>
    </Fragment>)
}