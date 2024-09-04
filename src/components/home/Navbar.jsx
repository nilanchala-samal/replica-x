import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openSignupModal = () => setIsSignupModalOpen(true);
  const closeSignupModal = () => setIsSignupModalOpen(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Features', link: '/features' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'Blog', link: '/blog' },
  ];

  return (
    <nav className="bg-white shadow-md p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="ml-10 text-grey-300 text-3xl font-semibold">
          Replica<span className='text-orange-500'>X</span>
        </div>

        <div className={`lg:flex-1 lg:flex lg:justify-center ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="lg:flex lg:space-x-8">
            {navItems.map((item, index) => (
              <li key={index} className="py-2 lg:py-0">
                <NavLink to={item.link} className="text-grey-500 text-lg hover:text-orange-500 block">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center space-x-4 mr-10 text-lg">
          <button onClick={openModal} className="text-gray-500 hover:text-orange-500">Login</button>
          <LoginModal isOpen={isModalOpen} closeModal={closeModal} />
          <button onClick={openSignupModal} className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600">
            Sign Up
          </button>
          <SignupModal isOpen={isSignupModalOpen} closeModal={closeSignupModal} />
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="#ff6347"  // Example: Tomato color
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>

          </button>
        </div>

        {/* Mobile Login Link and Button */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4 mt-4 items-center">
            <button onClick={openModal} href="#" className="text-gray-500 hover:text-orange-500">Login</button>
            <LoginModal isOpen={isModalOpen} closeModal={closeModal} />
            <button onClick={openSignupModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Sign Up
            </button>
            <SignupModal isOpen={isSignupModalOpen} closeModal={closeSignupModal} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// This is the navbar