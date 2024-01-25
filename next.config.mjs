/* eslint-disable @typescript-eslint/no-var-requires */
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  sassOptions: {
    includePaths: [join(__dirname, 'styles')],
  },
  async redirects() {
    return [
      {
        source: '/invite',
        destination: 'https://invite.birthdayy.xyz',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'discord.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
      {
        protocol: 'https',
        hostname: 'media.discordapp.net',
      },
      {
        protocol: 'https',
        hostname: 'bulma.io',
      },
      {
        protocol: 'https',
        hostname: 'files.schunk.dev',
      },
    ],
  },
};

export default nextConfig;
