/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ['./src/index.ts'],
  groupOrder: ['Functions', 'Variables', '*'],
  out: 'docs',
  includeVersion: true,
  githubPages: false,
  titleLink: 'https://tb.dev.br/vue-utils/',
};
