const TelegramApi = require("node-telegram-bot-api");
const axios = require("axios");

const token = "5183589885:AAH8K3-d4Fv4KQdfWz5g--XzPnxubKeuW6A";

const bot = new TelegramApi(token, { polling: true });

bot.on("message", async (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text;
	try {
		let phrases = [
			"Пашашундрик",
			"Чирик-пиздык",
			"Зачем вам это говно?",
			"Пиздеть - не мешки ворочать",
			"Ну как там с деньгами",
			"Давай закругляйся",
			"Здесь все, кто по кайфу",
			"Заебал спамить",
			"Хуево выглядишь",
			"А где Рус?",
			"Одобряю",
			"Забаньте его в этом чате",
			"Че может по пивку вечерком",
			"Микрохайдаров",
			"В чем сила",
			"Это понятно, деващки?",
			"Вы в курсе что я бот?",
			"Нурикеша спросите",
			"Айнурыч ёмаё",
		];
		const num = Math.floor(Math.random() * phrases.length);
		let str = phrases[num];
		const randomizer = Math.random();
		if (randomizer < 0.1) {
			return await bot.sendMessage(chatId, str);
		}
	} catch (err) {
		return await bot.sendMessage(chatId, "err");
	}
});
