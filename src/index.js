const base = require('@paniclobster/eslint-config-next')

module.exports = {
  ...base,
  extends: [...base.extends, 'plugin:storybook/recommended'],
}
