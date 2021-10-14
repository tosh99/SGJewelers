import styles from "./page-header.module.scss";
import {Fragment, useState} from "react";
import Link from "next/link";
import Menu from "../menu/menu";

export default function PageHeader({title, bg = 'transparent'}) {
    const [show_menu, set_show_menu] = useState(false)


    return (<Fragment>
        <div className={"outer " + ' ' + styles.headerOuter + ' ' + (bg === 'transparent' ? styles.headerOuterTrans : '')}>
            <div className={"inner " + styles.header}>
                <div className={styles.hLeft}>
                    <header>{title ? title : <>&nbsp;</>}</header>
                </div>
                <div className={styles.hCenter}>
                    <img src={'/images/header/logo.svg'} onClick={() => {

                    }}/>
                </div>
                <div className={styles.hRight}>
                    <header>MENU</header>
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