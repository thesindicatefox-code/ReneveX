
import Link from 'next/link';
import { useState } from 'react';

const logos = ['/logo-1.svg','/logo-2.svg','/logo-3.svg'];

export default function Header(){
  const [i,setI] = useState(0);
  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <button onClick={()=>setI((i+1)%logos.length)} className="flex items-center gap-2">
          <img src={logos[i]} alt="logo" className="h-8 w-8"/>
          <span className="font-semibold tracking-wide">ReneveX Detailing</span>
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#packages">Packages</a>
          <a href="#calculator">Calculator</a>
          <a href="#booking">Booking</a>
          <a href="#rewards">Rewards</a>
          <a href="#assistant">AI Advisor</a>
          <Link href="/back">Back side</Link>
        </nav>
        <a href="#booking" className="shine inline-flex items-center px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg">Book Now</a>
      </div>
    </header>
  );
}
