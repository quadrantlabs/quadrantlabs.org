"use client";

import { useEffect } from "react";
import { useScrollspy } from "~/hooks/use-scrollspy";
import { AnimatedTabs } from "./animated-tabs";

export function Navbar() {
  const { activeHeading, updateHeadings } = useScrollspy();

  useEffect(() => {
    updateHeadings([...document.querySelectorAll("main section[id]")]);
  }, [updateHeadings]);
  return (
    <div className="fixed inset-0 bottom-auto z-50">
      <div className="flex items-center justify-center p-2">
        <AnimatedTabs activeTab={activeHeading} />
      </div>
    </div>
  );
}
