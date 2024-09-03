'use client'

import React from 'react'
import { CONFIG } from '@/lib/index'
import Highlight from './Highlight'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='px-2.5 md:p-2 lg:p-0'>
      <div className='w-full mt-0 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col pt-16 gap-4'>
          <h1 className='text-4xl md:text-6xl tracking-tighter text-gray-900 dark:text-white text-center md:text-start'>
            {CONFIG.NAME}
          </h1>
          <p className="mt-6 md:w-4/5 text-gray-900 dark:text-white text-md text-center md:text-start font-thai">
            สวัสดีครับ ผมชื่อ <Highlight>อาร์ม</Highlight> อายุ <Highlight>{2024 - 2007}</Highlight> ปี
            ผมสร้างเว็บนี้ขึ้นมาเพื่อทดสอบ skill ของผม
          </p>
        </div>
        <div className="md:flex hidden justify-center items-center">
          <motion.div
            className="flex flex-col items-center justify-center"
            whileHover={{ scale: 1.025 }}
          >
            <img
              src={CONFIG.AVATAR_URL}
              alt="curiousSavant"
              className="rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;