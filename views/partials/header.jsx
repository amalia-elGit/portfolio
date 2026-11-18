// src/views/partials/Header.jsx
export default function header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between p-6 px-12 border-b border-gray-200 text-gray-800 bg-white font-sans">
      <h1 className="hidden sm:block font-bold text-xl">Amalia</h1>

      <nav className="ml-auto sm:ml-0">
        <ul className="flex text-right list-none gap-10 items-center">
          <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
          <li className="group relative cursor-pointer">
            <span className="hover:text-blue-500">About</span>
            <ul className="hidden group-hover:block absolute right-0 bg-white text-gray-800 shadow-lg rounded border border-gray-200 p-2 mt-2 w-32">
              <li><a href="#about" className="block p-1 hover:text-blue-500">About Me</a></li>
              <li><a href="#sertifikat" className="block p-1 hover:text-blue-500">Sertifikat</a></li>
            </ul>
          </li>
          <li><a href="#kontak" className="hover:text-blue-500 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}