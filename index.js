//const Discord = require('discord.js');
const commando = require('discord.js-commando');
const config = require('./config.js');

//const bot = new Discord.Client();

//bot.on('message', (message) => {
//    if(message.content == 'ping'){
//
//        //message.channel.sendMessage('pong');
//        message.reply('pong');
//    }
//});

const bot = new commando.Client();

console.log("first");
bot.registry.registerGroup('random', 'Random');
console.log("second");
bot.registry.registerDefaults();
console.log("third");
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(config.token);
