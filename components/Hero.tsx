'use client'

import React from 'react'
import { CONFIG } from '@/lib/index'
import Highlight from './Highlight'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='px-2.5 md:p-2 lg:p-0'>
      <div className='w-full mt-0 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex flex-col pt-16 gap-4 mx-auto'>
          <h1 className='text-4xl md:text-6xl tracking-tighter text-red-500 dark:text-white text-center md:text-start'>
            {CONFIG.NAME}
            <p className="text-3xl hidden md:block">
              <i>Aka&nbsp;</i>
              <Highlight>{CONFIG.AKA}</Highlight>
            </p>
          </h1>
          <p className="mt-6 text-white text-md text-center md:text-start">
            I am {2024 - 2007}, still a student and not ready to take on work yet. Currently, I have various skills such as{" "}
            <LanguageLink
              name={"typescript"}
              href={"https://www.typescriptlang.org/"}
              color={"text-blue-500"}
            /> and,
            <LanguageLink
              name={"java"}
              href={"https://www.java.com/"}
              color={"text-yellow-600"}
            /> The main tools I use are just these for now. You can view my <Highlight>stack</Highlight> on the Stack page.
            <br />
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
              className="mx-auto md:h-128 md:w-128 max-w-md w-full object-cover rounded-3xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface LanguageLinkProps {
  name: string;
  href: string;
  color: string
}

const LanguageLink = ({ name, href, color }: LanguageLinkProps) => {
  return (
    <span
      className={color + " " + "hover:cursor-pointer"}
      onClick={() => (window.location.href = href)}
    >
      {name}
    </span>
  );
};

export default Hero;