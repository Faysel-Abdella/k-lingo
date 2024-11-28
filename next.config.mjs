/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'], // Use SVGR for SVGs
      });
      return config;
    },
  };
  
  export default nextConfig;
  