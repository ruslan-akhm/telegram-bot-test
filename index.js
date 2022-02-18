const TelegramApi = require("node-telegram-bot-api");
const phrases = require("./phrases");

const token = process.env.MY_KEY;

const bot = new TelegramApi(token, { polling: true });

bot.on("message", async (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text;
	try {
		if (text == "/test") {
			return await bot.sendMessage(chatId, "works");
		}
		if (text == "@simply_insulter_bot") {
			return await bot.sendMessage(chatId, "dont call me");
		}
		const num = Math.floor(Math.random() * phrases.length);
		let str = phrases[num];
		const randomizer = Math.random();
		console.log(randomizer);
		if (randomizer < 0.1) {
			return await bot.sendMessage(chatId, str);
		}
	} catch (err) {
		return await bot.sendMessage(chatId, "err");
	}
});
