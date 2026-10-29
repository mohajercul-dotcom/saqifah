import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import cloudflare from '@astrojs/cloudflare';

const isCloudflare = process.env.DEPLOY_TARGET === 'cloudflare' || process.env.CF_PAGES === '1';

export default defineConfig({
  output: 'server',
  adapter: isCloudflare
    ? cloudflare({
        imageService: 'passthrough',
        platformProxy: {
          enabled: true,
        },
      })
    : vercel(),
});