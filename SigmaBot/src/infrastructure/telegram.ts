import '../config/env';  
import TelegramBot from 'node-telegram-bot-api';
import { config } from '../config/env';

// Step 1: Stop any existing bot instance before starting a new one
console.log("🔍 [DEBUG] Resetting Telegram bot session...");

let bot: TelegramBot | null = null;

try {
  if (bot) {
    bot.stopPolling(); // Stop any previous polling instance
    console.log("✅ Previous bot session stopped.");
  }
} catch (error) {
  console.warn("⚠️ No active session found to stop.");
}

// Step 2: Initialize a new bot instance
console.log("🔍 [DEBUG] Creating a new Telegram bot instance...");
bot = new TelegramBot(config.TELEGRAM_BOT_TOKEN, { polling: true });

// Step 3: Log incoming messages
bot.on('message', (msg) => {
  console.log(`[DEBUG] Message received in Chat ID ${msg.chat.id}: "${msg.text}"`);
});

// Step 4: Handle polling errors (including 409 Conflict)
bot.on("polling_error", (error) => {
  console.error(`🚨 [ERROR] Polling error detected:`, error);
});