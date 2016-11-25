/* eslint no-console: 0 */

import chalk from 'chalk';

export default class Logger {
  static info(message) {
    console.log(chalk.blue(message));
  }

  static success(message) {
    console.log(chalk.green(message));
  }

  static warning(message) {
    console.log(chalk.yellow(message));
  }

  static error(message) {
    console.log(chalk.red(message));
  }
}
