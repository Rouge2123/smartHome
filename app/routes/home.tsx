import type { Route } from "./+types/home";
import { Link } from "react-router";
import {
  projectHighlights,
  projectVideoPoster,
  projectVideoSrc,
  siteTitle,
} from "../content/site-data";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${siteTitle} | Project` },
    {
      name: "description",
      content:
        "Smart-home project showcase with demo video and automation details.",
    },
  ];
}

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-[#0f7f84]/20 bg-white/78 shadow-[0_30px_90px_rgba(8,36,41,0.12)] backdrop-blur">
        <section className="grid gap-8 px-6 py-8 lg:px-10 lg:py-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="font-display text-5xl leading-none tracking-[-0.04em] text-[#07333b] sm:text-6xl lg:text-7xl">
                A smart home prototype built to react to the environment
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[#265a60] sm:text-xl">
                We built a basic smart-home instance that reacts to the
                environment: curtains open when it gets dark, the light turns
                on, and the fan switches on when it is warm and off when it
                becomes cool again.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#project"
                className="rounded-full bg-[#0b7f86] px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-[#0a6d74]">
                Jump to project
              </a>
              <a
                href="/about"
                className="rounded-full border border-[#0f7f84]/20 bg-white px-5 py-3 text-sm font-semibold text-[#07333b] transition hover:-translate-y-0.5 hover:border-[#0f7f84]/40 hover:bg-[#eefefd]">
                About the team
              </a>
            </div>
          </div>
        </section>

        <section
          id="project"
          className="border-t border-[#0f7f84]/10 px-6 py-8 lg:px-10">
          <div className="grid gap-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f7f84]">
                From our Arduino project
              </p>
              <h2 className="font-display text-3xl tracking-[-0.03em] text-[#07333b] sm:text-4xl">
                Automation that makes day to day life more comfortable
              </h2>
              <p className="max-w-xl text-base text-[#265a60]">
                The project was designed to show a practical smart-home
                workflow: detect light, react to temperature, and give a simple
                visual result.
              </p>
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-[1.75rem] border border-[#0f7f84]/15 bg-black shadow-[0_24px_55px_rgba(8,58,66,0.18)]">
                <video
                  controls
                  poster={projectVideoPoster}
                  className="w-full h-full object-cover">
                  <source src={projectVideoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {projectHighlights.map((highlight) => (
                  <article
                    key={highlight.title}
                    className="rounded-[1.5rem] border border-[#0f7f84]/15 bg-white p-5 shadow-sm">
                    <h3 className="font-display text-xl text-[#07333b]">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#265a60]">
                      {highlight.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
