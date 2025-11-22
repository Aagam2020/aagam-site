// src/lib/content/caseStudies.ts

type CaseStudy = {
  title: string;
  url: string;
  blurb: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Spotify — Improving Playlist Discovery",
    url: "/case-studies/spotify-playlist-discovery",
    blurb: "A strategic teardown on helping users discover better playlists and boosting engagement."
  },
  {
    title: "Duolingo — Increasing Long-Term Retention",
    url: "/case-studies/duolingo-retention",
    blurb: "A retention-focused deep dive using behavior design and social mechanics to keep learners coming back."
  },
  {
    title: "Google Maps — Redesigning Saved Places",
    url: "/case-studies/google-maps-saved-places",
    blurb: "A UX audit and redesign of the Saved Places experience to improve organization, discoverability, and sharing."
  },
  {
    title: "YouTube — Activation Funnel Experiment",
    url: "/case-studies/youtube-activation",
    blurb: "A growth experiment to improve first-day activation with a better onboarding and recommendation flow."
  }
];

export default caseStudies;
export type { CaseStudy };
