import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold font-serif text-primary">
            Online Book
          </h2>
          <p className="mt-3 text-sm leading-6">
            Borrow and read your favorite books anytime, anywhere. 
            Explore thousands of books with an easy online borrowing system.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/books" className="hover:text-primary">
                Books
              </Link>
            </li>
            <li>
              <Link href="/borrow" className="hover:text-primary">
                Borrow
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer">Fiction</li>
            <li className="hover:text-primary cursor-pointer">Science</li>
            <li className="hover:text-primary cursor-pointer">Technology</li>
            <li className="hover:text-primary cursor-pointer">History</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="p-3 rounded-full bg-base-300 hover:bg-primary hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-base-300 hover:bg-primary hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-base-300 hover:bg-primary hover:text-white transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-base-300 hover:bg-primary hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-base-300 py-4 text-center text-sm">
        © {new Date().getFullYear()} Online Book Borrowing Website. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;