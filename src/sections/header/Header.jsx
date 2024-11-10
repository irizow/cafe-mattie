import styles from './header.module.css';
import logoImg from '../../assets/images/coffee-svgrepo-com.svg';
import instagramSVG from '../../assets/images/instagram.svg'
import hamburgerMenu from '../../assets/images/hamburgermenu.svg'
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function Header() {

    const [isDropdown, setIsDropdown] = useState(false);

    function Dropdown() {
        return (
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className={styles.dropdown}>
                <a onClick={()=>{setIsDropdown(false)}} href='#about'>Nosotros</a>
                <a onClick={()=>{setIsDropdown(false)}} href='#menu'>Menu</a>
                <a onClick={()=>{setIsDropdown(false)}} href='#events'>Eventos</a>
                <div>
                    <a target='_blank' href='https://www.instagram.com/cafemattie/'><img src={instagramSVG} alt='instagramicon'></img></a>
                </div>
            </motion.div>
        )
    }

    return (
        <section className={styles.header}>
            <a href='#hero'>
                <figure>
                <img src={logoImg} alt='café mattie logo'></img>
                <figcaption>CAFE MATTIE</figcaption>
                </figure>
            </a>
            <nav className={styles.headernav}>
                <a href='#about'>Nosotros</a>
                <a href='#menu'>Menu</a>
                <a href='#events'>Eventos</a>
                <a target='_blank' href='https://www.instagram.com/cafemattie/'><img src={instagramSVG} alt='instagram icon'></img></a>
            </nav>
            <img className={isDropdown ? `${styles.hamburgermenu} ${styles.open}` : styles.hamburgermenu} src={hamburgerMenu} alt='hamburger menu icon' onClick={()=>setIsDropdown(!isDropdown)}></img>
            {isDropdown && <Dropdown/>}
        </section>
    )
}