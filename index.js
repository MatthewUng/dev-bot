//const Discord = require('discord.js');
const commando = require('discord.js-commando');
const config = require('./config.js');

/*
const bot = new Discord.Client();

bot.on('ready', function(evt){
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(bot.username+' - ('+bot.id+')');
});

bot.on('message', (message) => {
    if(message.content == 'ping'){

        //message.channel.sendMessage('pong');
        message.reply('pong');
    }
});
*/



const bot = new commando.Client({
    commandPrefix: '!',  
    owner: '205419967758336009',
    disableEveryone: true,
});

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', ()=>{
    console.log("Logged in!");
    bot.user.setGame("in some game...");
});

bot.login(config.token);

