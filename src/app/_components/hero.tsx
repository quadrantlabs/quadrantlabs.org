import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="px-4 py-36 pb-16">
      <div className="desktop-container">
        <div className="grid grid-cols-2 gap-8">
          <div className="">
            <h1 className="font-mono text-8xl font-semibold text-white">
              Quadrant
              <span className="block text-primary-400">Labs</span>
            </h1>
            <p className="mt-4 text-xl text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              fugiat officia.
            </p>
          </div>
          <div className="relative h-auto w-full scale-125">
            <Image
              src="/img/sextant.png"
              alt="Sextant"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
