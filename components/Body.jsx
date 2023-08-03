import React from "react";
import VideoWistia from "./VideoWistia";
import Image from "next/image";

const Body = () => {
  return (
    <div className="bg-white">
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
                priority={true}    
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
      <section className="bg-green-50">
      <div
        className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto"
      >
        <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
          <div
            className="lg:w-2/5 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left"
          >
            <h3 className="text-xl font-bold mb-6 text-green-500">
              Sejak 2 Bulan Pelancaran Saraf Emas
            </h3>
            <h2
              className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter"
            >
              10,102 Unit Telah Terjual
            </h2>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
              Bertahun lama di pasaran. Ramai pelanggan berulang.
            </p>
            <div className="lg:mt-6 max-w-7xl sm:flex mt-0">
              <div className="sm:mt-0 mt-3">
                <button
                  className="hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500"
                >
                  Lihat Harga
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 xl:mt-0 w-full mt-12">
            <div className="relative items-center w-full px-5 py-12">
              <div
                className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2"
              >
                <div className="p-6">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-green-700 rounded-xl border-2 border-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(72 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(144 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(216 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(288 12 12)"
                      ></line>
                    </svg>
                  </div>
                  <h3
                    className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl"
                  >
                    Core Themeptation
                  </h3>
                  <p className="mx-auto text-base leading-relaxed text-gray-700">
                    Free and Premium themes, UI Kit&apos;s, templates and landing
                    pages built with Tailwind CSS, HTML &amp; Next.js.
                  </p>
                </div>
                <div className="p-6">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-green-700 rounded-xl border-2 border-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(72 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(144 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(216 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(288 12 12)"
                      ></line>
                    </svg>
                  </div>
                  <h3
                    className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl"
                  >
                    Plugin Development
                  </h3>
                  <p className="mx-auto text-base leading-relaxed text-gray-700">
                    Free and Premium themes, UI Kit&apos;s, templates and landing
                    pages built with Tailwind CSS, HTML &amp; Next.js.
                  </p>
                </div>
                <div className="p-6">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-green-700 rounded-xl border-2 border-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(72 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(144 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(216 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(288 12 12)"
                      ></line>
                    </svg>
                  </div>
                  <h3
                    className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl"
                  >
                    Core Themeptation
                  </h3>
                  <p className="mx-auto text-base leading-relaxed text-gray-700">
                    Free and Premium themes, UI Kit&apos;s, templates and landing
                    pages built with Tailwind CSS, HTML &amp; Next.js.
                  </p>
                </div>
                <div className="p-6">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-green-700 rounded-xl border-2 border-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(72 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(144 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(216 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(288 12 12)"
                      ></line>
                    </svg>
                  </div>
                  <h3
                    className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl"
                  >
                    Core Themeptation
                  </h3>
                  <p className="mx-auto text-base leading-relaxed text-gray-700">
                    Free and Premium themes, UI Kit&apos;s, templates and landing
                    pages built with Tailwind CSS, HTML &amp; Next.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white">
      <div
        className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto"
      >
        <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
          <div
            className="lg:w-2/5 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left"
          >
            <h3 className="text-xl font-bold mb-6 text-green-500">
              SARAF EMAS LEGAKAN SAKIT
            </h3>
            <h2
              className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter"
            >
              Adakah Anda Sedang Alami
            </h2>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
              Bertahun lama di pasaran. Ramai pelanggan berulang.
            </p>
            <div className="lg:mt-6 max-w-7xl sm:flex mt-0">
              <div className="sm:mt-0 mt-3">
                <button
                  className="hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500"
                >
                  Lihat Harga
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 xl:mt-0 w-full mt-12">
            <div className="relative items-center w-full px-5 py-12">
              <div
                className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2"
              >
                <div className="p-6">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 mx-auto mb-5 text-green-700 rounded-xl"
                  >
                    <Image 
                      src="./lutut.png"
                      width={150}
                      height={150}    
                      alt="saraf emas"
                    />
                  </div>
                  <h3
                    className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl"
                  >
                    Sakit Lutut
                  </h3>
                  <p className="mx-auto text-base leading-relaxed text-gray-700">
                    Anda menderita sakit lutut tak boleh nak solat?
                  </p>
                </div>
                <div className="p-6">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 mx-auto mb-5 text-green-700 rounded-xl"
                  >
                    <Image src="./stroke.png" width={150}
                      height={150} alt="sakit stroke"/>
                  </div>
                  <h3
                    className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl"
                  >
                    Stroke / Angin Ahmar
                  </h3>
                  <p className="mx-auto text-base leading-relaxed text-gray-700">
                    Anda menderita mulut senget akibat angin ahmar?
                  </p>
                </div>
                <div className="p-6">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 mx-auto mb-5 text-green-700 rounded-xl"
                  >
                    <Image src="./gout.png" width={150}
                      height={150} alt="sakit gout" />
                  </div>
                  <h3
                    className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl"
                  >
                    Gout
                  </h3>
                  <p className="mx-auto text-base leading-relaxed text-gray-700">
                    Anda menderita sakit sendi, kaki & tangan terasa mencucuk?
                  </p>
                </div>
                <div className="p-6">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 mx-auto mb-5 text-green-700 rounded-xl"
                  >
                    <Image src="./urat.png" width={150}
                      height={150} alt="sakit urat dan sakit pinggang" />
                  </div>
                  <h3
                    className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl"
                  >
                    Sakit Urat / Pinggang
                  </h3>
                  <p className="mx-auto text-base leading-relaxed text-gray-700">
                    Anda menderita sakit sakit pinggang sehingga anda tak boleh
                    bermain dengan cucu?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-green-50">
      <div
        className="2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 px-4 py-12 mx-auto"
      >
        <div className="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
          <div
            className="lg:w-2/5 lg:pr-24 md:mb-0 flex flex-col items-start mb-16 text-left"
          >
            <h3 className="text-xl font-bold mb-6 text-green-500">
              KENAPA SARAF EMAS JADI PILIHAN
            </h3>
            <h2
              className="text-gray-900 md:text-5xl lg:text-7xl mb-8 text-3xl font-extrabold leading-none tracking-tighter"
            >
              Ciri Terbaik Saraf Emas.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-600">
              Bertahun lama di pasaran. Ramai pelanggan berulang.
            </p>
            <div className="lg:mt-6 max-w-7xl sm:flex mt-0">
              <div className="sm:mt-0 mt-3">
                <button
                  className="hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 items-center block px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-500"
                >
                  Lihat Harga
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 xl:mt-0 w-full mt-12">
            <div className="relative items-center w-full px-5 py-12">
              <div
                className="grid w-full grid-cols-1 gap-12 mx-auto lg:grid-cols-2"
              >
                <div className="p-6">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-green-700 rounded-xl border-2 border-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(72 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(144 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(216 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(288 12 12)"
                      ></line>
                    </svg>
                  </div>
                  <h3
                    className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl"
                  >
                    Core Themeptation
                  </h3>
                  <p className="mx-auto text-base leading-relaxed text-gray-700">
                    Free and Premium themes, UI Kit&apos;s, templates and landing
                    pages built with Tailwind CSS, HTML &amp; Next.js.
                  </p>
                </div>
                <div className="p-6">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-green-700 rounded-xl border-2 border-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(72 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(144 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(216 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(288 12 12)"
                      ></line>
                    </svg>
                  </div>
                  <h3
                    className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl"
                  >
                    Plugin Development
                  </h3>
                  <p className="mx-auto text-base leading-relaxed text-gray-700">
                    Free and Premium themes, UI Kit&apos;s, templates and landing
                    pages built with Tailwind CSS, HTML &amp; Next.js.
                  </p>
                </div>
                <div className="p-6">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-green-700 rounded-xl border-2 border-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(72 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(144 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(216 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(288 12 12)"
                      ></line>
                    </svg>
                  </div>
                  <h3
                    className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl"
                  >
                    Core Themeptation
                  </h3>
                  <p className="mx-auto text-base leading-relaxed text-gray-700">
                    Free and Premium themes, UI Kit&apos;s, templates and landing
                    pages built with Tailwind CSS, HTML &amp; Next.js.
                  </p>
                </div>
                <div className="p-6">
                  <div
                    className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto mb-5 text-green-700 rounded-xl border-2 border-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(72 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(144 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(216 12 12)"
                      ></line>
                      <line
                        x1="3.6"
                        y1="15"
                        x2="14.15"
                        y2="15"
                        transform="rotate(288 12 12)"
                      ></line>
                    </svg>
                  </div>
                  <h3
                    className="mx-auto mb-6 text-xl font-bold leading-none tracking-tighter lg:text-2xl"
                  >
                    Core Themeptation
                  </h3>
                  <p className="mx-auto text-base leading-relaxed text-gray-700">
                    Free and Premium themes, UI Kit&apos;s, templates and landing
                    pages built with Tailwind CSS, HTML &amp; Next.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <div className="mt-9">
        <VideoWistia />
      </div>

        
    </div>
  )
}

export default Body