import { bot } from '../infrastructure/telegram';
import { fetchLatestRaise } from './data';  // ✅ Now correctly imports
import { formatRaiseMessage } from './message';  // ✅ Now correctly imports

bot.onText(/\/latest/, async (msg) => {
  const chatId = msg.chat.id;

  const latestRaise = await fetchLatestRaise();
  if (latestRaise) {
    const message = formatRaiseMessage(latestRaise);
    bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
  } else {
    bot.sendMessage(chatId, "⚠️ Could not fetch the latest VC raise. Try again later.");
  }
});