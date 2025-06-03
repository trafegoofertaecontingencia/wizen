import Bullets from "./components/Bullets";
import Intro from "./components/Intro";
import ForYou from "./components/ForYou";
import Solution from "./components/Solution";
import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import AboutForm from "./components/AboutForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Intro />
        <AboutForm />
        <AboutForm />
        <AboutForm />
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
