import chalk from 'chalk';

import * as faker from '../src/utils/faker';
import * as factories from '../src/database/factories';

const { info } = console;

(async () => {
  try {
    const table = process.argv[2];
    const total = +process.argv[3] || 1;
    const factoryCallback = factories[table].run;
    print(faker.generate(factoryCallback, total));

    process.exit(0);
  } catch (err) {
    info(chalk`{bold.red ${process.argv[2]}} {red factory not found.}`);

    process.exit(1);
  }
})();

function print<T>(data: T): void {
  const jsonData = JSON.stringify(data, null, ' ');

  info(chalk.green(jsonData));
}
