import styles from "./index.module.scss";

export default function Button({title, theme = 'gold', casing='uppercase'}) {
    return <section className={styles.buttons
    + ' ' + (theme === 'blue' ? styles.buttonsBlue : '')
    + ' ' + (theme === 'white_large' ? styles.buttonsWhiteLarge : '')
    + ' ' + (theme === 'gold_large' ? styles.buttonsGoldLarge : '')
    + ' ' + (casing === 'capitalize' ? styles.buttonCapitalize : '')}>
        {title}
    </section>
}