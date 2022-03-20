import React from "react";
import { FaGithub, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a className="shadow-lg text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/mazylol" target="_blank">
          <FaGithub />
          <span class="sr-only">Github</span>
        </a>
        <a className="shadow-lg text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.youtube.com/channel/UCTU12OQOJq55jgqM88P8q0w" target="_blank">
          <FaYoutube />
          <span class="sr-only">Youtube</span>
        </a>
        <a className="shadow-lg text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/mazylol" target="_blank">
          <FaTwitter />
          <span class="sr-only">Twitter</span>
        </a>
        <a className="shadow-lg text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300" href="https://instagram.com/adumbcoder" target="_blank">
          <FaInstagram />
          <span class="sr-only">Instagram</span>
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with <span className="mr-2" role="link" aria-label="heart">❤️</span>by <a className="text-blue-500 hover:underline" href="https://vignette.wikia.nocookie.net/moviedatabase/images/9/97/Ricky_Bobby.jpg/revision/latest?cb=20171018204346" target="_blank">Mazy</a>
        </p>
      </div>
    </div>
  )
}

export default Footer;