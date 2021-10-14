import styles from "./index.module.scss";
import {Fragment, useEffect, useState} from "react";

export default function Dots({
                                 count = 1,
                                 selected = 1,
                                 selectedColor = 'black',
                                 bgColor = '#AFAFAF'
                             }) {

    const [dots, set_dots] = useState([]);

    useEffect(() => {
        const d = []
        for (let i = 0; i <= count; i++) {
            d.push(i);
        }
        set_dots(d);
    }, [count])


    return (<Fragment>
        <section className={styles.dots}>
            {
                dots.map((item, index) => {
                    return <div className={styles.dot} style={{background: bgColor}}/>
                })

            }
            {
                <div className={styles.selected} style={{marginLeft: (selected * 15) + 'px', background: selectedColor}}/>
            }
        </section>
    </Fragment>)
}