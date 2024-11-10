import styles from './hero.module.css';
import { motion } from 'framer-motion';
export default function Hero() {
    return (
        <motion.section
            id='hero'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: 'easeIn'}}
         className={styles.hero}>
            <div>
                <h1>CAFÉ MATTIE</h1>
            </div>
            <a href='#menu'>
                <button>MENU</button>
            </a>
        </motion.section>
    )
}