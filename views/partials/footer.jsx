// src/views/partials/Footer.jsx
export default function footer() {
  return (
    <footer id="kontak" className="scroll-mt-18 border-t w-full border-gray-200 bg-white">
      <div className="flex flex-col md:flex-row items-start md:items-stretch justify-center md:gap-4 md:p-12">
        
        {/* Bagian Contact Form */}
        <div className="flex flex-col items-center w-full md:w-80 md:m-auto p-12 md:p-0">
          <h2 className="text-gray-600 font-bold self-start mb-2">Contact</h2>
          
          <form id="contactForm" onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4 w-full">
            <div id="responseMessage" className="hidden px-4 py-2 rounded-md w-full md:w-80 border"></div>
            
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              className="w-full md:w-80 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            <textarea 
              name="message" 
              placeholder="Message" 
              className="w-full md:w-80 rounded-md border border-gray-300 p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button 
              type="submit" 
              id="submitBtn" 
              className="w-full md:w-80 bg-blue-400 text-white p-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Bagian Contact Information */}
        <div className="flex flex-col w-full md:w-58 md:my-0 md:m-auto md:mt-0 border-y border-gray-300 md:border-none p-12 md:p-0"> 
          <h2 className="text-gray-600 font-bold mb-4">Contact Information</h2>
          <ul className="flex flex-col gap-4 text-gray-600">
             {/* <li className="flex items-center">
              <i className="fa-solid fa-phone text-blue-400 w-6"></i>
            <a href="https://wa.me/6287856490745" className="ml-2 hover:text-blue-500">+62 878-5649-0745</a>
            </li>*/}
            <li className="flex items-center">
              <i className="fa-solid fa-envelope text-blue-400 w-6"></i>
              <a href="mailto:liaelwanda@gmail.com" className="ml-2 hover:text-blue-500 break-all">liaelwanda@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Bagian Social Media */}
        <div className="flex flex-col w-full md:w-32 md:m-auto md:mt-0 p-12 md:p-0"> 
          <h2 className="text-gray-600 font-bold">Social Media</h2> 
          <ul className="flex flex-row md:flex-col mt-8 gap-26 sm:gap-15 md:gap-6">
            <li>
              <a href="https://www.instagram.com/liaelwanda" className="text-pink-500" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/raden-ayu-amalia-elwanda" className="text-blue-700" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/amalia-elGit" className="text-black" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github text-2xl"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
        
      <div className="flex justify-center items-center py-6 border-t border-gray-200 mt-6">
        <p>&copy; 2026 Amalia.</p>
      </div>
    </footer>
  );
}