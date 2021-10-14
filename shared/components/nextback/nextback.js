import styles from "./nextback.module.scss";
import {Fragment, useEffect} from "react";

export default function NextBack({
                                     onNext,
                                     onBack,
                                     theme = 'dark',
                                     prevDisabled,
                                     nextDisabled
                                 }) {


    useEffect(() => {

    }, [prevDisabled])

    return (<Fragment>
        <section className={styles.nextback}>
            {
                theme === 'dark' &&
                <Fragment>
                    {
                        prevDisabled &&
                        <img className={styles.disabled} src={'/icons/common/back_disabled.svg'}/>
                    }
                    {
                        !prevDisabled &&
                        <img src={'/icons/common/back.svg'} onClick={onBack}/>
                    }
                    {
                        nextDisabled &&
                        <img className={styles.disabled} src={'/icons/common/next_disabled.svg'}/>
                    }
                    {
                        !nextDisabled &&
                        <img src={'/icons/common/next.svg'} onClick={onNext}/>
                    }
                </Fragment>
            }
            {
                theme === 'light' &&
                <Fragment>
                    {
                        prevDisabled && <img className={styles.disabled} src={'/icons/common/back_light_disabled.svg'}/>
                    }
                    {
                        !prevDisabled && <img src={'/icons/common/back_light.svg'} onClick={onBack}/>
                    }
                    {
                        nextDisabled && <img className={styles.disabled} src={'/icons/common/next_light_disabled.svg'}/>
                    }
                    {
                        !nextDisabled && <img src={'/icons/common/next_light.svg'} onClick={onNext}/>
                    }
                </Fragment>
            }
        </section>
    </Fragment>)
}