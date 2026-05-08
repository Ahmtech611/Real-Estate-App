import { assets, testimonialsData } from "../assets/assets"

const Testimonials = () => {
  return (
    <div className="container py-10 w-full mx-auto overflow-hidden
    lg:px-32" id="Testimonials">
      <h1 className="text-2xl font-bold sm:text-4xl mb-2 text-center">Customer <span 
      className="underline underline-offset-4 decoration-1 font-light">Testimonials</span></h1>
      <p className="text-gray-500 text-center mb-12
      mx-auto max-w-80">Real Stories from Those Who Found Home with Us</p>

      {/* Testimonials images and information array by using map function : */}
      

      <div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10 max-w-6xl mx-auto px-4 sm:px-6"
      >
        {testimonialsData.map((testimonial, index) => (
          <article
            key={index}
            className="flex h-full flex-col items-center rounded-xl border border-gray-100
            bg-white px-6 py-10 text-center shadow-md transition-shadow duration-300 hover:shadow-lg
            sm:px-8"
          >
            <img
              src={testimonial.image}
              className="mb-4 h-20 w-20 shrink-0 rounded-full object-cover"
              alt={testimonial.alt}
            />
            <h2 className="text-xl font-medium text-gray-800">{testimonial.name}</h2>
            <p className="mb-4 text-sm text-gray-500">{testimonial.title}</p>
            <div className="mb-4 flex shrink-0 justify-center gap-1">
              {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                <img
                  key={starIndex}
                  src={assets.star_icon}
                  alt=""
                  className="h-4 w-4"
                  aria-hidden
                />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-gray-600
            sm:text-[15px]">{testimonial.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Testimonials