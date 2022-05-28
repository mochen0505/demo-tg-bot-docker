require('dotenv').config()

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {

  const cid = msg.chat.id;
  const userId = msg.from.id
  const username = msg.from.first_name
  const mention = `<a href="tg://user?id=${userId}">@${username}</a>`;
  const botMsg = `说个几把 ${mention}`

  const target = "youtube";
  if (msg.text.toString().toLowerCase().includes(target)) {
    bot.sendMessage(cid, botMsg ,{parse_mode : "HTML"});
  }

});