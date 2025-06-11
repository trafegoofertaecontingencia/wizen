export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-tr from-slate-800 via-slate-950 to-slate-800 text-white py-10 overflow-hidden">
      {/* Ornamento suave */}
      <div className="absolute top-0 left-0 w-full h-2 bg-lime-500/60 blur-sm opacity-50" />

      {/* Linhas diagonais sutis */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.2),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-3 px-4">
        <p className="text-lg font-semibold text-lime-400 tracking-wide">
          Feito com 💙 por quem acredita na sua virada financeira
        </p>
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} <span className="font-bold text-white">Wizen</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
