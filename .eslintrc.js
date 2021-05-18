module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    // 'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    // Tech Team uses PascalCase for templates, but nuxt-link is special, so should be ignored
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: ['nuxt-link']
    }]
  }
}
