const basePath = process.cwd();
const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);

const isAsset = true;

(() => {
  buildSetup(isAsset);
  startCreating(isAsset);
})();
