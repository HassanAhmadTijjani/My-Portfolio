import React from 'react'

const Navbar = () => {
  return (
      <div className="bg-slate-800 text-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">HAT</h1>
                  <ul className="flex gap-6">
                      <li><a href="#about" className='hover:text-blue-500 hover:bg-white transition-colors duration-300 p-2 rounded-md'> About </a></li>
                      <li><a href="#skills" className='hover:text-blue-500 hover:bg-white transition-colors duration-300 p-2 rounded-md'> Skills </a></li>
                      <li><a href="#projects" className='hover:text-blue-500 hover:bg-white transition-colors duration-300 p-2 rounded-md'> Projects </a></li>
                      <li><a href="#contact" className='hover:text-blue-500 hover:bg-white transition-colors duration-300 p-2 rounded-md'> Contact </a></li>
                </ul>
            </div>
              
        </div>
          
    </div>
  )
}

export default Navbar