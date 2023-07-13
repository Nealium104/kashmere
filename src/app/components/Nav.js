'use client'

import { FaBars, FaFacebook, FaInstagram, FaRegEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export default function Nav () {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className='w-screen flex justify-end h-20'>
            <div className='flex items-center justify-evenly text-3xl w-2/3 md:w-1/3 sticky'>
                <span className='font-bold block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>KCK</span>
                <a className="transition duration-150 hover:scale-110 hover:text-pink-500" href="https://www.facebook.com/ShindigPro"><FaFacebook /></a>
                <a className="transition duration-150 hover:scale-110 hover:text-pink-500" href="https://www.instagram.com/shindigproductions/"><FaInstagram /></a>
                <a className="transition duration-150 hover:scale-110 hover:text-pink-500" href="mailto:tegevans@icloud.com"><FaRegEnvelope /></a>
            </div>
        </nav>
    )
}