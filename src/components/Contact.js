import React from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_glyqcqb";
const TEMPLATE_ID = "template_6w7hgni";
const USER_ID = "DJqJHCe58M7g6r3gF";

const Contact = () => {
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID);
      alert("Your message has been sent successfully!");
      e.target.reset();
    } catch (error) {
      alert("Failed to send the message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-4 py-10 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Map + Info */}
        <div className="h-full">
          <div className="rounded-lg overflow-hidden shadow-md mb-6">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=mark%20ave+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="w-full h-64 border-0"
              allowFullScreen
              title="Google Map"
            />
          </div>

          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-md ">
            <h3 className="text-xl font-semibold mb-4">Say hello 👋</h3>
            <p className="mb-2">📞 +1-226-961-7716</p>
            <p>
              📧{" "}
              <a
                href="mailto:dhvani.sheth.2510@gmail.com"
                className="underline hover:text-indigo-300"
              >
                dhvani.sheth.2510@gmail.com
              </a>
            </p>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/in/dhvani-sheth-25oct/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="hover:text-indigo-400 text-2xl"
              >
                <i className="uil uil-linkedin"></i>
              </a>
              <a
                href="https://github.com/dhvani2510"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="hover:text-indigo-400 text-2xl"
              >
                <i className="uil uil-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 h-full">
          <h2 className="text-2xl font-semibold mb-6">
            Interested to work together? Let’s talk
          </h2>

          <form onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="from_name" className="block mb-1 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="from_email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded transition duration-200 shadow"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
