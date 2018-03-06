const { Command } = require('klasa');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'log',
      enabled: true,
      runIn: ['dm'],
      cooldown: 2,
      bucket: 1,
      aliases: [],
      permLevel: 10,
      botPerms: [],
      requiredConfigs: [],
      description: 'Returns log output.',
      quotedStringSupport: false,
      usage: '',
      usageDelim: '',
      extendedHelp: 'No extended help available.',
    });
  }
  async run(msg) {
    const path = '~/Ichicode/Ichicode/logs/ici.log';
    const result = await this.client.methods.util.exec(`cat ${path}`, { timeout: 30000 })
      .catch(error => ({ stdout: null, stderr: error && error.message ? error.message : error }));
    const output = result.stdout ? `OUTPUT:\n\n${result.stdout}\n` : '';
    const outerr = result.stderr ? `ERROR:\n\n${result.stderr}\n` : '';
    return msg.send([output, outerr].join('\n'), { code: 'xl' });
  }
};