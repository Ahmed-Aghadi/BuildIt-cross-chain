/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });
    config.experiments.asyncWebAssembly = true;
    return config;
  },
  // rewrites: async () => {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/index.html",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
