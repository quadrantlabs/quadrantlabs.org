import { Hero } from "./_components/hero";
import { Services } from "./_components/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <section
        id="section-c"
        className="h-[calc(100vh+3rem)] bg-primary-950/50"
      ></section>
      <section
        id="section-d"
        className="h-[calc(100vh+3rem)] bg-primary-900/50"
      ></section>
      <section
        id="section-e"
        className="h-[calc(100vh+3rem)] bg-primary-950/50"
      ></section>
    </>
  );
}
