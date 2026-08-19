/** @type {import('next').NextConfig} */
const nextConfig = {
  // Type errors now fail the build — the codebase is clean, keep it that way.
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
