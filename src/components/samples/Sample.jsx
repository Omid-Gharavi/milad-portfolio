import { lists } from '@/data/sample'
import React from 'react'

const Sample = () => {
    return (
        <div className='relative mt-52 grid justify-center grid-cols-[537px_537px] gap-4'>
            {
                lists.map(list => (
                    <div className='bg-zinc-700 h-[430px] flex flex-col'>
                        <img src={list.img} alt="img" />
                        <div className='bg-black mt-auto text-white py-10 flex justify-center'>{list.text}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Sample