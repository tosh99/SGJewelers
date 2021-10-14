import {InView} from "react-intersection-observer";
import {motion} from "framer-motion";
import styles from "./menu.module.scss";
import {Fragment} from "react";
import Link from "next/link";
import Router from "next/router";

export default function Menu({close}) {


    const getPageName = () => {

    }

    const navigateHome = () => {
        Router.push('/');
    }

    return (<Fragment>

        <div className={styles.menu}>
            <InView threshold={0.5}>
                {
                    ({ref, inView}) => (
                        <motion.div className={"outer " + ' ' + styles.servicesOuter}
                                    ref={ref}
                                    initial={{opacity: 0}}
                                    animate={inView ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 1}}>
                            <div className={styles.menuTop}>
                                <img className={styles.logo} src={'/icons/header/logo.svg'} onClick={navigateHome}/>
                                <img className={styles.close} src={'/icons/header/close.svg'} onClick={close}/>
                            </div>
                            <div className={styles.menuContent}>
                                <Link href="/services">
                                    <header>Services</header>
                                </Link>
                                <Link href="/products">
                                    <header>Products</header>
                                </Link>
                                <Link href="/theedit">
                                    <header>The Edit</header>
                                </Link>
                                <Link href="/biologique">
                                    <header>Biologique Recherche</header>
                                </Link>
                                <Link href="/about">
                                    <header>About</header>
                                </Link>
                            </div>
                            <div className={styles.menuBottom}>
                                <p>make AN appointment</p>
                                <div className={styles.menuLast}>
                                    <Link href="/">
                                        <header>Home</header>
                                    </Link>
                                </div>
                            </div>

                        </motion.div>)
                }
            </InView>
        </div>
    </Fragment>)
}