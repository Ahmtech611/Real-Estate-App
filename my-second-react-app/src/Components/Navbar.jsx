import { useEffect, useState } from 'react'  
import { assets } from '../assets/assets'

const Navbar = () => {
  const [ShowMobileMenu, setShowMoileMenu] = useState(false)

  // Use effect :
  useEffect(()=>{
    if(ShowMobileMenu){
      document.body.style.overflow = 'hidden'
    }  
    else{
      document.body.style.overflow = 'Auto'
    }
    return ()=>{
      document.body.style.overflow = 'Auto'
    }  
  }, [ShowMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="logo"/>
        <ul className='hidden md:flex gap-7 text-white'>
            <a href="#Home" className='cursor-pointer hover:text-gray-400'>
              Home
            </a>
            <a href="#Home" className='cursor-pointer hover:text-gray-400'>
              About
            </a>
            <a href="#Home" className='cursor-pointer hover:text-gray-400'>
              Projects
            </a>
            <a href="#Home" className='cursor-pointer hover:text-gray-400'>
              Testimonials
            </a> 
        </ul>
        <button className='hidden md:block bg-white text-black px-7 py-2 rounded-full'>Sign up</button>
        <img onClick={()=>setShowMoileMenu(true)} src={assets.menu_icon} alt='Menu' className='md:hidden lg:hidden w-7 cursor-pointer' />
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden lg:hidden ${ShowMobileMenu ? `fixed w-full` : `h-0 w-0`} top-0 bottom-0 right overflow-hidden
      bg-white transition-all`}>
        <div className='flex justify-end cursor-pointer p-6'>
          <img onClick={()=>setShowMoileMenu(false)} src={assets.cross_icon} alt='Cross' className='w-6' />
        </div>
        <ul className='flex flex-col px-5 mt-5 items-center gap-2 text-lg font-medium'>
          <a onClick={()=>setShowMoileMenu(false)} href='#Header' className='px-4 py-2 rounded-full inline-block'>
            Header
          </a>
          <a onClick={()=>setShowMoileMenu(false)} href='#About' className='px-4 py-2 rounded-full inline-block'>
            About
          </a>
          <a onClick={()=>setShowMoileMenu(false)} href='#Projects' className='px-4 py-2 rounded-full inline-block'>
            Projects
          </a>
          <a onClick={()=>setShowMoileMenu(false)} href='#Testimonails' className='px-4 py-2 rounded-full inline-block'>
            Testimonails
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar