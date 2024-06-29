import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://cegallardo0405.github.io",
  base: "/Krea-first-deploy",
  output: 'server',
  adapter: vercel(),
});