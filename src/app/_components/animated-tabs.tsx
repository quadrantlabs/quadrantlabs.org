import { motion } from "framer-motion";

let tabs = [
  { id: "section-a", label: "Home" },
  { id: "section-b", label: "Services" },
  { id: "section-c", label: "Methodology" },
  { id: "section-d", label: "Who we are" },
  { id: "section-e", label: "Contact" },
];

export function AnimatedTabs({
  activeTab = tabs[0].id,
}: {
  activeTab?: string;
}) {
  return (
    <div className="flex space-x-1 rounded-full bg-gray-950 p-1 border border-gray-800 font-mono">
      {tabs.map((tab) => (
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
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </a>
      ))}
    </div>
  );
}
