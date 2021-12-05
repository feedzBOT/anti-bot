let fetch = require('node-fetch')
let handler = async (m, {
	conn,
	usedPrefix,
	command,
	args,
	text
}) => {
	try {
		if (!text) return conn.reply(m.chat, 'harap masukan teksnya!!!', m)
		let p = await (await fetch('https://tessyy-api.herokuapp.com/photooxyy?theme=dota&text=' + encodeURIComponent(text))).buffer()
		m.reply('_Tunggu Sebentar. . ._')
		conn.sendFile(m.chat, p, 'image.png', 'wuis!!', m)
	} catch (e) {
		m.reply(`apikey invalid atau server down`)
	}
}
handler.help = ['dota']
handler.tags = ['ph']
handler.command = /^dota$/i
module.exports = handler