'use client';

export default function Garantia() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-900 text-center py-16 px-4">
      <img
        src="/images/selo.jpg"
        alt="Selo de Garantia Wizen"
        className="w-36 h-auto mb-6"
      />

      <h1 className="text-3xl font-bold text-white mb-4">
        7 dias de garantia
      </h1>

      <p className="text-lg text-slate-300 max-w-md">
        Experimente o <span className="font-semibold text-blue-400">Wizen</span> por 7 dias.  
        Se não for para você, basta cancelar dentro desse período e não será cobrado.
      </p>
    </div>
  );
}
