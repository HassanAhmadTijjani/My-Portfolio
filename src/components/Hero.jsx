import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

const Hero = () => {
    return (
        <div>
            <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
                <div className="text-left max-w-4xl px-4 w-50">
                    <h1 className="text-5xl font-bold">
                        Hassan Ahmad Tijjani
                    </h1>
                    <p className=" text-blue-400 mb-6">
                        Frontend Developer
                    </p>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Frontend developer with full-stack capabilities, passionate about clean code and user experience
                    </p>
                    <div className='flex justify-center gap-4 mb-8'>
                        <a href="#projects" className='bg-blue-500 hover:bg-opacity-75 text-white px-8 py-4 rounded-lg font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 '> View Projects </a>
                        <a href="#contact" className='border-2 border-blue-500 hover:bg-blue-600 hover:bg-blue-500 text-blue-500   hover:text-white rounded-lg font-semibold transition delay-150 duration-300 px-8 py-4 ease-in-out hover:-translate-y-1'>Contact Me</a>
                    </div>
                    {/* Social Media Links */}
                    <div className="flex gap-6 justify-center">
                        <a href="https://github.com/HassanAhmadTijjani" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">
                            <Github size={28} />
                        </a>
                        <a href="https://linkedin.com/in/hassan-ahmad-tijjani-a0a0aa383" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">
                            <Linkedin size={28} />
                        </a>
                        <a href="https://twitter.com/@HassanPopey" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">
                            <Twitter size={28} />
                        </a>
                    </div>
                </div>
                <div className='w-50'>
                    <img src="./assests/pic.jpeg" alt="My Photo" />
                </div>
            </section>
        </div>
    )
}

export default Hero