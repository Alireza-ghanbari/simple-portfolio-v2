import React from 'react'
import logo from "../assets/logo.png"
import { SOCIAL_MEDIA_LINKS } from '../constants'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <div className='mb-8 mt-20'>
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          src={logo} width={200} className='my-14' />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            key={index} href={link.href} target='_blank' rel='nooperner noreferrer'>
            {link.icon}
          </motion.a>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='mt-8 text-center text-sm tracking-wide text-gray-400'>
        &copy;Alireza Ghanbari. All right reserved.
      </motion.p>
    </div>
  )
}
