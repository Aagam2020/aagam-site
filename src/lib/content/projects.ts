type Project = { title: string; url?: string; blurb?: string };

const projects: Project[] = [
  {
    title: "second brain",
    url: "https://second-brain-sand-iota.vercel.app",
    blurb: "gmail digests + personal ops dashboard."
  },
  {
    title: "Focus Timer (Pomodoro)",
    url: "https://focus-timer-iota-eight.vercel.app",
    blurb: "25/5 timer with auto-cycle, sound, and local settings—no login."
  },
  {
    title: "Idea Vault",
    url: "https://idea-vault-two.vercel.app",
    blurb: "turns raw ideas into investor-style memos using open LLMs—no signup, just your pitch."
  }
];

export default projects;
