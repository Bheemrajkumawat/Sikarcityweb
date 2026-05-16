import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-desktop py-stack-lg max-w-container-max mx-auto">
          <div>
            <Link to="/">
              <span className="font-headline-md text-headline-md font-bold text-primary mb-stack-md block cursor-pointer">
                Sikar City Directory
              </span>
            </Link>

            <p className="text-on-surface-variant font-body-md mb-stack-md max-w-xs">
              Your authoritative guide to the heart of Shekhawati. Heritage
              &amp; Progress combined.
            </p>
            <div className="flex gap-stack-md">
              <a
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  public
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  share
                </span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-gutter">
            <div>
              <h4 className="font-bold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-on-surface-variant font-body-md">
                <li>
                  <a
                    className="hover:text-secondary transition-colors"
                    href="#"
                  >
                    Tourism Desk
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-secondary transition-colors"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-secondary transition-colors"
                    href="#"
                  >
                    Business Login
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-secondary transition-colors"
                    href="#"
                  >
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Emergency</h4>
              <ul className="space-y-2 text-on-surface-variant font-body-md">
                <li className="flex items-center gap-2">
                  <span className="text-error font-bold">Police:</span> 100
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-error font-bold">Ambulance:</span> 102
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-error font-bold">Fire:</span> 101
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-4">
              Subscribe to Newsletter
            </h4>
            <p className="text-on-surface-variant text-body-md mb-4">
              Get updates on upcoming events and new listings in Sikar.
            </p>
          </div>
        </div>
        <div className="border-t border-outline-variant py-stack-md px-margin-desktop text-center">
          <p className="text-on-surface-variant font-label-md">
            © 2024 Sikar City Directory. Heritage &amp; Progress. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
