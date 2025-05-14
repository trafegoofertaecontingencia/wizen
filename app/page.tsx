import Bullets from "./components/Bullets";
import Intro from "./components/Intro";
import ForYou from "./components/ForYou";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Intro />
        <Bullets />
        <ForYou />
      </main>
    </div>
  );
}
