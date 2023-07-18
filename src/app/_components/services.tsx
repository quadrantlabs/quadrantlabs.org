"use client";

import { Marquee } from "~/components/marquee";
import { SpotlightCard } from "~/components/spotlight-card";
import {
  services,
  type IconsWrapperProps,
  type Service,
} from "~/data/services";
import type { Icon as IconType } from "~/types";

function Icon({ svg: SVG }: { svg: IconType }) {
  return (
    <div className="flex items-center justify-center rounded-full border border-gray-800 bg-gray-950/100 p-3 transition-all group-hover/spotlight:bg-gray-950/50">
      <SVG className="h-10 w-10" />
    </div>
  );
}

function IconsWrapper({ icons, marquee = false }: IconsWrapperProps) {
  const content = icons.map((icon, i) => <Icon key={i} svg={icon} />);

  if (marquee) {
    return (
      <Marquee className="mt-auto pb-8 pt-4 group-hover/spotlight:[--animation-play-state:paused]">
        {content}
      </Marquee>
    );
  }

  return (
    <div className="mt-auto flex items-center -space-x-4 px-8 pb-8 pt-4 group-hover/spotlight:space-x-2">
      {content}
    </div>
  );
}

function ServiceCard({
  service,
  className,
  children,
}: {
  service: Service;
  className?: string;
  children?: React.ReactNode;
}) {
  const { title, description } = service;

  const content = children || (
    <IconsWrapper icons={service.icons!} marquee={service.marquee} />
  );

  return (
    <SpotlightCard className={className}>
      <div className="flex h-full flex-col">
        <div className="p-8 pb-0">
          <h3 className="mb-2 font-mono text-4xl font-semibold text-white transition-colors group-hover/spotlight:text-primary-400">
            {title}
          </h3>
          <p className="text-base text-gray-400">{description}</p>
        </div>
        {content}
      </div>
    </SpotlightCard>
  );
}

export function Services() {
  return (
    <section id="services" className="px-4 py-28">
      <div className="grid grid-cols-1 gap-4 desktop-container md:grid-cols-3">
        <ServiceCard
          service={services.frontend}
          className="[--duration:22s] md:col-span-2"
        />
        <ServiceCard
          service={services.backend}
          className="[--animation-delay:-0.5s] [--duration:15s]"
        />
        <ServiceCard service={services.uiux} />
        <ServiceCard
          service={{
            title: (
              <>
                <span className="text-6xl">{Object.keys(services).length}</span>
                <br />
                services
              </>
            ),
            description: "One price to rule them all.",
          }}
          className="row-span-2"
        >
          <div className="mt-auto p-8 pt-4 ">
            <h3 className="mb-2 inline-flex items-start font-mono text-6xl font-semibold text-primary-400 transition-colors group-hover/spotlight:text-white">
              €50/h<span className="text-xl">*</span>
            </h3>
            <p className="text-base text-gray-400">Depends on X and Y</p>
          </div>
        </ServiceCard>
        <ServiceCard service={services.devops} />
        <ServiceCard service={services.crossPlatform} />
        <ServiceCard service={services.consultancy} />
        <ServiceCard service={services.mentoring} />
        <SpotlightCard className="md:col-span-2">
          <div className="p-8">
            <h3 className="mb-2 font-mono text-4xl font-semibold text-white transition-colors group-hover/spotlight:text-primary-400">
              what about ...?
            </h3>
            <p className="text-base text-gray-400">
              Reach out and we{"'"}ll see what we can do!
            </p>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
