import {FaBars, FaFacebook, FaInstagram, FaRegEnvelope} from 'react-icons/fa'

export default function Footer () {
    return (
        <>
        <div className='text-3xl w-1/2 flex justify-evenly mx-auto my-4'>
        <a className="transition duration-150 hover:scale-110 hover:text-pink-500" href="https://www.facebook.com/ShindigPro"><FaFacebook /></a>
                <a className="transition duration-150 hover:scale-110 hover:text-pink-500" href="https://www.instagram.com/shindigproductions/"><FaInstagram /></a>
                <a className="transition duration-150 hover:scale-110 hover:text-pink-500" href="mailto:tegevans@icloud.com"><FaRegEnvelope /></a>
        </div>
        </>
    )
}