module.exports = {
  '*.ts': () => ['eslint --fix --max-warnings=0', 'prettier --write', 'git add'],
};
