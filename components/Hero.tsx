
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">ReneveX — Renaissance of Shine</h1>
          <p className="mt-5 text-slate-300 text-lg max-w-xl">Porsche‑level aesthetics, Renaissance philosophy. We come to you and deliver showroom shine.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#booking" className="shine inline-flex items-center px-6 py-3 rounded-2xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg">Book Now</a>
            <a href="#packages" className="inline-flex items-center px-6 py-3 rounded-2xl ring-1 ring-white/40 text-white hover:bg-white/10">View Packages</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-2"><span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400"/> Insured</div>
            <div className="flex items-center gap-2"><span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-400"/> Eco‑friendly</div>
            <div className="flex items-center gap-2"><span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400"/> 5‑Star Rated</div>
          </div>
        </div>
        <motion.div initial={{scale:.96, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:.6}}>
          <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop" alt="detailed car" className="rounded-3xl shadow-2xl border border-white/10"/>
        </motion.div>
      </div>
    </section>
  );
}
