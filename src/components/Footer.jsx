import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
      <>
          <div className="bg-slate-700  text-white">
              <div className="max-w-4xl px-4 mx-auto  flex justify-center items-center py-8 md:text-3xl">
                  <h1>All right reserved <Heart className="inline" size={ 24 } /> HassanAhmadTijjani 2026</h1> 
              </div>
        </div>
      </>
  )
}

export default Footer