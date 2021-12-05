let fetch = require('node-fetch')
let handler = async (m, {
	conn
}) => {
	try {
		await m.reply("wait")
		let res = await fetch('https://api.xteam.xyz/religi/wirid?APIKEY=miminetbot')
		let json = await res.json()
		if (res.status != 200) throw json
		if (json.result.error) throw json.result.message
		let {
			times,
			id,
			arabic,
			tnc
		} = json.result
		let caption = `
*「 Wirid 」*
No. ${id}
${arabic} ${times}x
${tnc}
`.trim()
		await m.reply(caption)
	} catch (e) {
		m.reply(`apikey invalid atau server down`)
	}
}
handler.help = ['wirid']
handler.tags = ['islam']
handler.command = /^(wirid)$/i


module.exports = handler