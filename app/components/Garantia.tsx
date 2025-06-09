'use client';

export default function Garantia() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 text-center mt-2">
      <img
        src="/images/selo.jpg"
        alt="Selo de Garantia Wizen"
      />

      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        7 dias de garantia
      </h1>

      <p className="text-lg text-gray-600 max-w-md">
        Experimente o <span className="font-semibold text-blue-600">Wizen</span> por 7 dias.  
        Se não for para você, basta cancelar dentro desse período e não será cobrado.
      </p>
    </div>
  );
}
