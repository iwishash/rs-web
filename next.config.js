/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // 기존 URL 파일로더 규칙을 가져옵니다.
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: { not: /components/ },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: /components/,
        use: ["@svgr/webpack"],
      }
    );

    return config;
  },
  // experimental: {
  //   turbo: {
  //     loaders: {
  //       ".svg": ["@svgr/webpack"],
  //     },
  //   },
  // },
  async redirects() {
    return [
      {
        source: "/product",
        destination: "/product/rs-stim",
        permanent: true,
      },
    ];
  }
};

module.exports = nextConfig;