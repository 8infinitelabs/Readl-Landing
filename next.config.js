
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['iqB2UMYdYZ9qbPzXr4yBVb'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  