import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../../assets/books/hero.jpg";
import Vector from "../../assets/website/blue-pattern.jpg";

const Hero = ({ handleOrderPopup }) => {
  return (
    <section
      className="relative flex items-center justify-center text-white overflow-hidden min-h-[550px] md:min-h-[600px]"
      style={{
        backgroundImage: `url(${Vector})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content container */}
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 items-center ">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left space-y-4"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-xl">
            National Library of Bangladesh</h1>

          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            Step into a world where every moment holds wonder, every challenge sparks growth, and every story leaves an imprint on your heart. Let yourself be moved, inspired, and transformed.
          </p>

          <div className="flex justify-center md:justify-start pt-2">
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary py-2.5 px-7 rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Order Now
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md p-1.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-500">
            <img
              src={HeroImage}
              alt="Book Cover"
              className="w-[280px] sm:w-[360px] lg:w-[420px] h-[360px] sm:h-[440px] object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
