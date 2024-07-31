'use client'
import { useEffect, useState } from 'react'

const Hero = () => {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            const newOpacity = 1 - (position / 300); // Adjust 500 to change the scroll threshold
            console.log(newOpacity)

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
            <p className='text-7xl font-bold text-white'>Milad Gharavi</p>
            <p className='mt-8 text-zinc-200 text-lg'>Architecture</p>
        </div>
    )
}

export default Hero