import { Services } from "./_components/services";

export default function Home() {
  return (
    <>
      <section id="section-a" className="h-[calc(100vh+3rem)]">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center font-mono text-5xl font-bold text-white">
            Quadrant Labs
          </div>
        </div>
      </section>
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
