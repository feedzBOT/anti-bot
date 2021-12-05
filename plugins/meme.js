let fetch = require('node-fetch')
let handler = async (m, {
	conn,
	text
}) => {
	try {
		let res = await fetch('https://api.zeks.xyz/api/memeindo?apikey=apivinz')
		let json = await res.json()
		conn.sendFile(m.chat, json.result, 'pp.jpg', 'wokwokwok', m)
	} catch (e) {
		m.reply(`apikey invalid atau server down`)
	}
}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^(meme)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler