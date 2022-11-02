import React from 'react'
import Single from '../assets/images/single.png'
import Double from '../assets/images/double.png'
import Triple from '../assets/images/triple.png'

export default function Cards() {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 '>1 Granted User</p>
                        <p className='py-2 border-b mx-8 '>500 GB Storage</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 py-3'>Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 '>1 Granted User</p>
                        <p className='py-2 border-b mx-8 '>500 GB Storage</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 py-3'>Start Trial</button>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 '>1 Granted User</p>
                        <p className='py-2 border-b mx-8 '>500 GB Storage</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-md font-medium w-[200px] mx-auto my-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}
