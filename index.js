const Discord = require('discord.js');
const config = require('./config.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if(message.content == 'ping'){

        //message.channel.sendMessage('pong');
        message.reply('pong');
    }
});

bot.login(config.token);
