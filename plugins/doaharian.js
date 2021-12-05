let fetch = require('node-fetch')
let handler = async (m, {
	conn
}) => {
	try {
		await m.reply("wait")
		let res = await fetch('https://api.xteam.xyz/religi/doaharian?APIKEY=miminetbot')
		let json = await res.json()
		if (res.status != 200) throw json
		if (json.result.error) throw json.result.message
		let {
			title,
			latin,
			arabic,
			translation
		} = json.result
		let caption = `
*「 Doa Harian 」*
${title}
${arabic}
${latin}
Artinya:
_"${translation}"_
`.trim()
		await m.reply(caption)
	} catch (e) {
		m.reply(`apikey invalid atau server down`)
	}
}
handler.help = ['doaharian']
handler.tags = ['islam']
handler.command = /^(doaharian)$/i

module.exports = handler