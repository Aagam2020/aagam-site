// src/routes/+layout.server.ts
import profile from '$lib/content/profile';

export const load = () => ({
  title: `${profile.name} — personal site`,
  description: "pm by day, indie maker by night — building products that balance growth with soul."
});
