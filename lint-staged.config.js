module.exports = {
  '**/*.[jt]s?(x)': 'eslint --fix',
  '*': 'prettier --write --ignore-unknown',
  '**/*.ts?(x)': () => 'nx affected --target=type-check',
};
