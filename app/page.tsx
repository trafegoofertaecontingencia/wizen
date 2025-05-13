import Bullets from "./components/Bullets";
import Intro from "./components/Intro";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Intro />
        <Bullets />
      </main>
    </div>
  );
}
