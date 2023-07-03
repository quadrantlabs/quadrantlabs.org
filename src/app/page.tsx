"use client";

import { useScrollspy } from "~/hooks/use-scrollspy";
import { AnimatedTabs } from "./_components/animated-tabs";
import { useEffect } from "react";

export default function Home() {
  const { activeHeading, updateHeadings } = useScrollspy();

  useEffect(() => {
    updateHeadings([...document.querySelectorAll("main section[id]")]);
  }, [updateHeadings]);

  return (
    <div>
      <div>Home</div>
      <div className="fixed inset-0 bottom-auto z-50">
        <div className="flex items-center justify-center p-2">
          <AnimatedTabs activeTab={activeHeading} />
        </div>
      </div>
      {/* <section
        id="section-a"
        className="h-[calc(100vh+3rem)] bg-primary-950"
      ></section>
      <section
        id="section-b"
        className="h-[calc(100vh+3rem)] bg-primary-900"
      ></section>
      <section
        id="section-c"
        className="h-[calc(100vh+3rem)] bg-primary-950"
      ></section>
      <section
        id="section-d"
        className="h-[calc(100vh+3rem)] bg-primary-900"
      ></section>
      <section
        id="section-e"
        className="h-[calc(100vh+3rem)] bg-primary-950"
      ></section> */}
    </div>
  );
}
