/// <reference types="vite/client" />
import { useState } from "react";
import StudioFooter from "../components/StudioFooter";
import Navbar from "../components/Navbar";

/**
 * @typedef {Object} Social
 * @property {keyof typeof socialIcons} platform One of the keys in `socialIcons`.
 * @property {string} href
 */

/**
 * @typedef {Object} Member
 * @property {string} name
 * @property {string} role
 * @property {string} [image] Path under /public, resolved against the site base URL.
 * @property {string} bio
 * @property {Social[]} [socials] Optional per-member social links.
 */

// Icon registry. Each member's `socials` entries reference one of these keys.
// To support a new platform, add an entry here and use its key in a member's
// `socials` array.
const socialIcons = {
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  artstation: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 0 0-2.142-1.289H9.419L21.598 22.54l1.92-3.325c.378-.637.482-.919.482-1.467zm-11.129-3.462L7.428 4.858l-5.444 9.428h10.887z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  website: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

// Placeholder team data. Drop real photos into /public/team/ and update the
// fields below. The `image` path is resolved against the site base URL.
// Add a `socials` array to give a member links; each entry's `platform` must
// match a key in `socialIcons` above.
/** @type {Member[]} */
const team = [
  {
    name: "Omer Schapiro",
    role: "Engineer",
    image: "team/member-one.jpg",
    bio: "Short bio goes here. A sentence or two on what this person does at the studio and what they bring to the table.",
    socials: [
      { platform: "linkedin", href: "https://www.linkedin.com/in/omerschapiro" },
    ],
  },
  {
    name: "Rotem Zeitler",
    role: "Artist",
    image: "team/member-two.jpg",
    bio: "Short bio goes here. A sentence or two on what this person does at the studio and what they bring to the table.",
    socials: [
      { platform: "artstation", href: "https://www.artstation.com/" },
    ],
  },
  {
    name: "Guy Shimron",
    role: "Game designer",
    image: "team/member-three.jpg",
    bio: "Short bio goes here. A sentence or two on what this person does at the studio and what they bring to the table.",
    socials: [],
  },
];

/** @param {string} name */
const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

/** @param {{ member: Member }} props */
function TeamMember({ member }) {
  // Fall back to the initials monogram if the photo is missing or fails to load.
  const [showImage, setShowImage] = useState(Boolean(member.image));

  return (
    <div className="flex flex-col items-center text-center">
      {/* Portrait */}
      <div className="relative mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border border-[#2a3a20] bg-[#0e0e0e] flex items-center justify-center">
          {showImage ? (
            <img
              src={`${import.meta.env.BASE_URL}${member.image}`}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={() => setShowImage(false)}
            />
          ) : (
            <div className="flex items-center justify-center text-[#6b8f4e] text-3xl font-black tracking-widest">
              {initials(member.name)}
            </div>
          )}
        </div>
        {/* Ornamental ring accent */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#6b8f4e] opacity-50" />
      </div>

      <h3 className="text-[#d4c9b0] text-lg font-bold uppercase tracking-widest mb-1">
        {member.name}
      </h3>
      <p className="text-[#6b8f4e] text-xs tracking-[0.3em] uppercase mb-4 font-medium">
        {member.role}
      </p>
      {/* <p className="text-[#8a7d6a] text-sm leading-relaxed max-w-xs">
        {member.bio}
      </p> */}

      {/* {member.socials && member.socials.length > 0 && (
        <div className="flex items-center gap-4">
          {member.socials.map(({ platform, href }) => (
            <a
              key={platform}
              href={href}
              aria-label={`${member.name} on ${platform}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3a3028] hover:text-[#8a7d6a] transition-colors duration-200"
            >
              {socialIcons[platform]}
            </a>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#080808] text-white font-sans">
      <Navbar />

      <div className="relative flex-1 overflow-hidden">
        {/* Dot texture */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #c8b89a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <p className="text-[#6b8f4e] text-xs tracking-[0.4em] uppercase mb-8 font-medium">
              The Marsh Refinery
            </p>

            <div className="flex items-center gap-4 mb-8 opacity-40">
              <div className="w-16 h-px bg-[#6b8f4e]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#6b8f4e]" />
              <div className="w-16 h-px bg-[#6b8f4e]" />
            </div>

            <h1
              className="font-black text-[#d4c9b0] leading-none mb-6 uppercase"
              style={{
                fontSize: "clamp(2rem, 7vw, 5rem)",
                letterSpacing: "0.08em",
                textShadow:
                  "0 2px 40px rgba(0,0,0,0.9), 0 0 60px rgba(107,143,78,0.15)",
              }}
            >
              About Us
            </h1>

          </div>

          {/* Team grid */}
          <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {team.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>

      <StudioFooter />
    </div>
  );
}
