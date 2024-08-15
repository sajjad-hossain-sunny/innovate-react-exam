import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className='bg-transparent fixed w-full top-9.25'>
            <div className="container flex justify-between items-center">
                <img src="/Logo.png" alt="Logo" />
                <div className="font-dm font-medium text-lg text-white flex gap-12.5">
                    <select className='bg-transparent border-0 focus:outline-0' name="" id="">
                        <option value="">Home</option>
                    </select>
                    <a href="#" className="">Features</a>
                    <select className='bg-transparent border-0 focus:outline-0' name="" id="">
                        <option value="">Service</option>
                    </select>
                    <select className='bg-transparent border-0 focus:outline-0' name="" id="">
                        <option value="">Pages</option>
                    </select>
                    <a href="#" className="">Blog</a>
                </div>
                <div className="flex items-center gap-9">
                    <a href="#" className='font-dm font-medium text-lg text-white'>Login</a>
                    <Button title="register" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
