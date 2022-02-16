const TelegramApi = require("node-telegram-bot-api");
const axios = require("axios");

const token = "5183589885:AAH8K3-d4Fv4KQdfWz5g--XzPnxubKeuW6A";

const bot = new TelegramApi(token, { polling: true });

async function call() {
	return await axios.get(
		"https://evilinsult.com/generate_insult.php?lang=en&type=json"
	);
}

bot.on("message", async (msg) => {
	const text = msg.text;
	const chatId = msg.chat.id;
	console.log(msg);
	if (text === "/command") {
		return bot.sendPhoto(chatId, "./ilnur.jpg");
	}
	if (text === "/joke") {
		let x = await call();
		const joke = JSON.stringify(x.data.insult);
		return bot.sendMessage(chatId, joke);
	}
});
