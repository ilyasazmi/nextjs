import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="xl:col-span-1">
            <Link href="/" className="relative text-2xl font-extrabold">
              <span
                className="absolute w-10 h-2 bg-green-400 bottom-1 right-0"
              ></span><span className="relative z-10">Agencia</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-500">
                  Links
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      All Templates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      Landing Pages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      Next.js Templates
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-xl font-bold text-green-500">
                  UI/UX &amp; Dev
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      Blocks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      Backgrounds
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      Popups
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xl font-bold text-green-500">
                  Legal
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      Changelog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      Refund
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-xl font-bold text-green-500">
                  Socials
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      Dribbble
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-base font-semibold text-gray-600 hover:text-green-500"
                    >
                      Indie Hackers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
        <div className="flex flex-wrap items-baseline">
          <span className="mt-2 text-sm text-gray-300">
            Copyright © 2023
            <Link
              href="https://www.ejensarafemas.com"
              className="mx-2 font-semibbold text-black hover:text-green-500"
              rel="noopener noreferrer"
              >@SarafEmas.net</Link>
          </span>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer