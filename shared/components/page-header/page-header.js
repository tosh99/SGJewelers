import styles from "./page-header.module.scss";
import {Fragment, useEffect, useState} from "react";
import Menu from "../menu/menu";

export default function PageHeader({title, bg = 'transparent'}) {
    const [show_menu, set_show_menu] = useState(false)
    const [doc_scroll, set_doc_scroll] = useState(0)

    const [is_scroll_up, set_is_scroll_up] = useState(false)

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    })

    const handleScroll = () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > doc_scroll) {
            set_is_scroll_up(false)
        } else {
            set_is_scroll_up(true)
        }

        set_doc_scroll(st)
    }

    return (<Fragment>
        <div className={"outer " + ' ' + styles.headerOuter + ' ' + (bg === 'transparent' ? styles.headerOuterTrans : '') + ' ' + (is_scroll_up ? styles.headerScrollUp : '')}>
            <div className={"inner " + styles.header}>
                <div className={styles.hLeft}>
                    <header>{title ? title : <>&nbsp;</>}</header>
                </div>
                <div className={styles.hCenter}>
                    <img src={'/images/header/logo.svg'} onClick={() => {

                    }}/>
                </div>
                <div className={styles.hRight}>
                    <header onClick={() => {
                        set_show_menu(true)
                    }}>MENU
                    </header>
                    <img src={'/icons/header/menu.svg'} onClick={() => {
                        set_show_menu(true)
                    }}/>
                </div>
            </div>
        </div>
        {
            show_menu &&
            <Menu close={() => {
                set_show_menu(false)
            }}/>
        }
    </Fragment>)
}