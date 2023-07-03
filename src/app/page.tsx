"use client";


export default function Home() {
  return (
    <>
      <section
        id="section-a"
        className="h-[calc(100vh+3rem)]"
      >
      <div className="px-4 max-w-6xl mx-auto py-20">
        <div className="text-white text-5xl font-bold text-center font-mono">Quadrant Labs</div>
      </div>
      </section>
      <section
        id="section-b"
        className="h-[calc(100vh+3rem)] bg-primary-900/50"
      ></section>
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
