import nextra from 'nextra';

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  mdxOptions: {},
  defaultShowCopyCode: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  cleanDistDir: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['nextra/components', 'nextra-theme-blog'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, options) => { // nextra 에서 빌드 캐시 충돌함
    config.cache = false;
    return config;
  },
};

export default withNextra(nextConfig);
