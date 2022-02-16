const TelegramApi = require("node-telegram-bot-api");
const axios = require("axios");

const token = "5183589885:AAH8K3-d4Fv4KQdfWz5g--XzPnxubKeuW6A";

const bot = new TelegramApi(token, { polling: true });

bot.on("message", async (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text;
	if (text === "/joke") {
		try {
			let x = await axios.get(
				"https://evilinsult.com/generate_insult.php?lang=en&type=json"
			);
			const joke = JSON.stringify(x.data.insult);
			return await bot.sendMessage(chatId, joke);
		} catch (err) {
			return await bot.sendMessage(chatId, "err");
		}
	}
});
