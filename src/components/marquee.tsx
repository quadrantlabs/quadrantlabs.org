import clsx from "clsx";

export function Marquee({
  children,
  className,
  duration,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <div
      className={clsx("relative flex max-w-full overflow-hidden", className)}
    >
      <div
        className="flex w-max animate-loop items-stretch gap-[--gap] [--gap:theme(spacing.2)] [animation-delay:--animation-delay] [animation-play-state:--animation-play-state] hover:[--animation-play-state:paused]"
        style={{
          ["--duration" as any]: duration ? `${duration}ms` : undefined,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
