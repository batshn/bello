'use client'

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";


function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-[#c9c8b6]/10 shadow-md rounded-lg">

        {/*Gradient Back color*/}
        <div className="
        absolute
        top-0
        left-0
        w-full
        h-96
        bg-gradient-to-br
        from-[#5D8AA8]
        to-gray-100
        blur-3xl
        -z-50
        opacity-20
        " />
      

        {/*logo  */}
        <Image
            src="/assets/logo.svg"
            alt="Bello Logo"
            width={300}
            height={100}
            className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        {/* Search box and Avatar */}
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
           <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-sm flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input type="text" placeholder="Search" className="flex-1 outline-none"/>
            <button hidden>Search</button>
           </form>

          <Avatar name="Batji Dashdorj" size="50" color="#1c90bf" round />
        </div>

      </div>
    </header>
  )
}

export default Header