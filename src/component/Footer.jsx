import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 py-8 max-w-container-max mx-auto items-center">
          {/* LEFT SIDE: Brand Logo */}
          <div className="text-center md:text-left">
            <Link to="/">
              <span className="font-headline-md text-xl md:text-2xl font-bold text-primary block cursor-pointer">
                Sikar City Directory
              </span>
            </Link>
          </div>

          {/* CENTER SIDE: Emergency Contacts */}
          <div className="flex flex-col items-center justify-center">
            <div className="border border-outline-variant/60 rounded-xl p-3 bg-surface/40 w-full max-w-70">
              <h4 className="font-bold text-center text-primary text-sm mb-2 tracking-wide uppercase">
                🚨 Emergency Contacts
              </h4>
              <ul className="flex justify-around text-xs sm:text-sm text-on-surface-variant font-medium">
                <li className="flex flex-col items-center">
                  <span className="text-error font-bold">Police</span>
                  <span className="text-primary font-bold mt-0.5">100</span>
                </li>
                <li className="flex flex-col items-center border-x border-outline-variant px-4">
                  <span className="text-error font-bold">Ambulance</span>
                  <span className="text-primary font-bold mt-0.5">102</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="text-error font-bold">Fire</span>
                  <span className="text-primary font-bold mt-0.5">101</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE: Only Instagram, Facebook & YouTube Icons (using clean SVGs) */}
          <div className="flex justify-center md:justify-end gap-4 text-primary">
            {/* Facebook Icon */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-[#ffffff] transition-all duration-300 shadow-sm"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-[#ffffff] transition-all duration-300 shadow-sm"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            {/* YouTube Icon */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-[#ffffff] transition-all duration-300 shadow-sm"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-outline-variant/60 py-4 px-4 text-center">
          <p className="text-on-surface-variant text-xs sm:text-sm font-medium">
            © 2026 Sikar City Directory. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
