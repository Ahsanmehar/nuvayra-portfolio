import Logo from "@/assets/Images/logo";
import { useState } from "react";
import { Link } from "react-router-dom";

const footerData = [
  {
    id: 1,
    title: "Services",
    path: "services",
    newTab: false,
  },
  {
    id: 2,
    title: "Technologies",
    path: "technologies",
    newTab: false,
  },
  {
    id: 3,
    title: "About",
    path: "about",
    newTab: false,
  },
];

const Footer = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <footer className="dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between flex-wrap gap-7">
          <div className="max-w-[360px]">
            <div className="mb-8">
              <div className="hidden dark:block w-full object-cover">
                <Logo size="lg" theme="dark" />
              </div>
              <div className="block dark:hidden w-full object-cover">
                <Logo size="lg" theme="light" />
              </div>
            </div>
            <p className="text-body-color dark:text-body-color-dark mb-9 text-base leading-relaxed">
              Nuvayra – Innovative software solutions for web, mobile, and
              digital transformation. Helping businesses grow globally.
            </p>
            <div className="flex items-center gap-2">
              <Link
                to="https://www.facebook.com/share/19VqFh56Ej/?mibextid=wwXIfr"
                aria-label="social-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link
                to="https://www.instagram.com/nuvayratech?igsh=MTVsYnp2OG56bzZ0Yg%3D%3D&utm_source=qr"
                aria-label="social-link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-xl font-bold text-black dark:text-white">
              Useful Links
            </h2>
            <ul>
              {footerData.map((footerItem, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(footerItem.path)}
                    className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 transition-colors duration-200 cursor-pointer ${
                      activeSection === footerItem.path
                        ? "text-primary dark:text-primary"
                        : "text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    }`}
                  >
                    {footerItem.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-8 text-xl font-bold text-black dark:text-white">
              Terms
            </h2>
            <ul>
              <li>
                <Link
                  to="/"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                >
                  TOS
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-8 text-xl font-bold text-black dark:text-white">
              Support & Help
            </h2>
            <ul>
              <li>
                <Link
                  to="/"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                >
                  Open Support Ticket
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-8">
          <p className="text-body-color text-center text-base dark:text-white">
            © All rights reserved. Made by
            <a
              to="http://uideck.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              {" "}
              Nuvayra
            </a>
          </p>
        </div>
      </div>
      <div className="absolute top-14 right-0 z-[-1]">
        <svg
          width="55"
          height="99"
          viewBox="0 0 55 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
          <mask
            id="mask0_94:899"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="99"
            height="99"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#00B4d8" />
          </mask>
          <g mask="url(#mask0_94:899)">
            <circle
              opacity="0.8"
              cx="49.5"
              cy="49.5"
              r="49.5"
              fill="url(#paint0_radial_94:899)"
            />
            <g opacity="0.8" filter="url(#filter0_f_94:899)">
              <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_94:899"
              x="12.4852"
              y="-15.1763"
              width="82.7646"
              height="82.7646"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_94:899"
              />
            </filter>
            <radialGradient
              id="paint0_radial_94:899"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
            >
              <stop stopOpacity="0.47" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-24 left-0 z-[-1]">
        <svg
          width="79"
          height="94"
          viewBox="0 0 79 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            fill="url(#paint0_linear_94:889)"
          />
          <rect
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            stroke="url(#paint1_linear_94:889)"
            strokeWidth="0.7"
          />
          <path
            opacity="0.3"
            d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
            fill="url(#paint2_linear_94:889)"
          />
          <path
            d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
            stroke="url(#paint3_linear_94:889)"
            strokeWidth="0.7"
          />
          <path
            opacity="0.3"
            d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
            fill="url(#paint4_linear_94:889)"
          />
          <path
            d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
            stroke="url(#paint5_linear_94:889)"
            strokeWidth="0.7"
          />
          <defs>
            <linearGradient
              id="paint0_linear_94:889"
              x1="-41"
              y1="21.8445"
              x2="36.9671"
              y2="59.8878"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00B4d8" stopOpacity="0.62" />
              <stop offset="1" stopColor="#00B4d8" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_94:889"
              x1="25.6675"
              y1="95.9631"
              x2="-42.9608"
              y2="20.668"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00B4d8" stopOpacity="0" />
              <stop offset="1" stopColor="#00B4d8" stopOpacity="0.51" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_94:889"
              x1="20.325"
              y1="-3.98039"
              x2="90.6248"
              y2="25.1062"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00B4d8" stopOpacity="0.62" />
              <stop offset="1" stopColor="#00B4d8" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_94:889"
              x1="18.3642"
              y1="-1.59742"
              x2="113.9"
              y2="80.6826"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00B4d8" stopOpacity="0" />
              <stop offset="1" stopColor="#00B4d8" stopOpacity="0.51" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_94:889"
              x1="61.1098"
              y1="62.3249"
              x2="-8.82468"
              y2="58.2156"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00B4d8" stopOpacity="0.62" />
              <stop offset="1" stopColor="#00B4d8" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_94:889"
              x1="65.4236"
              y1="65.0701"
              x2="24.0178"
              y2="41.6598"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00B4d8" stopOpacity="0" />
              <stop offset="1" stopColor="#00B4d8" stopOpacity="0.51" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
