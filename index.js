require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const uwuFaces = [
	'(ꈍ ᴗ ꈍ ✿) uwu',
	'(◕ ˬ ◕ ✿) uwu!',
	'(◔ ◡ ◔ ✿) uwu',
	'( ˃̣̣̥﹏˂̣̣̥ ✿) UWU!!',
	'uwu ★⌒ヽ(˘꒳˘ *)',
	'ᕦ( ˘ᴗ˘ )ᕤ uwu',
	'ଘ(੭ ˘ ᵕ˘)━☆ﾟ.*･｡ﾟ~ uwu ~ﾟ.*･｡ﾟ'
];

client.on('message', message => {
	if (!!message.content && message.content.toLowerCase() === 'uwu') {
		const iRandom = Math.floor(Math.random() * uwuFaces.length);
		message.channel.send(uwuFaces[iRandom]);
	}
});


client.on('ready', () => {
	console.log('client ready');
});

client.login(process.env.BOT_TOKEN);