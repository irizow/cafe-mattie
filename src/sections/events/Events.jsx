import styles from './events.module.css';
import { useEffect, useState } from 'react';
import evento1 from '../../assets/images/evento1.jpg';
import evento2 from '../../assets/images/evento2.jpg';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Events() {
    const title = useRef(null)
    const isTitleInView = useInView(title, { once: true });

    const [index, setIndex] = useState(0);
    const eventos = [{
        name: 'Evento 1',
        src: evento1,
        alt: `foto de evento`
    },
    {
        name: 'Evento 2',
        src: evento2,
        alt: `foto de evento`
    }
]

    useEffect(()=> {
        const interval = setInterval(()=>{
            setIndex((prevIndex) => (prevIndex === eventos.length - 1 ? 0 : prevIndex + 1));
        }, 5000)
        return () => clearInterval(interval);
    }, [])

 
    return (
        <section className={styles.events} id='events'>
            <motion.h1
            ref={title}
            animate={isTitleInView ? {x: 0, opacity: 1} : {x: -100, opacity: 0}}
            transition={{duration: 1}}>EVENTOS</motion.h1>´
            <div className={styles.eventwrapper}>
                <div className={styles.eventtext}>
                    <p>En <em>CAFÉ MATTIE</em> también celebramos una gran variedad de eventos, desde encuentros de emprendedores hasta sesiones de dj, nunca nos aburrimos</p>
                    <p>Si quieres celebrar tu evento con nosotros escribenos a cafemattie@gmail.com</p>
                </div>
                <div className={styles.imgwrapper}>
                {eventos.map((evento ,idx) => (
                        <img className={idx === index ? styles.active : ''} src={evento.src} alt={evento.alt} />
                ))}
                </div>
                
            </div>
        </section>
    )
}