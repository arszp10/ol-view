module.exports = {
  '*.ts': () => ['eslint --fix --max-warnings=0', 'git add'],
};
