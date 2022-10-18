const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
	authStrategy: new LocalAuth()
})

console.log("[CONSOLE] : Please Wait...");

client.on('qr', (qr) => {
	qrcode.generate(qr, { small: true })
});

client.on('authenticated', () => {
	console.clear()
	console.log('[CONSOLE] : AUTHENTICATED');
})

client.on('ready', () => {
	console.log("[CONSOLE] : Client is ready!")
})

client.on('message', (msg) => {
	if (msg.body === '/ping') {
		msg.reply("Pong!")
		console.log(msg.body)
	}
	
})

client.on('message', async (msg) => {
	if(msg.body === "/dev") {
		const media = await MessageMedia.fromUrl('https://i.ibb.co/mBW5NRf/logo.jpg')
		client.sendMessage(msg.from, media, {
			caption: "Developer",
		})
		console.log(msg.body)
	}
	
})

client.initialize()