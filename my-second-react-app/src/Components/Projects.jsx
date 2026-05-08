import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets"

const Projects = () => {

  // Current Index(useState) :
  const [CurrentIndex, setCurrentIndex] = useState(0);

  // cardsToShow(useState)
  const [cardsToShow, setcardsToShow] = useState(1);

  // Next Project function :
  const NextProject = ()=>{
     setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
  }

  // Previous Project function :
  const PrevProject = ()=>{
    setCurrentIndex((prevIndex) =>(prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1))
  }

  // UseEffect :

  useEffect(()=>{
    const UpdateCardsToShow = ()=>{
      if(window.innerWidth >= 1024){
        setcardsToShow(projectsData.length)
      }
      else
      {
        setcardsToShow(1)
      };
    }
      UpdateCardsToShow();

      window.addEventListener('resize', UpdateCardsToShow);
      return ()=> window.removeEventListener('resize', UpdateCardsToShow);

  }, [])

  return (
    <div
      id="Projects"
      className="container mx-auto w-full px-6 py-4 pt-20 md:px-20
      lg:px-32 w-full overflow-hidden my-20"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-900
      text-center">
        Projects <span className="underline under-offset-4 decoration-2
      under font-light">Completed</span>
      </h1>
      <p className="text-gray-500 text-center mt-1 mb-8 mx-auto max-w-80">
        Crafting Spacies, Building Legacies-Explore Our Portfolio
      </p>

    {/* Slider Buttons */}

    <div className="flex justify-end items-center mb-8">
      <button onClick={PrevProject} className="p-3 bg-gray-200 rounded mr-2"
      aria-label="Previous Projects">
        <img src={assets.left_arrow} alt="Previous"/>
      </button>
      <button onClick={NextProject} className="p-3 bg-gray-200 rounded mr-2"
      aria-label="Next Projects">
        <img src={assets.right_arrow} alt="Next"/>
      </button>
    </div>

    {/* Project Slider container */}

    <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(CurrentIndex * 100) / cardsToShow}%)` }}
        >
             {projectsData.map((project, index)=>(
              <div key={index}  data-aos="fade-up"
              data-aos-delay={index * 100} className="relative flex-shrink-0 w-full
              sm:w-1/4 ">
                <img src={project.image} alt={project.title} className="w-full h-auto
              mb-14"/>
                <div className="absolute left-0 right-0
                bottom-5 flex justify-center ">
                  <div className="inline-block bg-white w-3/4
                  md:w-9/10 px-3 md:px-1 py-2 shadow-md">
                    <h2 className="text-2xl md:text-1xl font-semibold
                    text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {project.price} <span>|</span> {project.location}
                    </p>
                  </div>
                </div>
              </div>
             ))}
        </div>
      </div>

    </div>
  )
}

export default Projects

