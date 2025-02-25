import { bot } from '../infrastructure/telegram';
import { fetchLatestRaise } from '../domains/data';

bot.onText(/\/latest/, async (msg) => {
  console.log(`[DEBUG] /latest command received from Chat ID: ${msg.chat.id}`);

  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "🚀 Fetching the latest cached VC raise...");

  const latestRaise = await fetchLatestRaise();
  if (latestRaise) {
    const message = `🚀 *${latestRaise.company}* just raised *${latestRaise.amount}*!\n📅 Date: ${latestRaise.date}\n📍 Category: ${latestRaise.category}\n🏦 Lead Investor: ${latestRaise.leadInvestor}`;
    bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
    console.log(`[DEBUG] Sent raise update to ${chatId}`);
  } else {
    bot.sendMessage(chatId, "⚠️ No raise data available. Try again later.");
    console.log(`[DEBUG] No cached raise data.`);
  }
});