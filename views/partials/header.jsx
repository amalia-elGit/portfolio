// src/views/partials/Header.jsx
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Menutup dropdown hanya jika mengklik di luar area menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex justify-between p-6 px-12 border-b border-gray-200 text-gray-800 bg-white font-sans">
      <h1 className="hidden sm:block font-bold text-xl">Amalia</h1>

      <nav className="ml-auto sm:ml-0">
        <ul className="flex text-right list-none gap-10 items-center">
          <li>
            <a href="#home" className="hover:text-blue-500 transition">
              Home
            </a>
          </li>

          {/* Bagian About dengan sistem Klik murni */}
          <li ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-blue-500 cursor-pointer focus:outline-none flex items-center gap-1"
            >
              About
            </button>

            {/* Menu Dropdown hanya muncul jika state isOpen bernilai true */}
            {isOpen && (
              <ul className="absolute right-0 bg-white text-gray-800 shadow-xl rounded-lg border border-gray-200 p-2 mt-2 w-36 z-50">
                <li>
                  <a
                    href="#about"
                    onClick={() => setIsOpen(false)}
                    className="block p-2 rounded hover:bg-gray-50 hover:text-blue-500 transition"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#sertifikat"
                    onClick={() => setIsOpen(false)}
                    className="block p-2 rounded hover:bg-gray-50 hover:text-blue-500 transition"
                  >
                    Sertifikat
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="#kontak" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}