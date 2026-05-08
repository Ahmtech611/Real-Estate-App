

const ContactInfo = () => {
  return (
    <div className="text-center p-6 py-20 lg:px-32 overflow:hidden
    w-full" id="Contact Us">
      <h1 className="text-2xl font-bold sm:text-4xl mb-2 text-center"
      >Contact <span 
      className="underline underline-offset-4 decoration-1
      font-light">With Us</span>
      </h1>

      <p className="text-gray-500 text-center mb-12
      mx-auto max-w-80">Ready to make a move? Let's build your future together
      </p>


      {/* Form tag :- */}

      <form className="max-w-2xl mx-auto text-gray-600 mt-8" action="action.js">

        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full md:w-1/2 text-left">
             Your Name
             <input className="w-full mt-2 mb-1 px-4 py-3 border border-gray-300
            rounded" name="Name" type="text" placeholder="Your Name"
            spellCheck="false" required/>
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
             Your Email
             <input className="w-full mt-2 mb-1 px-4 py-3 border border-gray-300
            rounded" name="Email" type="Email" placeholder="Your Email" required/>
          </div>
        </div>

        <div className="my-6 text-left">
          Message
          <textarea className="w-full border border-gray-300 px-4 py-3 mt-2 h-48
          rounded resize-none" placeholder="Message" name="message" spellCheck="false" required>
             
          </textarea>
        </div>
        <button className="px-12 py-2 mb-10 rounded bg-blue-600 
        text-white">Send Message</button>
      </form>
    </div>
  )
}

export default ContactInfo