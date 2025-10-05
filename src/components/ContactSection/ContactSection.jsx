import React from "react";
import contactImg from "../../assets/contact.jpg";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white duration-300"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Have any questions? We'd love to hear from you. Send us a message and we’ll respond soon.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Image */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm h-100 bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
             <img
      src={contactImg}
      alt="Contact"
      className="object-cover w-full h-full"
    />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <form className="space-y-5">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2.5 rounded-md font-semibold hover:scale-105 transform transition-all duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
