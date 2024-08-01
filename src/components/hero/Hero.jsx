'use client'
import { useEffect, useState } from 'react'

const Hero = () => {
    const [scrollOpacity, setScrollOpacity] = useState()

    useEffect(() => {
        if (window.scrollY >= 300) {
            setScrollOpacity(0)
        }
        const handleScroll = () => {
            const position = window.scrollY;
            const newOpacity = 1 - (position / 280); // Adjust 300 to change the scroll threshold
            setScrollOpacity(newOpacity < 0 ? 0 : newOpacity); // Ensure opacity doesn't go below 0
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const styles = {
        opacity: scrollOpacity,
    };

    return (
        <div className='sticky top-0 pt-40 flex flex-col items-center' style={styles}>
            <p className={`text-7xl font-bold text-white max-lg:text-5xl`}>Milad Gharavi</p>
            <p className={`mt-8 text-zinc-200 text-lg`}>Architecture</p>
        </div>
    )
}

export default Hero