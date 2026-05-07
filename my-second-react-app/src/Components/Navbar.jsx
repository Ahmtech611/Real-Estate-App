import { useEffect, useState } from 'react'  
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleNav = (e, targetId) => {
    e.preventDefault()
    setShowMobileMenu(false)

    // Let the menu close (and body unlock) before scrolling
    requestAnimationFrame(() => {
      const el = document.getElementById(targetId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      else window.location.hash = `#${targetId}`
    })
  }

  // Use effect :
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }  
    else{
      document.body.style.overflow = 'auto'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    }  
  }, [showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="logo"/>
        <ul className='hidden md:flex gap-7 text-white'>
            <a href="#Home" className='cursor-pointer hover:text-gray-400'>
              Home
            </a>
            <a href="#About" className='cursor-pointer hover:text-gray-400'>
              About
            </a>
            <a href="#Projects" className='cursor-pointer hover:text-gray-400'>
              Projects
            </a>
            <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>
              Testimonials
            </a> 
        </ul>
        <button
          type="button"
          className="hidden md:inline-flex lg:inline-flex items-center justify-center
          rounded-full bg-white/95 px-7 py-2.5 text-sm font-semibold text-gray-900 shadow-sm
          ring-1 ring-black/5 backdrop-blur-sm transition hover:bg-blue-600 hover:text-white
          hover:shadow-md hover:ring-blue-600 active:scale-[0.98] focus:outline-none focus-visible:ring-2
          focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          Sign up
        </button>
        <img onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon} alt='Menu' className='md:hidden lg:hidden w-7 cursor-pointer' />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden lg:hidden ${showMobileMenu ? `fixed w-full` : `h-0 w-0`} top-0 bottom-0 right-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end cursor-pointer p-6'>
          <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} alt='Cross' className='w-6' />
        </div>
        <ul className='flex flex-col px-5 mt-5 items-center gap-2 text-lg font-medium'>
          <a onClick={(e)=>handleNav(e,'Home')} href='#Home' className='px-4 py-2 rounded-full inline-block'>
            Home
          </a>
          <a onClick={(e)=>handleNav(e,'About')} href='#About' className='px-4 py-2 rounded-full inline-block'>
            About
          </a>
          <a onClick={(e)=>handleNav(e,'Projects')} href='#Projects' className='px-4 py-2 rounded-full inline-block'>
            Projects
          </a>
          <a onClick={(e)=>handleNav(e,'Testimonials')} href='#Testimonials' className='px-4 py-2 rounded-full inline-block'>
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar