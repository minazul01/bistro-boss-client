import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Contact = () => {
  useEffect(() => {
    document.title = "Bistro Boss | Contact";
  }, []);


   const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    // Here you can send data to backend if needed

    // Show success alert
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your message has been sent!",
      showConfirmButton: false,
      timer: 1500,
    });

    e.target.reset(); // reset form fields
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Contact</title>
      </Helmet>
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-10">
            Have questions or want to work together? Fill out the form below and
            we’ll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-6 text-left bg-white text-black shadow-md rounded-2xl p-8">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
