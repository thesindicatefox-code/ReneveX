
export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} ReneveX Mobile Detailing</p>
        <div className="text-sm">Minneapolis–St. Paul • v1.0</div>
      </div>
    </footer>
  );
}
