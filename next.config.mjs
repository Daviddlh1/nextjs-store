/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// console.log('dirname', __dirname);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
    prependData: `@import 'main.sass'`,
  },
  images: {
    remotePatterns: [{
      hostname: 'cdn.shopify.com',
      protocol: 'https'
    }]
  }
};

export default nextConfig;
