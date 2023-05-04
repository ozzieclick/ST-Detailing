import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import critters from "astro-critters";
import compress from "astro-compress";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: 'https://stdetailing.us',
  integrations: [tailwind(), critters(), compress({js: false}), astroI18next()]
});