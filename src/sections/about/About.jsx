import styles from './about.module.css';
import cafeInterior from '../../assets/images/cafeinterior.jpg'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const title = useRef(null)
    const isTitleInView = useInView(title, { once: true });
    const description = useRef(null)
    const isDescInView = useInView(description, {once: true})

    return (
        <section className={styles.about} id='about' >
            <motion.h1
            ref={title}
            animate={isTitleInView ? {x: 0, opacity: 1} : {x: -100, opacity: 0}}
            transition={{duration: 1}}
            >SOBRE NOSOTROS</motion.h1>
            <motion.div
            ref={description}
            animate={isDescInView ? { opacity: 1} : {opacity: 0}}
            transition={{duration: 1, ease: 'easeIn'}}
            >
                <p><em>CAFÉ MATTIE</em> es mucho más que un simple café; es un punto de encuentro y un espacio de experimentación, todo en uno. Fundado en 2024 por Alex, comenzó como un pequeño rincón escondido en el encantador pueblo de El Masnou, cerca de Barcelona, justo frente al mar Mediterráneo. Inspirado por la energía del mar y la cercanía de la comunidad, este café se ha convertido en un lugar especial para los vecinos y en un tesoro escondido para los amantes del buen café, que buscan los mejores granos tostados de diferentes partes del mundo. <br></br><br></br>
                Con el tiempo, <em>CAFÉ MATTIE</em> ha ido creciendo, no solo en popularidad, sino también en su oferta. Además de una excelente selección de cafés, organizan eventos variados, desde conciertos acústicos hasta sesiones de tarot, creando una atmósfera única y vibrante. La pasión del equipo por el café y su compromiso con la cultura local se refleja en cada detalle. Te invitamos a pasar, disfrutar de un café con vistas al mar, y descubrir todo lo que este espacio especial tiene para ofrecer. ¡Nos vemos en El Masnou!</p>
            
                    <img src={cafeInterior} alt='Foto del interior de Café Mattie'></img>
            </motion.div>
        </section>
    )
}