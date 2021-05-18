module.exports = {
  extends: ['stylelint-config-standard'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    // Ignore 'v-deep' because Stylelint sees it as unknown pseudo element
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export']
      }
    ]
  }
}
