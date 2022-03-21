import ScrollIntoView from "react-scroll-into-view"
import { FaChevronDown } from "react-icons/fa"

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey👋
      </p>
      <p className="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4">
        I am a discord bot developer that apparently also likes to dabble with webdev. I love creating bots that provide useful information in a quick and concise manner. I also love free and open source software.
      </p>
      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  )
}

export default About;