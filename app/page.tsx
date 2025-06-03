import Bullets from "./components/Bullets";
import Intro from "./components/Intro";
import ForYou from "./components/ForYou";
import Solution from "./components/Solution";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Session1 from "./components/Session1";
import Session2 from "./components/Session2";
import Session3 from "./components/Session3";
import Session4 from "./components/Session4";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Intro />
        <Session1 />
        <Session2 />
        <Session3 />
        <Session4 />
        <Features />
        {/* <Bullets /> */}
        <ForYou />
        <Solution />
        <Cta />
        <Faq />
      </main>
    </div>
  );
}
