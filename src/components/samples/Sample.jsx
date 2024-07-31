import { lists } from '@/data/sample'
import Link from 'next/link'
import React from 'react'

const Sample = () => {
    return (
        <div className='bg-[#1f1f1f] relative mt-52 grid justify-center grid-cols-[537px_537px] gap-4'>
            {
                lists.map((list, index) => (
                    <Link href={`/sample/${index + 1}`} key={index + 1} className='bg-zinc-700 h-[430px] flex flex-col'>
                        {/* <Image src={list.img} alt="img" /> */}
                        <div className='bg-black mt-auto text-white py-10 flex justify-center'>{list.text}</div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sample