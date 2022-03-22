import { FaReact } from "react-icons/fa"
import { BiGitBranch } from "react-icons/bi"
import { SiJavascript, SiTailwindcss, SiLua, SiNetlify, SiC, SiRust, SiGnubash } from "react-icons/si"
import { FcLinux } from "react-icons/fc"
import { GiSandSnake } from "react-icons/gi"
 
function Skills() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black text-center sm:text-4xl font-bold">
        Skills
      </p>
      <div className="flex flex-wrap justify-center pt-2">
      <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#f0db4f" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Javascript</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#61dafb" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">React</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#0EA5E9" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Tailwind</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <GiSandSnake color="#3CCB91" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Python</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiLua color="#000080" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Lua</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiC color="gray" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">C</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiRust color="#b7410e" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Rust</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiGnubash color="" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Bash</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <BiGitBranch color="#f14e32" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Git</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FcLinux color="" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Linux</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiNetlify color="#30C8C9" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Netlify</p>
        </div>
      </div>
    </div>
  )
}

export default Skills;