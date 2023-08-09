import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Home from "./Home";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-blue-500 mt-3">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-white">
                <a href="/"> Cloudstorage </a>
                 </div>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <Link
                    to="/services"
                    className="px-3 py-2 text-2xl font-medium text-white rounded-md hover:bg-blue-600"
                  >
                    Services
                  </Link>

                  <Link
                    to="/team"
                    className="px-3 py-2 text-2xl font-medium text-gray-300 rounded-md hover:bg-blue-600 hover:text-white"
                  >
                    Team
                  </Link>

                  <Link
                    to="/blog"
                    className="px-3 py-2 text-2xl font-medium text-gray-300 rounded-md hover:bg-blue-600 hover:text-white"
                  >
                    Blog
                  </Link>

                  <Link
                    to="/testimonials"
                    className="px-3 py-2 text-2xl font-medium text-gray-300 rounded-md hover:bg-blue-600 hover:text-white"
                  >
                    Testimonials
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md bg-white-500 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  to="/services"
                  className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-blue-600"
                >
                  Services
                </Link>

                <Link
                  to="/team"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-blue-600 hover:text-white"
                >
                  Team
                </Link>

                <Link
                  to="/blog"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-blue-600 hover:text-white"
                >
                  Blog
                </Link>

                <Link
                  to="/testimonials"
                  className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-900 hover:text-white"
                >
                  Testimonials
                </Link>
                
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <header className="bg-white shadow">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <Home />
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  );
}

export default Navbar;