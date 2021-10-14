import styles from "./index.module.scss";
import {Fragment} from "react";

export default function BookNow() {
    const bookNow = () => {

    }

    return (<Fragment>
        <section className={styles.bookNow} title='Book Now'>
            <header>Book An Appointment</header>
            <img src='/images/booknow/booknow.svg' onClick={bookNow}/>
        </section>

    </Fragment>)
}