/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'], // Allow images from placeholder domain
  },
  // Force Babel compilation instead of SWC
  // A .babelrc file being present achieves this for compilation,
  // but explicitly disabling swcMinify ensures it's not used for production minification either.
  swcMinify: false,
}

module.exports = nextConfig
