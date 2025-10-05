import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaLocationArrow,
  FaMobileAlt,
  FaTwitter,
} from "react-icons/fa";
import footerLogo from "../../assets/website/logo.png";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Services", link: "/#services" },
  { title: "Blog", link: "/#blog" },
  { title: "Contact", link: "/#contact" },
];

const SocialLinks = [
  { icon: <FaFacebook size={24} />, link: "https://www.facebook.com/profile.php?id=61579169183396" },
  { icon: <FaLinkedin size={24} />, link: "https://linkedin.com/in/tajul-islam-b4803a378" },
  { icon: <FaGithub size={24} />, link: "https://github.com/tajulislamdeviu ja-=" },
  { icon: <FaTwitter size={24} />, link: "https://x.com/TajulIslam43453" },
  { icon: <FaEnvelope size={24} />, link: "mailto:your@email.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img src={footerLogo} alt="Logo" className="w-12" />
            <h2 className="text-2xl font-bold">Books Store</h2>
          </div>
          <p>
            Discover and order the best books online. Inspiring stories and captivating reads at your fingertips.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            {SocialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Important Links</h3>
            <ul className="space-y-2">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>&#10148;</span> {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="hover:text-primary transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>&#10148;</span> {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Location</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaLocationArrow className="text-primary" /> Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-2">
                <FaMobileAlt className="text-primary" /> +880 1641739041
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
     <div className="border-t border-gray-300/50 mt-10 text-center py-6 text-sm">
  &copy; 2025 Md Tajul Islam. All rights reserved.
</div>

    </footer>
  );
};

export default Footer;
