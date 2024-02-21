import React from 'react'
import { twMerge } from 'tailwind-merge';

const cardClasses = 'bg-white min-w-[320px]  rounded-lg flex flex-col items-center justify-center p-5';
const headerClasses = 'flex justify-between w-full mb-2';
const nameClasses = 'text-2xl font-bold text-center text-gray-800';
const roleClasses = 'text-md font-medium text-center text-gray-800';
const socialsClasses = 'flex items-center justify-center gap-4 my-4';
const socialButtonClasses = 'text-xl text-gray-400';
const actionsClasses = 'flex items-center justify-center w-full gap-2 mt-2'
const actionButtonClasses = (type) => twMerge('border-2 px-2 py-1.5 rounded text-sm font-bold w-full', type === 'primary' ? 'bg-sky-700 text-white' : 'text-gray-400 bg-white');

const Card = ({ children }) => <div className={cardClasses}> {children} </div>
const Header = ({ children }) => <div className={headerClasses}> {children} </div>
const Image = ({ src, alt }) => <img src={src} alt={alt} width={150} height={150} className='rounded-full' />
const Name = ({ children }) => <h1 className={nameClasses}>{children}</h1>
const Role = ({ children }) => <h3 className={roleClasses}>{children}</h3>
const Socials = ({ children }) => <div className={socialsClasses}> {children} </div>
const SocialButton = ({ children }) => <button className={socialButtonClasses}> {children} </button>
const Actions = ({ children }) => <div className={actionsClasses}> {children} </div>

const HeaderButton = ({ children, onClick }) =>
    <button className='text-gray-400' onClick={onClick}>
        {children}
    </button>

const ActionButton = ({ children, type, onClick }) =>
    <button className={actionButtonClasses(type)} onClick={onClick}>
        {children}
    </button>


export {
    Card, Header, ActionButton, Actions, HeaderButton, Image, Name, Role, SocialButton, Socials,
}