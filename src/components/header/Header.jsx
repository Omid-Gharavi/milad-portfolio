'use client'
// import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className='fixed top-0 z-50 w-full h-[70px] bg-[#191919] flex items-center justify-between px-3'>
            <div>
                <div className='w-14 h-14 rounded-full bg-zinc-600'>
                    {/* <Image src={''} alt='profile' /> */}
                </div>
            </div>
            <div
                className='relative cursor-pointer w-28 h-12 rounded-3xl bg-zinc-600 flex justify-between items-center'
                onClick={() => setToggle(!toggle)}
            >
                <div
                    className={`z-20 absolute w-10 h-10 rounded-full bg-white transition-all duration-300 ease-in-out 
                        ${toggle ? 'left-[68px]' : 'left-1'}`}
                ></div>
                <p className={`text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0'}`}>en</p>
                <p className={`text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-300 ease-in-out ${toggle ? 'opacity-0' : 'opacity-100'}`}>fa</p>
            </div>
        </div>
    )
}

export default Header