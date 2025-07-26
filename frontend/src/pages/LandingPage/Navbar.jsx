import React from "react";
import { Quote } from 'lucide-react';

export default function Navbar() {
  return <>
  <nav className="px-2 py-[16px] md:px-[24px] flex justify-between items-center backdrop-blur-sm bg-white/80 border-b border-purple-100 fixed w-full">
    <a href="/" className="flex gap-2">
     <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center">
        <Quote className="w-4 h-4 text-white" />
     </div>
     <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
        Quillera
     </span>
    </a>
    <div className="flex gap-2 md:gap-8">
<button className="relative group text-sm font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
  Sign In
<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-violet-600 transition-all duration-300 group-hover:w-full group-hover:rounded-3xl"></span>
</button>
<button className="bg-gradient-to-r from-purple-600 to-violet-600 p-2 md:px-4 md:py-2 text-white rounded-sm hover:scale-[1.02]">
  Get Started
</button>
</div>
</nav>
  </>;
}
