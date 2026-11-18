// app/page.js
'use client'; // Diperlukan karena menggunakan useEffect / client-side interactivity (jika ada script tambahan)

export default function Home() {
  return (
    <main className="h-auto m-auto">
      {/* Membuat view home dengan menambahkan foto dan keterangan sebagai seorang front-end */}
      <section id="home" className="scroll-mt-20 md:flex justify-center items-center p-8">
        <div className="flex flex-col w-70 md:w-100 my-8 md:my-0 mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl w-80 sm:w-100">AMALIA FRONT_END DEVELOPER</h1>
          <p className="my-2 w-80 md:w-100">Dedicated to creating intuitive and responsive user interfaces.</p>
          <div className="flex justify-left items-left mt-4">
            <a href="#sertifikat" className="bg-blue-500 text-white px-4 py-2 rounded-l-lg">View Certificate</a>
            <a href="#kontak" className="bg-white text-blue-500 px-4 py-2 rounded-r-lg border border-blue-500 ml-2">Contact me</a>
          </div>
        </div>
        <div className="flex justify-center items-center mt-15 md:mt-0 md:m-auto md:p-8">
          <img src="/images/home.1.jpeg" alt="Foto Profil Amalia" className="flex justify-center items-center w-60 h-60 lg:w-80 lg:h-80 object-cover border border-blue-500 shadow-sm rounded-lg" />
        </div>
      </section>

      <section className="bg-blue-100 h-8"></section>

      {/* Membuat pages untuk menampilkan project */}
      <h1 className="flex text-gray-500 text-2xl justify-center mt-6"><b>Project</b></h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:my-12 justify-items-center center items-center">
        
        {/* Project 1 */}
        <div className="border border-gray-300 w-60 h-50 rounded shadow">
          <div className="flex justify-center items-center mx-4 mt-4 w-auto h-30 bg-blue-50 rounded">
            <img src="/images/gasLPG.png" alt="gasLPG" className="w-[80%] h-[70%]" />
          </div>
          <h2 className="mt-2 ml-4 font-semibold">
            <a href="https://github.com/amalia-elGit/gasLpg.git" target="_blank" rel="noopener noreferrer">
              <span>Project gasLPG - website</span>
            </a>
          </h2>
          <div className="flex justify-between">
            <div className="ml-4 flex gap-2 mt-2">
              <i className="fa-brands fa-laravel text-md text-red-500"></i>
              <i className="fa-brands fa-php text-lg text-purple-500"></i>
              <img src="/images/logo_phpmyadmin.png" alt="logo_phpmyadmin" className="w-5 h-4" />
              <img src="/images/logo_tailwind.png" alt="logo_tailwind" className="w-5 h-3" />
            </div>
            <div className="mr-4 text-[14px]">
              <p>Github</p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border border-gray-300 w-60 h-50 rounded shadow">
          <div className="flex justify-center items-center mx-4 mt-4 w-auto h-30 bg-blue-50 rounded">
            <img src="/images/project2.png" alt="pendataan mahasiswa" className="w-[80%] h-[70%]" />
          </div>
          <h2 className="mt-2 ml-4 font-semibold">
            <a href="https://github.com/amalia-elGit/pendataan_mahasiswa.git" target="_blank" rel="noopener noreferrer">
              <span>Project Pendataan - website</span>
            </a>
          </h2>
          <div className="flex justify-between">
            <div className="ml-4 flex gap-2 mt-2">
              <i className="fa-brands fa-php text-lg text-purple-500"></i>
              <img src="/images/logo_bootstrap.png" alt="logo_bootstrap" className="w-5 h-4" />
              <img src="/images/logo_phpmyadmin.png" alt="logo_phpmyadmin" className="w-5 h-4" />
            </div>
            <div className="mr-4 text-[14px]">
              <p>Github</p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="border border-gray-300 w-60 h-50 rounded shadow">
          <div className="flex justify-center items-center mx-4 mt-4 w-auto h-30 bg-blue-50 rounded">
            <img src="/images/project3.png" alt="projectFigma" className="w-[80%] h-[70%]" />
          </div>
          <h2 className="mt-2 ml-4 font-semibold">
            <a href="https://www.figma.com/design/dJecw8Nr5pFbgRpUyZwBMT/website?node-id=385-47&t=zfMavQxFOWmXgAkH-1" target="_blank" rel="noopener noreferrer">
              <span>Project Design - Android</span>
            </a>
          </h2>
          <div className="flex justify-between">
            <div className="ml-4 flex gap-2 mt-2">
              <div className="inline-flex items-center">
                <svg className="w-[1.125rem] h-[1.125rem]" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0H9.5C4.25 0 0 4.25 0 9.5C0 14.75 4.25 19 9.5 19H19V0Z" fill="#F24E1E"/>
                  <path d="M19 19H9.5C4.25 19 0 23.25 0 28.5C0 33.75 4.25 38 9.5 38H19V19Z" fill="#A259FF"/>
                  <path d="M19 38H9.5C4.25 38 0 42.25 0 47.5C0 52.75 4.25 57 9.5 57C14.75 57 19 52.75 19 47.5V38Z" fill="#1ABCFE"/>
                  <path d="M38 19H28.5C23.25 19 19 23.25 19 28.5C19 33.75 23.25 38 28.5 38H38V19Z" fill="#0ACF83"/>
                  <path d="M38 9.5C38 4.25 33.75 0 28.5 0H19V19H28.5C33.75 19 38 14.75 38 9.5Z" fill="#FF7262"/>
                </svg>
              </div>
            </div>
            <div className="mr-4 text-[14px]">
              <p>Figma</p>
            </div>
          </div>
        </div>

      </section>
      <hr className="border-b border-gray-100" />

      {/* Membuat pages untuk menampilkan sertifikat */}
      <h1 id="sertifikat" className="scroll-mt-24 flex text-gray-500 text-2xl justify-center mt-6"><b>Sertifikat</b></h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:my-12 justify-items-center center items-center">
        
        {[1, 2, 3, 4, 5, 6, 7].map((num, idx) => {
          const issuers = ["Kemnaker", "Maju Bareng AI", "Codepolitan", "Dicoding", "Dicoding", "Dicoding", "Dicoding"];
          return (
            <div key={num} className="border border-gray-300 w-60 h-50 rounded-lg shadow bg-blue-50">
              <div className="flex justify-center items-center mx-4 mt-4 w-auto h-34">
                <img src={`/images/sertifikat${num}.png`} alt={`Sertifikat ${num}`} className="w-full h-full rounded-lg shadow object-cover" />
              </div>
              <div className="flex justify-between">
                <h2 className="mt-4 ml-4 font-semibold"><p>Sertifikat</p></h2>
                <p className="mt-4 mr-4">{issuers[idx]}</p>
              </div>
            </div>
          );
        })}

      </section>
      <hr className="border-b border-gray-100" />

      {/* Membuat tampilan aboutme */}
      <section id="about" className="scroll-mt-24">
        <div className="flex flex-col md:flex-row p-12 gap-12 md:gap-4">
          <div className="flex flex-col md:m-auto gap-6 md:gap-4">
            <h1 className="text-3xl"><b>About me</b></h1>
            <div className="bg-blue-200 w-15 h-1 rounded"></div>
            <p>
              I am a Software Engineering student at UNIPI who’s currently<br />
              fueled by caffeine and a passion for Front-End Development.<br />
              I’m on a mission to turn complex code into beautiful, functional websites!
            </p>
          </div>
          <div className="flex flex-col md:m-auto md:mt-0 gap-6 md:gap-4">
            <h1 className="text-xl"><b>Tech Stack</b></h1>
            <div className="bg-blue-200 w-15 h-1 rounded"></div>
            <div className="grid grid-cols-5 md:grid-cols-4 lg:grid-cols-6 justify-items-center gap-6"> 
              <i className="fa-brands fa-laravel text-5xl text-red-500"></i>
              <i className="fa-brands fa-php text-5xl text-purple-500"></i>
              <i className="fa-brands fa-github text-5xl text-black"></i>
              <img src="/images/iconvc.png" alt="icon_visual_studio" className="w-12 h-12" />
              <img src="/images/logo_phpmyadmin.png" alt="logo_phpmyadmin" className="w-14 h-12" />
              <img src="/images/logo_tailwind.png" alt="logo_tailwind" className="w-14 h-8" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}