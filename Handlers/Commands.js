const { readdirSync } = require("fs");

module.exports = (client, Discord) => {
	const commandsFolders = readdirSync("./Commands");
	for (const folder of commandsFolders) {
		const commandsFiles = readdirSync(`./Commands/${folder}`).filter(
			(files) => files.endsWith(".js")
		);
		for (const file of commandsFiles) {
			const command = require(`../Commands/${folder}/${file}`);
			client.commands.set(command.name, command);
		}
	}
};