type Project = { title: string; url?: string; blurb?: string };

const projects: Project[] = [
  {
    title: "second brain",
    url: "https://github.com/Aagam2020", // replace with repo when ready
    blurb: "gmail digests + personal ops dashboard."
  },
  {
    title: "ml experiments",
    url: "https://github.com/Aagam2020", // placeholder
    blurb: "recsys & search prototypes; playing with evaluation loops."
  },
  {
    title: "finance playground",
    blurb: "small models for portfolio analysis and market data pipelines."
  },
  {
    title: "Focus Timer (Pomodoro)",
    url: "https://focus-timer-iota-eight.vercel.app",
    blurb: "25/5 timer with auto-cycle, sound, and local settings—no login."
  }
];

export default projects;
