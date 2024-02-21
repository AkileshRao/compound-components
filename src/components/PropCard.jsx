import React from 'react'
import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube, IoLogoLinkedin, IoArrowBack, IoEllipsisVerticalOutline } from "react-icons/io5";

const PropCard = ({ name, role, imageSrc, imageAlt, onBackClick, onOptionsClick, onMessageClick, onCallClick }) => {
    return (
        <div className='bg-white min-w-[320px] rounded-lg flex flex-col items-center justify-center p-5'>
            <div className='flex justify-between w-full mb-2'>
                <button className='text-gray-400' onClick={onBackClick}>
                    <IoArrowBack />
                </button>
                <button className='text-gray-400' onClick={onOptionsClick}>
                    <IoEllipsisVerticalOutline />
                </button>
            </div>
            <img src={imageSrc} alt={imageAlt} width={150} height={150} className='rounded-full' />
            <h1 className='text-2xl font-bold text-center text-gray-800 mt-3'>{name}</h1>
            <h3 className='text-md font-medium text-center text-gray-800 mb-2'>{role}</h3>
            <div className='flex items-center justify-center gap-4 my-4'>
                <button className='text-xl text-gray-400'>
                    <IoLogoInstagram />
                </button>
                <button className='text-xl text-gray-400'>
                    <IoLogoLinkedin />
                </button>
                <button className='text-xl text-gray-400'>
                    <IoLogoTwitter />
                </button>
                <button className='text-xl text-gray-400'>
                    <IoLogoYoutube />
                </button>
            </div>
            <div className='flex items-center justify-center w-full gap-2 mt-2'>
                <button className='border-2 px-2 py-1.5 rounded text-sm font-bold w-full bg-sky-700 text-white'>
                    Message
                </button>
                <button className='border-2 px-2 py-1.5 rounded text-sm font-bold w-full text-gray-400 bg-white'>
                    Call
                </button>
            </div>
        </div>
    )
}

export default PropCard