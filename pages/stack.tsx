'use client'

import React from 'react'
import { stackProps } from '@/lib/stack';
import Image from 'next/image';
import { motion } from 'framer-motion';

const StackPage = () => {
  return (
    <div className='mt-16 w-full'>
      <div className='flex flex-col text-center'>
        <div>
          <h1 className='text-3xl mb-2'>Tech Stack</h1>
          <p>Here are the technologies I’m currently using.</p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-16 place-items-center'>
          {stackProps.map((icon, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className='cursor-pointer bg-gray-300 dark:bg-gray-800 flex flex-col justify-center items-center p-4 md:w-128 md:h-128 rounded-md'
            >
              <a href={icon.href} className='relative w-24 h-24'>
                <Image
                  src={icon.icon}
                  alt={icon.title}
                  layout='fill'
                  objectFit='contain'
                />
              </a>
              <h1 className='text-gray-800 dark:text-white mt-2 text-sm'>{icon.title}</h1>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StackPage;