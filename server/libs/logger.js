/* eslint no-console: 0 */

import chalk from 'chalk';

const logger = {
  info(message) {
    console.log(chalk.blue(message));
  },

  success(message) {
    console.log(chalk.green(message));
  },

  warning(message) {
    console.log(chalk.yellow(message));
  },

  error(message) {
    console.log(chalk.red(message));
  },
};

export {
  logger,
};
