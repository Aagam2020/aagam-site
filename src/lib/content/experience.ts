type Experience = {
  org: string;
  role: string;
  period?: string;
  logo?: string;
  summary: string;
};

const experience: Experience[] = [
  {
    org: "Phenom",
    role: "Associate Product Manager",
    period: "2024 — present",
    logo: "https://logo.clearbit.com/phenom.com",
    summary:
      "product work across talent platforms; simplifying complex enterprise workflows and driving measurable adoption."
  },
  {
    org: "1486 Labs",
    role: "Product Development Intern",
    period: "2023",
    logo: "https://logo.clearbit.com/1486labs.com",
    summary:
      "contributed to research, prototyping, and data-driven discovery; supported experiments from concept to insights."
  },
  {
    org: "Enquero",
    role: "Software Engineer",
    period: "2021 — 2022",
    logo: "https://logo.clearbit.com/enquero.com",
    summary:
      "built full-stack features for enterprise applications; collaborated with cross-functional teams to deliver at scale."
  },
  {
    org: "Recruiterflow",
    role: "Product Management Intern",
    period: "2022",
    logo: "https://logo.clearbit.com/recruiterflow.com",
    summary:
      "shipped associate-facing improvements; supported research, roadmapping, and go-to-market for new features."
  },
  {
    org: "Barclays",
    role: "Data Analyst Intern",
    period: "2020",
    logo: "https://logo.clearbit.com/barclays.com",
    summary:
      "designed reporting pipelines and dashboards; partnered with stakeholders to surface insights that influenced decisions."
  },
  {
    org: "ParallelDots",
    role: "Full-stack Intern",
    period: "2020",
    logo: "https://logo.clearbit.com/paralleldots.com",
    summary:
      "built and refined internal tools; collaborated closely with engineers to improve product reliability and UX."
  }
];

export default experience;
