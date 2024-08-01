'use client'
import { useEffect, useState } from 'react'

const Hero = () => {
    const [scrollOpacity, setScrollOpacity] = useState()

    useEffect(() => {
        console.log(window.scrollY)
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
        <div className='sticky top-0 pt-40 flex flex-col items-center pb-52' style={styles}>
            <p className={`text-7xl font-bold text-white max-lg:text-5xl`}>Milad Gharavi</p>
            <p className={`mt-8 text-zinc-200 text-lg`}>Architecture</p>
            <div
                onClick={() => {
                    if (screen.width <= 1024) {
                        scrollTo(0, 570)
                    } else {
                        scrollTo(0, 600)
                    }
                }}
                className='cursor-pointer scale-50 relative mt-16 border-white border-[2px] border-solid rounded-full w-28 h-28'>
                <div className='absolute top-[53%] left-[50%] translate-x-[-50%] translate-y-[-55%] w-1 h-14 bg-white origin-bottom rotate-45'></div>
                <div className='absolute top-[53%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1 h-14 bg-white origin-bottom rotate-[315deg]'></div>
            </div>
        </div>
    )
}

export default Hero