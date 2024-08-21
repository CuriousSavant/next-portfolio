'use client'

import React from 'react'
import { CONFIG } from '@/lib/index'
import Highlight from './Highlight'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <div className='px-2.5 md:p-2 lg:p-0'>
      <div className='w-full mt-0 md:mt-20 flex flex-row text-center md:text-left'>
        <div className='flex flex-col w-full md:w-4/5 lg:w-1/2 pt-16 gap-4 mx-auto'>
          <h1 className='text-5xl md:text-6xl tracking-tighter text-white'>
            {CONFIG.NAME}
            <p className="text-3xl hidden md:block">
              <i>Aka&nbsp;</i>
              <Highlight>{CONFIG.AKA}</Highlight>
            </p>
          </h1>
          <p className="mt-6 text-white text-md">
            I am a 17 year old software developer living{" "}
            in&nbsp;{CONFIG.LOCATION}.
            <br />
            <br />I have <Highlight>
              over 2 years
            </Highlight>{" "}
            of experience in software development, and I am currently
            working with&nbsp;
            <LanguageLink
              name={"typescript"}
              href={"https://www.typescriptlang.org/"}
              color={"text-blue-500"}
            />
            ,&nbsp;
            <LanguageLink
              name={"java"}
              href={"https://www.java.com/"}
              color={"text-yellow-600"}
            />
            &nbsp;and&nbsp;
            <LanguageLink
              name={"c++"}
              href={"https://docs.microsoft.com/en-us/dotnet/csharp/"}
              color={"text-pink-500"}
            />
            <br />
          </p>
        </div>
        <div className="md:flex flex-col w-1/2 hidden">
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

export default Hero