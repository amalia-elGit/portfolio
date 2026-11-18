// src/views/partials/Header.jsx
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Menghapus sisa /#home atau /#about dari URL saat halaman pertama kali dibuka
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fungsi scroll mulus tanpa menyentuh URL sama sekali
  const scrollToSection = (id) => {
    setIsOpen(false);

    // Pastikan URL tetap bersih tanpa hash
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 flex justify-between p-6 px-12 border-b border-gray-200 text-gray-800 bg-white font-sans">
      <h1 className="hidden sm:block font-bold text-xl">Amalia</h1>

      <nav className="ml-auto sm:ml-0">
        <ul className="flex text-right list-none gap-10 items-center">
          <li>
            <button
              type="button"
              onClick={() => scrollToSection('home')}
              className="hover:text-blue-500 transition cursor-pointer focus:outline-none"
            >
              Home
            </button>
          </li>

          <li ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:text-blue-500 cursor-pointer focus:outline-none flex items-center gap-1"
            >
              About
            </button>

            {isOpen && (
              <ul className="absolute right-0 bg-white text-gray-800 shadow-xl rounded-lg border border-gray-200 p-2 mt-2 w-36 z-50">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('about')}
                    className="w-full text-right block p-2 rounded hover:bg-gray-50 hover:text-blue-500 transition cursor-pointer"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('sertifikat')}
                    className="w-full text-right block p-2 rounded hover:bg-gray-50 hover:text-blue-500 transition cursor-pointer"
                  >
                    Sertifikat
                  </button>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              type="button"
              onClick={() => scrollToSection('kontak')}
              className="hover:text-blue-500 transition cursor-pointer focus:outline-none"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}