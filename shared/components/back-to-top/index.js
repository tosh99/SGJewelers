import styles from "./index.module.scss";
import {Fragment} from "react";

export default function BackToTop({background = 'transparent'}) {
    const backToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (<Fragment>
        <div className={styles.backtoToTopOuter} style={{background: background}} onClick={backToTop}>
            {/*<div className={"inner " + styles.inner}>*/}
            <section className={styles.backtoToTop + ' ' + (background === 'black' ? styles.backtoToTopBlack : '')} title={'Back To Top'}>
                <header>Back to Top</header>
                <img src={'/icons/header/backtotop.svg'} onClick={backToTop}/>
            </section>
            {/*</div>*/}
        </div>
    </Fragment>)
}