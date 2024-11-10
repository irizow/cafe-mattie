import styles from './footer.module.css';

export default function Footer() {
    return (
        <section className={styles.footer}>
            <p>Café Mattie. Passeig Prat de la Riba, 41, 08320 El Masnou, Barcelona</p>
            <p>Created by <a>Built by Lime, with ♥</a></p>
        </section>
    )
}