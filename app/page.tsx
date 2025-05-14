import Bullets from "./components/Bullets";
import Intro from "./components/Intro";
import ForYou from "./components/ForYou";
import Solution from "./components/Solution"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Intro />
        <Bullets />
        <ForYou />
        <Solution />
      </main>
    </div>
  );
}
