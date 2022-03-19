import React from "react";
import profile from "../images/profile.jpg"
import { FaGithub, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa"

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-lg" src={profile} alt="profile photo" />
        </div>
      <div className="text-center mt-5">
        <p className="text-xl sm:text-2xl text-gray-900">
          Mazy
        </p>
        <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
          Discord Bot Dev / Linux Lover
        </p>
        <div className="flex align-center justify-center mt-4">
          <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/mazylol" target="_blank">
            <FaGithub />
            <span class="sr-only">Github</span>
          </a>
          <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.youtube.com/channel/UCTU12OQOJq55jgqM88P8q0w" target="_blank">
            <FaYoutube />
            <span class="sr-only">Youtube</span>
          </a>
          <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/mazylol" target="_blank">
            <FaTwitter />
            <span class="sr-only">Twitter</span>
          </a>
          <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300" href="https://instagram.com/adumbcoder" target="_blank">
            <FaInstagram />
            <span class="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card;