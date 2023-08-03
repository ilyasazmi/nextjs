import React from 'react'
import VideoWistia from './VideoWistia'
import Image from 'next/image'

const Body = () => {
  return (
    <div>
      <div
        className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto"
      >
        <div className="2xl:max-w-7xl flex flex-wrap mx-auto gap-10">
          <div
            className="lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0 flex flex-col items-start mb-16"
          >
            <h1
              className="text-green-600 md:text-6xl lg:text-8xl mb-8 text-4xl font-extrabold leading-none tracking-tighter"
            >
              <span className="text-gray-900">Saraf Emas</span> Membantu Melegakan
            </h1>
            <p className="mb-8 leading-relaxed text-left text-gray-800 text-1xl">
              Sakit Pada Saraf, Sendi, Pinggang, Angin Ahmar, Saraf Tersepit, Slip Disc & Juga Untuk Bantu Hilangkan Rasa Kebas, Semut & Sakit Mencucuk-cucuk Pada Jari Kaki & Tangan
            </p>
            
          </div>
          
          
          <div className="lg:w-5/6 lg:max-w-lg xl:mt-0 w-full mt-12">
            <div className="relative">
              <Image
                src="./img_69.png"
                width={500}
                height={500}    
                alt="saraf emas"
                className="relative z-10 transform rotate-6 shadow-2xl"
              />
              <div
                className="absolute -top-10 -left-24 w-full h-full bg-green-500 transform -rotate-6 ml-16"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-9">
        <VideoWistia />
      </div>

        
    </div>
  )
}

export default Body