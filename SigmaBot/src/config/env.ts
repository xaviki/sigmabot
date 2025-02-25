import * as dotenv from 'dotenv';
import path from 'path';

// Log before loading
console.log("🔍 [DEBUG] Attempting to load .env...");

const result = dotenv.config({ path: path.resolve(process.cwd(), '.env') });

if (result.error) {
  console.error("❌ [ERROR] dotenv failed to load .env file!", result.error);
} else {
  console.log("✅ [DEBUG] dotenv loaded .env file successfully.");
}

// Log after loading
console.log(`🔍 [DEBUG] TELEGRAM_BOT_TOKEN (should not be undefined): ${process.env.TELEGRAM_BOT_TOKEN || "undefined"}`);

export const config = {
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN as string,
  TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID ? parseInt(process.env.TELEGRAM_CHAT_ID) : undefined
};