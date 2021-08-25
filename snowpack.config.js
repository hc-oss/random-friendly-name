/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/src",
  },
  buildOptions: {
    out: "dist",
  },
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    target: "es2020",
  },
};
