
import Link from 'next/link';

export default function Back(){
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full card-scene">
        <div className="card flip bg-slate-900 rounded-3xl p-8 shadow-xl">
          <div className="card-side card-back">
            <h1 className="text-3xl font-bold">ReneveX — Contacts</h1>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Email: <a className="underline" href="mailto:vladyslavpukas08@gmail.com">vladyslavpukas08@gmail.com</a></li>
              <li>Telegram: <a className="underline" href="https://t.me/vpnxl" target="_blank">@vpnxl</a></li>
              <li>Facebook: Vladyslav Pukas</li>
              <li>Location: Minneapolis, MN</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <Link href="/" className="px-4 py-2 rounded-xl bg-white text-slate-900">Front side</Link>
              <a href="#booking" className="px-4 py-2 rounded-xl bg-blue-600 text-white">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
