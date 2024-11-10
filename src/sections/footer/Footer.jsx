import styles from './footer.module.css';

export default function Footer() {
    return (
        <section className={styles.footer}>
            <p>Todos los días de 8h a 20h</p>
            <p>Café Mattie. Passeig Prat de la Riba, 41, 08320 El Masnou, Barcelona</p>
            <p>Created by <a>Built by Lime, with ♥</a></p>
        </section>
    )
}