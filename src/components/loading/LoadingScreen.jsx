import Image from 'next/image'
import React from 'react'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500">
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 animate-pulse">
        <Image
          src="/assets/images/icon.png"
          alt="Loading..."
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />

      <p className="mt-4 text-lg md:text-xl text-gray-700 font-medium">Loading...</p>
    </div>
  </div>
  )
}

export default LoadingScreen