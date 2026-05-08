import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div className="bg-gray-900 w-full" id="Footer">

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-20 lg:px-32 pt-14 pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">

          {/* Column 1 — Logo + Short Description + Contact Info */}
          <div data-aos="fade-right" className="w-full md:w-2/5">
            <img src={assets.logo_dark} alt="Logo" className="mb-4" />
            <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
              Redefining real estate through modern technology and personalized
              service — bringing innovation, transparency, and trust to every
              step of your property journey.
            </p>

            {/* Contact Info Cards */}
            <div className="mt-6 flex flex-col gap-3">

              <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-2.5 w-fit">
                <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xs">📞</span>
                </div>
                <span className="text-gray-300 text-xs font-medium">+1 800 123 4567</span>
              </div>

              <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-2.5 w-fit">
                <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xs">✉️</span>
                </div>
                <span className="text-gray-300 text-xs font-medium">info@realestate.com</span>
              </div>

              <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-2.5 w-fit">
                <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xs">📍</span>
                </div>
                <span className="text-gray-300 text-xs font-medium">123 Property Lane, California, USA</span>
              </div>

            </div>
          </div>

          {/* Column 2 — Company Links */}
          <div data-aos="fade-up" data-aos-delay="100" className="w-full md:w-1/5">
            <h3 className="text-white text-base font-semibold mb-5 tracking-wide uppercase">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#Home" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#Projects" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#Testimonials" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#Contact Us" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Newsletter */}
          <div data-aos="fade-left" data-aos-delay="200" className="w-full md:w-80 lg:w-72">
            <h3 className="text-white text-base font-semibold mb-2 tracking-wide uppercase">
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>

            <div className="flex flex-col xs:flex-row md:flex-col lg:flex-row items-stretch w-full gap-2 lg:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-4 py-2.5 text-sm
                rounded-md lg:rounded-r-none lg:rounded-l-md
                bg-gray-800 border border-gray-700 text-gray-300
                placeholder-gray-500 outline-none focus:border-blue-500
                transition-colors duration-200"
              />
              <button className="w-full lg:w-auto px-5 py-2.5 bg-blue-600
              hover:bg-blue-700 text-white text-sm font-medium
              rounded-md lg:rounded-l-none lg:rounded-r-md
              transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>

            <p className="text-gray-600 text-xs mt-3">
              No spam. Unsubscribe at any time.
            </p>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mx-6 md:mx-20 lg:mx-32" />

      {/* Copyright Bar */}
      <div className="container mx-auto px-6 md:px-20 lg:px-32 py-5 flex flex-col
      sm:flex-row justify-between items-center gap-3">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          © {new Date().getFullYear()} RealEstate. All rights reserved.
        </p>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Built with</span>
          <span className="text-red-400">❤️</span>
          <span>using React & Tailwind CSS</span>
        </div>
      </div>

    </div>
  )
}

export default Footer