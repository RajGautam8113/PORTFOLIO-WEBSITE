/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Allow the v0 preview iframe / sandbox host to talk to the dev server (HMR + assets)
  allowedDevOrigins: ["*.vusercontent.net", "*.vercel.run", "*.v0.app", "*.v0.dev"],
}

export default nextConfig
