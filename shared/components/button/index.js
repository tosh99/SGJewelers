import styles from "./index.module.scss";

export default function Button({title, theme = 'gold', casing='uppercase', onClick = () => {}}) {
    return <section className={styles.buttons
    + ' ' + (theme === 'gold_small' ? styles.buttonsGoldSmall : '')
    + ' ' + (theme === 'blue_small' ? styles.buttonsBlueSmall : '')
    + ' ' + (theme === 'blue' ? styles.buttonsBlue : '')
    + ' ' + (theme === 'blue_large' ? styles.buttonsBlueLarge : '')
    + ' ' + (theme === 'white_small' ? styles.buttonsWhiteSmall : '')
    + ' ' + (theme === 'white_large' ? styles.buttonsWhiteLarge : '')
    + ' ' + (theme === 'gold_large' ? styles.buttonsGoldLarge : '')
    + ' ' + (casing === 'capitalize' ? styles.buttonCapitalize : '')} onClick={onClick}>
        {title}
    </section>
}