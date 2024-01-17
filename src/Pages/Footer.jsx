import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub  } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <div className='grid lg:grid-cols-3 mt-10  mx-auto'>
            <div className='mt-8'>
                <img className="h-48 s-48" src="https://www.torquevision.ai/assets/images/torqvision.png" alt="logo" />
                <h1 className='uppercase text-red-500'>
                    Determined AI Expert
                </h1>
            </div>
            <div className='mt-8'>
                <h1 className='text-2xl mb-4'>Quick Links</h1>
                <p className='ml-2 mt-2'>About</p>
                <p className='ml-2 mt-2'>Work</p>
                <p className='ml-2 mt-2'>Contact</p>
            </div>
            <div className='mt-8' >
                <h1 className='text-2xl'>Social Media</h1>
                <div className='flex mt-4 ml-2 text-2xl'>
                <FaFacebook className='mr-4'/>
                <FaTwitter className='mr-4'/>
                <FaGithub  className='mr-4'/>
                <FaInstagram  className='mr-4'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer