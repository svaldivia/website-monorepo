module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  // extends: ["@svaldivia/eslint-config-svaldivia"],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
