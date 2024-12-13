import React from "react";
import emailjs from "emailjs-com";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    // Use the emailjs-com library's sendForm method properly
    emailjs
      .sendForm(
        "service_glyqcqb", // Replace with your EmailJS service ID
        "template_6w7hgni", // Replace with your EmailJS template ID
        e.target, // Pass the form element (not a selector string)
        "DJqJHCe58M7g6r3gF" // Replace with your EmailJS public key (from your account dashboard)
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <section className="contact p-2 d-lg-flex justify-content-center align-items-center" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mr-lg-5 col-12">
            <div className="google-map w-100">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=mark%20ave+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                title="map"
              />
            </div>

            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
              <div className="contact-info-item">
                <h3 className="mb-3 text-white">Say hello</h3>
                <p className="footer-text mb-0">+1-226-961-7716</p>
                <p>
                  <a href="mailto:dhvani.sheth.2510@gmail.com">
                    dhvani.sheth.2510@gmail.com
                  </a>
                </p>
              </div>

              <ul className="social-links">
                <li>
                  <a
                    href="https://www.linkedin.com/in/dhvani-sheth-25oct/"
                    target="_blank"
                    className="uil uil-linkedin"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="LinkedIn"
                    rel="noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    href="https://github.com/dhvani2510"
                    target="_blank"
                    className="uil uil-github"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="GitHub"
                    rel="noreferrer"
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h2 className="mb-4">Interested to work together? Let's talk</h2>

              <form onSubmit={sendEmail} id="contact-form">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="from_name"
                      placeholder="Your Name"
                      id="name"
                      required
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="from_email"
                      placeholder="Email"
                      id="email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      rows="6"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="ml-lg-auto col-lg-5 col-12">
                    <input
                      type="submit"
                      className="form-control submit-btn"
                      value="Send Message"
                      id="submit"
                      name="submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
