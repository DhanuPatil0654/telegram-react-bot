const TelegramBot = require('node-telegram-bot-api');

// Replace with the token you got from BotFather
const token = '8133481529:AAFbU8hyM3adapwUsPqjGy4GC85b-RmU4CE';

const bot = new TelegramBot(token, { polling: true });

// Replace with your actual React app URL
const webAppUrl = 'https://vocal-blini-7b46bd.netlify.app/';

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Welcome! Click below to launch the app:', {
    reply_markup: {
      inline_keyboard: [[
        {
          text: "🚀 Launch App",
          web_app: {
            url: webAppUrl
          }
        }
      ]]
    }
  });
});
