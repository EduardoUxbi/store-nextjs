/** @type {import('next').NextConfig} */

import { dirname, join } from "path";
import path from 'path';
import { fileURLToPath } from "url";
import withBundleAnalyzer from '@next/bundle-analyzer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
    prependData: '@import "main.sass"'
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.shopify.com',
        protocol: 'https'
      }
  ]
  }
};

export default bundleAnalyzer(nextConfig);
// export default nextConfig;
