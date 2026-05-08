import { assets } from "../assets/assets"


const About = () => {

  return (
    <div
      className="container mx-auto w-full px-6 py-8 md:px-20 md:py-10 lg:px-32"
      id="About"
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">
        About{" "}
        <span className="underline underline-offset-4 decoration-2 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 text-center mt-2 mb-6 mx-auto max-w-md">
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className="flex flex-col md:flex-row md:items-center md:gap-10 lg:gap-12">
        <img
          src={assets.brand_img}
          alt="Brand"
          className="w-full md:w-1/2 max-w-md mx-auto rounded-2xl shadow-sm ring-1 ring-gray-900/5"
        />

        <div className="mt-6 md:mt-0 flex flex-col items-start text-gray-600 w-full md:w-1/2 md:justify-center">
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 w-full">
            <div>
              <p className="font-semibold text-gray-900 text-4xl leading-none tracking-tight">
                10+
              </p>
              <p className="mt-2 text-sm">Years of Excellence</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-4xl leading-none tracking-tight">
                12+
              </p>
              <p className="mt-2 text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-4xl leading-none tracking-tight">
                20+
              </p>
              <p className="mt-2 text-sm">Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-4xl leading-none tracking-tight">
                25+
              </p>
              <p className="mt-2 text-sm">Ongoing Projects</p>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-500">
          With over a decade of experience in premium real estate, we've helped 
          thousands of families find not just a house — but a place to call home. 
          From modern urban apartments to expansive suburban estates, we guide you 
          through every step of the journey with transparency, expertise, and care.
          </p>
          
          <button className="mt-5 bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition
          shadow-sm hover:shadow-md active:scale-[0.99]">
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export default About