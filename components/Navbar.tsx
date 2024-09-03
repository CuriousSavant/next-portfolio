import React, { useState, useEffect } from 'react';
import { MdMenu, MdDarkMode, MdLightMode } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import Link from 'next/link';
import { CONFIG } from '@/lib';
import { motion, AnimatePresence } from 'framer-motion';
import Highlight from './Highlight';
import Logo from './logo';

const navLinks = [
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setCurrentPage(window.location.pathname);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className='w-full px-2.5 md:p-2 lg:p-0'>
      <nav className='h-32 flex justify-between items-center'>
        <div className='flex items-center'>
          <h1 onClick={() => { window.location.href = "/" }}
            className="flex flex-row justify-center items-center text-white text-3xl mr-5">
            <div className="hover:cursor-pointer text-xl md:text-3xl text-gray-900 dark:text-white">
              <Logo />
            </div>
          </h1>
          <div className='md:flex space-x-4 ml-12 hidden'>
            {navLinks.map((link, index) => (
              <Link
                href={link.href}
                onClick={() => setCurrentPage(link.href)}
                className={`${currentPage === link.href ? 'text-teal-500 font-bold border-b-2 border-teal-500' : 'text-black dark:text-white'}`}>
                /{link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex items-center text-black'>
          <button
            className='border-2 border-teal-500 text-teal-500 text-lg p-2 smooth 
            font-semibold hidden md:flex items-center focus:bg-teal-500
            focus:text-black rounded-md hover:bg-teal-500 hover:text-gray-200'
            onClick={() => window.location.href = 'https://www.instagram.com/junior_dev175/'}>
            <BsInstagram className='mr-2' />
            Contact Me
          </button>
          <button
            className='block md:hidden bg-teal-500 p-2.5 rounded-md smooth hover:bg-teal-600'
            onClick={toggleDropdown}>
            <MdMenu />
          </button>
          <button
            className='ml-4 p-2 rounded-full dark:bg-gray-200 dark:hover:bg-gray-300'
            onClick={toggleTheme}>
            {theme === 'light' ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
          </button>
        </div>
      </nav >
      <AnimatePresence>
        {isDropdownOpen && <MobileDropDown currentPage={currentPage} onLinkClick={setCurrentPage} closeDropdown={toggleDropdown} />}
      </AnimatePresence>
    </div >
  );
};

const MobileDropDown = ({ currentPage, onLinkClick, closeDropdown }: { currentPage: string, onLinkClick: (href: string) => void, closeDropdown: () => void }) => {
  return (
    <motion.div
      className="fixed top-20 w-screen px-10 py-8
      flex flex-col overflow-y-scroll bg-gray-100
      dark:bg-gray-900 shadow-xl space-y-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {navLinks.map((link, key) => {
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
            <p className="text-gray-900 dark:text-white text-xl">
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