import { useState } from 'react'
import { toast } from 'react-toastify';

const ContactInfo = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "85511370-0b50-4967-8839-bb1370bc8198"); // ✅ Your real key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    },);

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className="text-center p-6 py-20 lg:px-32 overflow-hidden w-full" id="Contact Us">
      <h1 className="text-2xl font-bold sm:text-4xl mb-2 text-center">
        Contact <span className="underline underline-offset-4 decoration-1 font-light">With Us</span>
      </h1>

      <p className="text-gray-500 text-center mb-12 mx-auto max-w-80">
        Ready to make a move? Let's build your future together
      </p>

      <form data-aos="fade-up" onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 mt-8">

        <div className="flex flex-wrap overflow-hidden">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              className="w-full mt-2 mb-1 px-4 py-3 border border-gray-300 rounded"
              name="Name" type="text" placeholder="Your Name"
              spellCheck="false" required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full mt-2 mb-1 px-4 py-3 border border-gray-300 rounded"
              name="Email" type="email" placeholder="Your Email" required
            />
          </div>
        </div>

        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 px-4 py-3 mt-2 h-48 rounded resize-none"
            placeholder="Message" name="message" spellCheck="false" required
          />
        </div>

        <button className="px-12 py-2 mb-10 rounded bg-blue-600 text-white">
          {result ? result : "Send Message"}
        </button>

      </form>
    </div>
  )
}

export default ContactInfo

