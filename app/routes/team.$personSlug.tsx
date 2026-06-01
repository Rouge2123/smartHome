import { Link, useLoaderData } from "react-router";

import type { Route } from "./+types/team.$personSlug";
import { getPersonBySlug, people, siteTitle } from "../content/site-data";

export async function loader({ params }: Route.LoaderArgs) {
  const person = getPersonBySlug(params.personSlug);

  if (!person) {
    throw new Response("Not Found", { status: 404 });
  }

  return { person };
}

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: `${data.person.name} | ${siteTitle}` },
    {
      name: "description",
      content: `${data.person.name} details, hobbies, and social links.`,
    },
  ];
}

export default function PersonPage() {
  const { person } = useLoaderData<typeof loader>();

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 shadow-[0_30px_90px_rgba(49,33,19,0.12)] backdrop-blur">
        <div className="border-b border-black/8 px-6 py-5 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#fff8ee] px-4 py-2 text-sm font-semibold text-[#1f1812] transition hover:-translate-y-0.5 hover:bg-white">
            Back to overview
          </Link>
        </div>

        <section className="grid gap-8 px-6 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-10">
          <div className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-[#f6ede0] shadow-[0_20px_50px_rgba(49,33,19,0.1)]">
            <img
              src={person.portrait}
              alt={person.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8b6f58]">
                Team profile
              </p>
              <h1 className="font-display text-5xl tracking-[-0.04em] text-[#1f1812] sm:text-6xl">
                {person.name}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[#5b4a3f]">
                {person.bio}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-[1.5rem] border border-black/10 bg-[#fffaf2] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8b6f58]">
                  Role
                </p>
                <p className="mt-2 text-lg font-medium text-[#1f1812]">
                  {person.role}
                </p>
              </article>
              <article className="rounded-[1.5rem] border border-black/10 bg-[#fffaf2] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8b6f58]">
                  Project contribution
                </p>
                <p className="mt-2 text-lg font-medium text-[#1f1812]">
                  {person.contribution}
                </p>
              </article>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8b6f58]">
                  Hobbies
                </p>
                <ul className="mt-3 space-y-2 text-[#4f4135]">
                  {person.hobbies.map((hobby) => (
                    <li
                      key={hobby}
                      className="rounded-full border border-black/8 bg-[#faf5ec] px-4 py-2">
                      {hobby}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8b6f58]">
                  Social media
                </p>
                <div className="mt-3 space-y-3">
                  {person.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-black/10 bg-[#fffaf2] px-4 py-3 transition hover:-translate-y-0.5 hover:bg-white">
                      <span className="font-medium text-[#1f1812]">
                        {social.label}
                      </span>
                      <span className="text-sm text-[#7a624f]">
                        {social.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="border-t border-black/8 px-6 py-8 lg:px-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8b6f58]">
                Other team members
              </p>
              <h2 className="font-display text-3xl tracking-[-0.03em] text-[#1f1812]">
                Explore the rest of the crew
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#5b4a3f] sm:text-base">
              Each page follows the same structure so your presentation stays
              consistent across the whole team.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {people
              .filter((entry) => entry.slug !== person.slug)
              .map((entry) => (
                <Link
                  key={entry.slug}
                  to={`/team/${entry.slug}`}
                  className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(49,33,19,0.12)]">
                  <img
                    src={entry.portrait}
                    alt={entry.name}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="p-4">
                    <p className="font-display text-2xl text-[#1f1812]">
                      {entry.name}
                    </p>
                    <p className="mt-1 text-sm text-[#5b4a3f]">{entry.role}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
}
