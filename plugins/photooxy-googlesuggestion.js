let fetch = require('node-fetch')
let handler = async (m, {
	conn,
	usedPrefix,
	command,
	args,
	text
}) => {
	try {
		let [a, b, c] = text.split(/[&|.]/i)
		if (!a || !b || !c) throw `gunakan command seperti ini\ncontoh:\n${usedPrefix + command} acil|jadi|wibu`
		let p = await (await fetch('https://tessyy-api.herokuapp.com/photooxyy?theme=google-suggestion&text=' + encodeURIComponent(a) + '&text2=' + encodeURIComponent(b) + '&text3=' + encodeURIComponent(c))).buffer()
		m.reply('_Tunggu Sebentar. . ._')
		conn.sendFile(m.chat, p, 'image.png', 'wuis!!', m)
	} catch (e) {
		m.reply(`apikey invalid atau server down`)
	}
}
handler.help = ['google-suggestion']
handler.tags = ['ph']
handler.command = /^google-suggestion$/i
module.exports = handler