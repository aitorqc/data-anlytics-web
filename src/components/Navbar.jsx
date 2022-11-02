import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white select-none'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <div className={nav
                ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in duration-300"
                : "fixed top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] left-[-100%] ease-out duration-500"}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-7'>REACT.</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-gray-600 border-b">Home</li>
                    <li className="p-4 border-gray-600 border-b">Company</li>
                    <li className="p-4 border-gray-600 border-b">Resources</li>
                    <li className="p-4 border-gray-600 border-b">About</li>
                    <li className="p-4 border-gray-600 border-b">Contact</li>
                </ul>
            </div>
        </div>
    )
}
