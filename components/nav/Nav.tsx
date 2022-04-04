import { useRouter } from "next/router";
import React from "react";
import {requests} from "../../utils/requests";

export const Nav: React.FC = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap 
      space-x-10 sm:space-x-20
      overflow-x-scroll scrollbar-hide"
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition transform hover:scale-125
             hover:text-white 
             active:text-red-500
             "
          >
            {title}
          </h2>
        ))}
      </div>
      {/* //? Fading effect trick */}
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#0c1f27] h-10 w-1/12" />
    </nav>
  );
};
