'use client'

import { FaBars, FaFacebook, FaInstagram, FaRegEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export default function Nav () {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <nav className='w-screen flex flex-col'>
            <div className='text-5xl flex justify-end m-4'>
                <button onClick={toggleMenu}>
                    <FaBars />
                </button>
            </div>
            <div className='flex justify-end text-5xl sticky'>
                <div className={`bg-purple-500/50 fixed p-10 flex-grow ${menu ? 'visible' : 'hidden'}`}>
                    <ul className='flex flex-col justify-between items-center'>
                        <li className='my-4'><a href="https://www.facebook.com/ShindigPro"><FaFacebook/></a></li>
                        <li className='my-4'><a href="https://www.instagram.com/shindigproductions/"><FaInstagram/></a></li>
                        <li className='my-4'><a href="mailto:tegevans@icloud.com"><FaRegEnvelope /></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}