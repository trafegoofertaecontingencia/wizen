import Bullets from "./components/Bullets";
import Intro from "./components/Intro";
import ForYou from "./components/ForYou";
import Solution from "./components/Solution"
import Cta from "./components/Cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Intro />
        <Bullets />
        <ForYou />
        <Solution />
        <Cta />
      </main>
    </div>
  );
}
