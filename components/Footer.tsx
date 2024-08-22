'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import Link from 'next/link'

const linkSocial = [
    {
        icon: <BsGithub />,
        href: 'https://github.com/CuriousSavant',
    },
    // add social media here....
]

const Footer = () => {
    return (
        <div className='mt-16 mb-10'>
            <div className='flex justify-center space-x-6 items-center'>
                {linkSocial.map((link, index) => (
                    <motion.div
                        key={index}
                        className='hover:cursor-pointer text-2xl rounded-md mt-2'
                        whileHover={{
                            y: -5,
                        }}>
                        <Link href={link.href} className='hover:text-pink-600 transition duration-150 ease-in-out'>{link.icon}</Link>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Footer