/** @type {import('next').NextConfig} */

const nextConfig = {};

module.exports = (phase, { defaultConfig }) => {
  if ("sassOptions" in defaultConfig) {
    defaultConfig["sassOptions"] = {
      prependData: `
                      @import "./src/styles/_variables.scss";
                      @import "./src/styles/_mixin.scss";
                      `,
    };
  }
  return { ...nextConfig };
};
