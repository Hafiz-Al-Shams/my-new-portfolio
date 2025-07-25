import { useState } from 'react';
import logo from '../assets/favicon.png'
import { MdLightMode, MdOutlineDarkMode } from 'react-icons/md';


const NavBar = () => {
  // track which link is currently active
  const [active, setActive] = useState('Home') // <-- new

  // your list of links
  const links = ['PROJECTS', 'ABOUT', 'SKILLS', 'CONTACT',]

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <div className="sticky top-0 z-10">
      <div
        className="navbar drop-shadow-md text-neutral-content lg:py-3.5 bg-base-300/80 backdrop-blur-xs"
      // style={{ backgroundColor: '#2A1454' }}
      >
        {/* left: logo + mobile menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm lg:hidden text-base-content"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box mt-3 w-52 p-2 shadow"
            >
              {[
                { label: 'PROJECTS', href: '#projects' },
                { label: 'ABOUT', href: '#about' },
                { label: 'SKILLS', href: '#skills' },
                { label: 'CONTACT ME', href: '#contact' },
              ].map(({ label, href }) => (
                <li
                  key={label}
                  // apply bg + text classes when this item is active
                  className={
                    active === label
                      ? 'bg-[#2A1454] text-neutral-content m-1'
                      : ''
                  }
                >
                  <a
                    href={href}
                    onClick={() => setActive(label)}
                    // ensure link text also picks up neutral-content if active
                    className={
                      active === label
                        ? 'text-neutral-content'
                        : ''
                    }
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          <div className="flex items-center gap-1 pl-3.5 md:pl-2.5 lg:pl-24">
            {/* wrap both image + text in one link */}
            <a
              href="#banner"
              onClick={() => setActive('Home')}
              className="flex items-center"
            >
              {/* logo always visible and clickable */}
              <img src={logo} alt="logo" className="w-7 md:w-6" />

              {/* text hidden on mobile, visible from md+ */}
              <h5 className="hidden md:block md:ml-1 text-base-content bilbo text-3xl">
                {`hafiz.codes`}
              </h5>
            </a>
          </div>

        </div>

        {/* center: pill‑shaped menu */}
        <div className="navbar-center hidden lg:flex">
          <div
            className="flex items-center space-x-1 bg-[#5a0ea1] rounded-xl p-2 text-sm"
            style={{ backdropFilter: 'blur(5px)' }} // <-- optional blur like your example
          >
            {links.map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                onClick={() => setActive(label)}
                className={
                  `px-3 py-1.5 rounded-lg transition-colors duration-200 ` +
                  (active === label
                    ? 'bg-white text-black' // active pill
                    : 'text-gray-200 hover:text-white hover:bg-transparent')
                }
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* right: Resume pill */}
        <div className="navbar-end pr-3.5 md:pr-4 lg:pr-24">

          {/* <div
            className="flex items-center bg-[#382868] rounded-md md:rounded-lg p-0 text-xs md:text-sm"
            style={{ backdropFilter: 'blur(5px)' }}
          >
            <a
              href="https://drive.google.com/file/d/1JCMZ-Pn81dskty1UP4Rm4y3x1ybysI_s/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className={
                `py-2 px-3 md:py-2 md:px-3 lg:py-2.5 lg:px-3.5 rounded-md md:rounded-lg transition-colors duration-200 ` +
                // default “inactive” look:
                `text-gray-200 hover:text-black hover:bg-white`
              }
            >
              Resume
            </a>
          </div> */}

          <div
            className="tooltip tooltip-bottom transition-transform duration-75 ease-in-out hover:scale-105"
            data-tip={theme === "light" ? "Toggle Dark" : "Toggle Light"}
          >
            <button
              onClick={toggleTheme}
              // onClick={() => {
              //   setTheme(!theme)
              // }}
              className="btn btn-sm md:btn-md btn-circle border-[1px] border-neutral-content"
            >
              {theme === "light" ? <MdOutlineDarkMode /> : <MdLightMode />}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
};

export default NavBar;