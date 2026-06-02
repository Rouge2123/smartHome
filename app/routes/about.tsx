import { Link } from "react-router";

import type { Route } from "./+types/about";
import { people, siteTitle, teamTemplate } from "../content/site-data";
import ShapeBlur from "../components/animations/ShapeBlur";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${siteTitle} | About us` },
    {
      name: "description",
      content:
        "Team page with profiles, hobbies, and social links for the smart-home project.",
    },
  ];
}

export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-[#0f7f84]/20 bg-white/78 shadow-[0_30px_90px_rgba(8,36,41,0.12)] backdrop-blur">
        <section className="border-b border-[#0f7f84]/10 px-6 py-8 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-[#0f7f84]/20 bg-[#e5fffd] px-4 py-2 text-sm font-medium text-[#0b6470] shadow-sm">
                About us
              </div>
              <h1 className="font-display text-5xl leading-none tracking-[-0.04em] text-[#07333b] sm:text-6xl lg:text-7xl">
                The people behind the smart-home project
              </h1>
              <p className="max-w-3xl text-lg text-[#265a60] sm:text-xl">
                This page is for the team.
              </p>{" "}
              <p className="max-w-3xl text-lg text-[#265a60] sm:text-xl">
                Each person has their own profile card with more information.
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-[#0b7f86] px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0a6d74]">
              Back to project
            </Link>
          </div>
        </section>

        <section className="px-6 py-8 lg:px-10">
          <div className="grid gap-5 grid-cols-3">
            {people.map((person) => (
              <Link
                key={person.slug}
                to={`/team/${person.slug}`}
                className="group block rounded-[1.75rem] border border-[#0f7f84]/15 bg-[#effffd] p-4 shadow-[0_16px_40px_rgba(8,36,41,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(8,36,41,0.12)]">
                <div className="overflow-hidden rounded-[1.25rem] border border-[#0f7f84]/15 bg-[#d7fbf8]">
                  <img
                    src={person.portrait}
                    alt={person.name}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="font-display text-2xl text-[#07333b]">
                        {person.name}
                      </h2>
                      <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#0f7f84]">
                        {person.role}
                      </p>
                    </div>
                    <span className="rounded-full border border-[#0f7f84]/15 bg-white px-3 py-1 text-xs font-semibold text-[#0b6470]">
                      Details
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-[#265a60]">
                    {person.bio}
                  </p>
                  <ul className="flex flex-wrap gap-2 text-sm text-[#24575d]">
                    {person.hobbies.map((hobby) => (
                      <li
                        key={hobby}
                        className="rounded-full border border-[#0f7f84]/15 bg-white px-3 py-1">
                        {hobby}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
