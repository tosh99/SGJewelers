import styles from "./strip.module.scss";
import {useState} from "react";
import Marquee from "react-fast-marquee";
import Router from "next/router";


export default function Strip({items = []}) {

    const navigateTo = (item) => {
        Router.push(item.url);
    }


    return <div className={"outer " + styles.stripOuter}>
        <div className={"inner " + styles.strips}>
            <Marquee gradient={false} speed={40} pauseOnHover={true} pauseOnClick={true}>
                {
                    items.map((item, index) => {
                        return <div className={styles.strip}>
                            <header className={item.url ? styles.navigable : ''} onClick={() => navigateTo(item)}> {item.title}</header>
                            <div className={styles.imgContainer}>
                                <img src={'/icons/common/star.svg'}/>
                            </div>
                        </div>
                    })
                }
            </Marquee>
        </div>
    </div>
}