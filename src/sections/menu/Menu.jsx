import styles from './menu.module.css';
import latteImg from '../../assets/images/latte.jpg'
import sandwichImg from '../../assets/images/sandwich.jpg'
import mojitoImg from '../../assets/images/mojito.jpg'
import bananaImg from '../../assets/images/banana.jpg'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Menu() {
    const title = useRef(null)
    const isTitleInView = useInView(title, { once: true });

    const menuItems = [
        {   
            img: latteImg,
            title: 'CAFÉ',
            alt: 'Foto de un latte de caramelo',
            items: ['Espresso', 'Café con Leche', 'Capuccino', 'Chai Latte', 'Dirty Chai', 'Dirty Smoothie', 'Matcha']
        },
        {   
            img: sandwichImg,
            alt: 'Foto de un bocadillo de pollo',
            title: 'BOCADILLOS',
            items: ['Jamón Serrano', 'Tortilla de Patata', 'Atún', 'Pollo', 'Fuet', 'Aguacate', 'Hummus']
        },
        {   
            img: bananaImg,
            alt: 'foto de un banana bread',
            title: 'TARTAS',
            items: ['Banana Bread', 'Carrot Cake']
        },
        {   
            img: mojitoImg,
            alt: 'foto de un mojito',
            title: 'COCKTAILS',
            items: ['Mojito', 'Cuba Libre', 'Gin & Tonic', 'Cervezas', 'Vinos']
        },
    ]

    function MenuItem({img, title, items, alt}) {
        const picture = useRef(null);
        const isPictureInView = useInView(picture, {once: true})
        return (
            <div className={styles.menupair}>
                <motion.img
                ref={picture}
                animate={{scale: isPictureInView ? 1 : 0.60,  // Keep scale change small
                    opacity: isPictureInView ? 1 : 0 }}
                transition={{duration: 0.6, ease: 'easeIn'}}
                src={img}
                alt={alt}
                 />
                <ul>
                    <h2>{title}</h2>
                    {items.map((item, index)=> (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </div>
        )
    }
    return (
        <section className={styles.menu} id='menu'>
            <motion.h1
            ref={title}
            animate={isTitleInView ? {x: 0, opacity: 1} : {x: -100, opacity: 0}}
            transition={{duration: 1}}
            >Menu</motion.h1>
            <div className={styles.menucontainer}>
                {menuItems.map((item, index)=> (
                    <MenuItem key={index} title={item.title} alt={item.alt} img={item.img} items={item.items} />
                ))}
                
            </div>
        </section>
    )
}