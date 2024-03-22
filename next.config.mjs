/** @type {import('next').NextConfig} */

import { dirname, join } from "path";
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
    prependData: '@import "main.sass"'
  },
};

export default nextConfig;
