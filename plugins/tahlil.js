let fetch = require('node-fetch')
let handler = async (m, {
	conn
}) => {
	try {
		await m.reply("wait")
		let res = await fetch('https://api.xteam.xyz/religi/tahlil?APIKEY=miminetbot')
		let json = await res.json()
		if (res.status != 200) throw json
		if (json.result.error) throw json.result.message
		let {
			title,
			id,
			arabic,
			translation
		} = json.result
		let caption = `
*「 Tahlil 」*
${id}. ${title}
${arabic}
Artinya:
_"${translation}"_
`.trim()
		await m.reply(caption)
	} catch (e) {
		m.reply(`apikey invalid atau server down`)
	}
}
handler.help = ['tahlil']
handler.tags = ['islam']
handler.command = /^(tahlil)$/i

handler.fail = null
handler.limit = false

module.exports = handler