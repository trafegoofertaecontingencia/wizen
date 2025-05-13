
export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <div className="pt-15 md:pl-15 flex justify-center">
          <div className="flex flex-col">
            <p className="text-3xl">WIZEN</p>
            <p className="text-blue-300 text-4xl font-bold">App mobile</p>
            <p className="text-5xl font-bold">Seu novo assistente <br /> financeiro chegou</p>
            <p>Organize sua vida financeira com inteligência - mesmo que viva no aperto</p>
            <button className="bg-blue-300 rounded-lg p-3 mt-2 w-50">Testar por 7 dias grátis</button>
          </div>
        </div>
      </main>
    </div>
  );
}
