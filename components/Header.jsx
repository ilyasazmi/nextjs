import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="bg-white">
      <header>
      <nav className="flex items-center justify-between p-6 container mx-auto">
        {/* <!-- Logo --> */}
        <Link href="/" className="relative text-2xl font-extrabold">
          <span className="absolute w-10 h-2 bg-green-400 bottom-1 right-0"></span><span className="relative z-10">Saraf<span className="text-emerald-400">Emas</span>.net</span>
        </Link>

        {/* <!-- Menu items --> */}
        <div className="text-base text-gray-900 hidden lg:flex">
          <Link
            href="#"
            className="block font-bold mt-4 lg:inline-block text-green-600 lg:mt-0 mr-10"
          >
            Khasiat & Fungsi
          </Link>
          <Link
            href="#"
            className="block font-bold mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
          >
            Testimoni
          </Link>
          <Link
            href="#"
            className="block font-bold mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10"
          >
            Kandungan
          </Link>
          <Link
            href="#"
            className="block font-bold hover:text-gray-700 mt-4 lg:inline-block lg:mt-0 mr-10"
          >
            Jaminan
          </Link>
          <Link
            href="/index_dark.html"
            className="block font-bold hover:text-gray-700 mt-4 lg:inline-block lg:mt-0"
          >
            Whatsapp
          </Link>
        </div>

        {/* <!-- CTA and Hamburger icon --> */}
        <div className="flex">
          <div className="mr-5 lg:mr-0">
            <button
              className="hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 px-5 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500"
            >
              Harga
            </button>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-4 py-3 border focus:outline-none"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
    </header>
    </div>
  )
}

export default Header