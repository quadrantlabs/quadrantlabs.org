"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useScrollspy } from "~/hooks/use-scrollspy";

const TABS = [
  { id: "section-a", label: "Home" },
  { id: "section-b", label: "Services" },
  { id: "section-c", label: "Methodology" },
  { id: "section-d", label: "Who we are" },
  { id: "section-e", label: "Contact" },
];

const ANIMATION_DURATION = 0.6;

function AnimatedTabs({ activeTab }: { activeTab?: string }) {
  const [enableFadeEffect, setEnableFadeEffect] = useState(true);

  useEffect(() => {
    if (!activeTab) return;
    const id = setTimeout(() => {
      setEnableFadeEffect(false);
    }, ANIMATION_DURATION * 1000);

    return () => {
      clearTimeout(id);
    };
  }, [activeTab, enableFadeEffect]);

  return (
    <div className="flex space-x-1 rounded-full border border-gray-800 bg-gray-950/75 p-1 font-mono backdrop-blur-sm">
      {TABS.map((tab) => (
        <a
          href={`#${tab.id}`}
          key={tab.id}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-white transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-primary-400 mix-blend-lighten"
              style={{
                borderRadius: 9999,
              }}
              initial={enableFadeEffect ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: ANIMATION_DURATION,
              }}
            />
          )}
          {tab.label}
        </a>
      ))}
    </div>
  );
}

export function Navbar() {
  const { activeHeading, updateHeadings } = useScrollspy();

  useEffect(() => {
    updateHeadings([...document.querySelectorAll("main section[id]")]);
  }, [updateHeadings]);
  return (
    <>
      <div className="fixed inset-0 bottom-auto z-50 hidden sm:block">
        <div className="flex items-center justify-center p-2">
          <AnimatedTabs activeTab={activeHeading} />
        </div>
      </div>
      <div className="fixed left-4 top-4 z-50 block sm:hidden">
        <button
          type="button"
          onClick={() => {
            alert("open menu");
          }}
          className="rounded-full border border-gray-800 bg-gray-950/75 p-3 font-mono text-gray-100 backdrop-blur-sm transition-colors hover:bg-gray-800/75 hover:text-primary-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
