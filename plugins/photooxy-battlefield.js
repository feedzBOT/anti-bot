let fetch = require('node-fetch')
let handler = async (m, {
	conn,
	usedPrefix,
	command,
	args,
	text
}) => {
	try {
		let [a, b] = text.split(/[&|.]/i)
		if (!a || !b) throw `gunakan command seperti ini\ncontoh:\n${usedPrefix + command} super|man`
		let p = await (await fetch('https://tessyy-api.herokuapp.com/photooxyy?theme=battlefield&text=' + encodeURIComponent(a) + '&text2=' + encodeURIComponent(b))).buffer()
		m.reply('_Tunggu Sebentar. . ._')
		conn.sendFile(m.chat, p, 'image.png', 'wuis!!', m)
	} catch (e) {
		m.reply(`apikey invalid atau server down`)
	}
}
handler.help = ['battlefield']
handler.tags = ['ph']
handler.command = /^battlefield$/i
module.exports = handler