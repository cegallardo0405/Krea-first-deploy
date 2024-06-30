import { defineConfig, sharpImageService } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://cegallardo0405.github.io",
  output: 'static',
  adapter: vercel({
    imageService: true,
  }),
});