'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MdEmail, MdMenu } from 'react-icons/md';
import { CONFIG } from '@/lib';
import { motion, AnimatePresence } from 'framer-motion';
import Highlight from './Highlight';
import { BsInstagram } from 'react-icons/bs';

const NavLinks = [
  {
    name: 'home',
    href: '/',
    open: true,
  },
  {
    name: 'stack',
    href: '/stack',
    open: true,
  },
];

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState<string>('/');

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  const handleLinkClick = (href: string) => {
    setCurrentPage(href);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className='w-full px-2.5 md:p-2 lg:p-0'>
      <nav className='h-24 flex justify-between items-center'>
        <div className='flex items-center'>
          <h1
            onClick={() => {
              window.location.href = "/";
            }}
            className="flex flex-row justify-center items-center text-white text-3xl mr-5"
          >
            <div className="hover:cursor-pointer text-lg md:text-3xl">
              {CONFIG.NICKNAME}
            </div>
          </h1>
          <ul className='md:flex space-x-4 ml-12 hidden'>
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`${currentPage === link.href ? 'text-teal-500 font-bold' : ''}`}
                >
                  /{link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='text-black'>
          <motion.button
            className='bg-teal-500 text-lg p-2 smooth rounded-md font-semibold hidden md:flex items-center hover:bg-teal-600'
            whileHover={{
              y: -5
            }}
            onClick={toggleDropdown}
          >
            <MdEmail className='mr-2' />
            Contact Me
          </motion.button>
          <button
            className='block md:hidden bg-teal-500 p-2.5 rounded-md smooth hover:bg-teal-600'
            onClick={toggleDropdown}
          >
            <MdMenu />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isDropdownOpen && <MobileDropDown currentPage={currentPage} onLinkClick={handleLinkClick} closeDropdown={toggleDropdown} />}
      </AnimatePresence>
    </div>
  );
};

const MobileDropDown = ({ currentPage, onLinkClick, closeDropdown }: { currentPage: string, onLinkClick: (href: string) => void, closeDropdown: () => void }) => {
  return (
    <motion.div
      className="fixed top-20 w-screen px-10
      flex flex-col overflow-y-scroll
      bg-black shadow-xl space-y-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {NavLinks.map((link, key) => {
        if (!link.open) return null;
        return (
          <motion.div
            className={`hover:cursor-pointer hover:bg-gray-800 text-center py-2.5 rounded-md ${currentPage === link.href ? 'bg-teal-500 hover:bg-teal-400' : ''}`}
            onClick={() => {
              onLinkClick(link.href);
              window.location.href = link.href;
              closeDropdown(); // Close dropdown after clicking link
            }}
            key={key}
            whileHover={{ y: -5 }}
          >
            <p className="text-white text-xl">
              <Highlight>/</Highlight>
              {link.name}
            </p>
          </motion.div>
        );
      })}
      <motion.div
        className="hover:cursor-pointer bg-teal-500 hover:bg-teal-400
        text-center text-xl py-2.5 rounded-md
        mt-2.5 flex justify-center items-center"
        whileHover={{
          y: -5,
        }}
        onClick={() => {
          window.location.href = 'https://www.instagram.com/junior_dev175/';
          closeDropdown(); // Close dropdown after clicking link
        }}
      >
        <BsInstagram className='mr-2' />
        <p className="text-epic-black">Contact Me</p>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;

