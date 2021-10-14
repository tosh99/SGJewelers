import styles from "./index.module.scss";

export default function Button({title, theme = 'gold'}) {
    return <section className={styles.buttons
    + ' ' + (theme === 'blue' ? styles.buttonsBlue : '')
    + ' ' + (theme === 'white_large' ? styles.buttonsWhiteLarge : '')
    + ' ' + (theme === 'gold_large' ? styles.buttonsGoldLarge : '')}>
        {title}
    </section>
}