import '../config/env';  
import TelegramBot from 'node-telegram-bot-api';
import { config } from '../config/env';

export const bot = new TelegramBot(config.TELEGRAM_BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
  console.log(`[DEBUG] Message received in Chat ID ${msg.chat.id}: "${msg.text}"`);

  if (msg.chat.type === "group" || msg.chat.type === "supergroup") {
    console.log(`[DEBUG] Message was sent in a group.`);
  } else {
    console.log(`[DEBUG] Message was sent in a private chat.`);
  }
});