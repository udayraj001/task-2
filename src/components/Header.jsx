import React, { useState } from 'react';
import { ChevronDown, Search, Menu } from 'lucide-react';
import logo from '../assets/logo.svg'; // <-- adjust path to your logo

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: 'Mobility', hasDropdown: true },
    { name: 'Expertise', hasDropdown: true },
    { name: 'Insights', hasDropdown: true },
    { name: 'Company', hasDropdown: true },
    { name: 'Careers', hasDropdown: true },
    { name: 'Investors', hasDropdown: true },
  ];

  return (
    <header className="bg-white shadow-sm relative z-50">
      {/* Top bar */}
      <div className="bg-black text-[#DEDEDE] text-[9px] md:text-xs py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center space-x-6">
          <span>KPIT Worldwide</span>
          <div className="flex items-center space-x-1">
            <span>Happenings at KPIT</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-full mx-auto px-4 md:px-48 py-1 border border-black">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="KPIT Logo"
              className="h-5 lg:h-5 w-auto cursor-pointer object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-11 text-[17px] font-medium">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-black">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Desktop view */}
            <div className="hidden lg:flex items-center space-x-4">
              <Search className="w-5 h-5 text-[#6A4BE7] cursor-pointer" />
              <button className="bg-white border border-[#6A4BE7] text-[#6A4BE7] px-6 py-2 rounded-full hover:bg-[#6A4BE7] hover:text-white transition-colors font-semibold">
                Contact
              </button>
            </div>

            {/* Mobile view */}
            <div className="flex lg:hidden">
              <Menu className="w-6 h-6 text-black cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
