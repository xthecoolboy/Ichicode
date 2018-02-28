/* Sets the nickname for the bot. */

exports.run = async (client, msg, [nick = '']) => {
  await msg.member.setNickname(nick);
  const text = nick.length > 0 ? `Nickname changed to ${nick}` : 'Nickname Cleared';
  return msg.send(text).then(m => m.delete(5000)).then(() => msg.delete()).catch(console.error);
};

exports.conf = {
  enabled: true,
  runIn: ['text'],
  aliases: ['nickname', 'nick'],
  permLevel: 10,
  botPerms: ['CHANGE_NICKNAME'],
  requiredFuncs: [],
  cooldown: 2,
  nsfw: false,
};

exports.help = {
  name: 'botnickname',
  description: 'Sets the bot\'s nickname',
  usage: '[nick:str]',
  usageDelim: '',
  extendedHelp: '',
};