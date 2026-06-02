export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  contribution: string;
  hobbies: string[];
  socials: SocialLink[];
  portrait: string;
};

export const siteTitle = "Smart Home Showcase";

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function createPortraitDataUri(name: string, base: string, accent: string) {
  const initials = initialsFromName(name);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 800" role="img" aria-label="${name}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${base}" />
          <stop offset="100%" stop-color="${accent}" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="24" flood-color="#3c2814" flood-opacity="0.22" />
        </filter>
      </defs>
      <rect width="640" height="800" rx="44" fill="url(#bg)"/>
      <circle cx="540" cy="120" r="120" fill="#ffffff18" />
      <circle cx="120" cy="650" r="150" fill="#ffffff12" />
      <rect x="90" y="120" width="460" height="560" rx="40" fill="#ffffff20" filter="url(#shadow)"/>
      <ellipse cx="320" cy="308" rx="112" ry="128" fill="#fff3e2" opacity="0.95" />
      <path d="M222 520c18-64 64-104 98-104h0c34 0 80 40 98 104 8 28-12 56-42 56H264c-30 0-50-28-42-56Z" fill="#fff3e2" opacity="0.95"/>
      <path d="M214 294c10-76 56-126 106-126s96 50 106 126c-18-26-56-42-106-42s-88 16-106 42Z" fill="#3a2416" opacity="0.18"/>
      <text x="320" y="612" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="108" font-weight="700" fill="#1f1812">${initials}</text>
      <text x="320" y="680" text-anchor="middle" font-family="Manrope, sans-serif" font-size="28" font-weight="600" fill="#1f1812" opacity="0.8">${name}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createVideoPosterDataUri() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" role="img" aria-label="Smart Home demo poster">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#083a42" />
          <stop offset="100%" stop-color="#2ac6c2" />
        </linearGradient>
      </defs>
      <rect width="1280" height="720" rx="48" fill="url(#bg)"/>
      <circle cx="1030" cy="120" r="90" fill="#ffffff18" />
      <circle cx="250" cy="590" r="140" fill="#ffffff12" />
      <rect x="130" y="110" width="1020" height="500" rx="40" fill="#ffffff14" />
      <rect x="210" y="180" width="860" height="320" rx="32" fill="#f2fffe" opacity="0.95" />
      <rect x="260" y="220" width="180" height="240" rx="20" fill="#b9f3f1" />
      <rect x="470" y="220" width="180" height="150" rx="20" fill="#91dfe0" />
      <rect x="670" y="220" width="320" height="150" rx="20" fill="#5fcfca" />
      <circle cx="830" cy="415" r="60" fill="#12656f" />
      <path d="M830 350c-18 0-28 10-28 22v8c0 12 10 22 28 22s28-10 28-22v-8c0-12-10-22-28-22Z" fill="#083a42" opacity="0.86" />
      <text x="640" y="575" text-anchor="middle" font-family="Space Grotesk, sans-serif" font-size="56" font-weight="700" fill="#f3fffe">Smart Home Demo</text>
      <text x="640" y="628" text-anchor="middle" font-family="Manrope, sans-serif" font-size="28" font-weight="500" fill="#f3fffe" opacity="0.9">Curtains, light, and fan automation in one prototype</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const projectVideoSrc = "/app/content/img/demo.MOV";
export const projectVideoPoster = createVideoPosterDataUri();

export const projectHighlights = [
  {
    title: "Curtains at dusk",
    description:
      "When the room gets dark, the curtains open and the space feels ready for the evening.",
  },
  {
    title: "Light on when it is dark",
    description:
      "The light switches on automatically once there is not enough daylight.",
  },
  {
    title: "Fan control by temperature",
    description:
      "Warm conditions turn the fan on, and cooler conditions switch it off again.",
  },
];

export const people: Person[] = [
  {
    slug: "botond",
    name: "Botond Nemeth",
    role: "C# coder and Builder",
    bio: "Mechatronics student from Hungary",
    contribution: "Core builder and implementation support",
    hobbies: [
      "🥏 Frizzbee",
      "🚲 Bicycle",
      "🍳 Cooking",
      "🥾 Hiking",
      "📺 Watching TV-shows",
    ],
    socials: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/share/1ApZZTDLrj/",
        handle: "facebook.com/botond",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/botond-németh-07b36b314",
        handle: "linkedin.com/in/botond-nemeth",
      },
    ],
    portrait: "/app/content/img/botond.jpg",
  },
  {
    slug: "nandhan",
    name: "Nandhan Gunasekaran",
    role: "Emotional support character",
    bio: "Robotics and Automation student",
    contribution: "Hardware integration and testing",
    hobbies: ["🎧 Listening to music", "📺 Watching TV-series", "🏋️‍♂️ Gym"],
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/nandhan-gunasekaran/",
        handle: "linkedin.com/in/nandhan-gunasekaran",
      },
    ],
    portrait: "/app/content/img/nandhan.jpg",
  },
  {
    slug: "roxanne",
    name: "Roxanne Collett",
    role: "Web developer and Software Architect",
    bio: "Applied Computer Science student",
    contribution: "Frontend and site architecture",
    hobbies: [
      "📸 Photography",
      "🚗 Cars",
      "🎧 Listening to music",
      "📚 Reading",
      "✈️ Traveling",
    ],
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/roxanne-collett03122003",
        handle: "linkedin.com/in/roxanne-collett03122003",
      },
    ],
    portrait: "/app/content/img/roxanne.jpeg",
  },
];

export const teamTemplate = `# Smart Home Website Team Template

## Project

Project title:

Project summary:

1. Project Overview & Objectives

Video file name or link:

## Person 1

Full name:

Role on the team:

Short bio:

Hobbies:

Social links:

Photo file name or link:

## Person 2

Full name:

Role on the team:

Short bio:

Hobbies:

Social links:

Photo file name or link:

## Person 3

Full name:

Role on the team:

Short bio:

Hobbies:

Social links:

Photo file name or link:
`;

export function getPersonBySlug(slug: string | undefined) {
  return people.find((person) => person.slug === slug);
}
