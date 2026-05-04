import Navbar from './Navbar'

const Header = () => {
  return (
    <div
      className='relative min-h-screen bg-cover bg-center w-full flex flex-col items-center justify-center mb-4 overflow-x-hidden'
      style={{ backgroundImage: "url('/header_img.png')" }}
      id='Header'
    >
    <Navbar />

      <div className='container mx-auto w-full max-w-full px-4 sm:px-6 py-4 md:px-20 lg:px-32 text-center text-white'>
        <h2 className='text-4xl sm:text-6xl md:text-[82px] inline-block font-semibold max-w-3xl
        pt-20' >
          Explore homes that fit your dreams</h2>
          <div className='mt-10 sm:mt-12 flex flex-wrap justify-center items-center gap-3 sm:gap-4'>
            <a
              href='#Projects'
              className='inline-flex items-center justify-center min-h-11 px-5 py-2.5 sm:px-8 sm:py-2 rounded border border-white text-sm sm:text-base whitespace-nowrap shrink-0'
            >
              Projects
            </a>
            <a
              href='#Contact'
              className='inline-flex items-center justify-center min-h-11 px-5 py-2.5 sm:px-6 sm:py-2 rounded bg-blue-500 text-sm sm:text-base whitespace-nowrap shrink-0'
            >
              Contact Us
            </a>
          </div>
      </div>
    </div>
  )
}

export default Header