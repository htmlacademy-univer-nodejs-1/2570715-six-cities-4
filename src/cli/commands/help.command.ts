import { Command } from './command.interface.js';
import chalk from 'chalk';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
${chalk.bold.blue('Программа для подготовки данных для REST API сервера.')}
${chalk.bold('Пример:')}
    ${chalk.green('cli.js')} ${chalk.yellow('--<command>')} [${chalk.yellow('--arguments')}]

${chalk.bold('Команды:')}
    ${chalk.cyan('--version')}:                   ${chalk.gray('# выводит номер версии')}
    ${chalk.cyan('--help')}:                      ${chalk.gray('# печатает этот текст')}
    ${chalk.cyan('--import')} ${chalk.magenta('<path>')}:             ${chalk.gray('# импортирует данные из TSV')}
    ${chalk.cyan('--generate')} ${chalk.magenta('<n>')} ${chalk.magenta('<path>')} ${chalk.magenta('<url>')}  ${chalk.gray('# генерирует произвольное количество тестовых данных')}
    `);
  }
}
