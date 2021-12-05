let fetch = require("node-fetch")
let handler = async (m, {
	conn,
	text
}) => {

	//if (!text) return conn.reply(m.chat, 'Masukan parameter, Contoh *#lirik my love*', m)

	await m.reply('Sedang di proses kak:b')
	let res = await fetch("http://docs-jojo.herokuapp.com/api/cersex")
	let json = await res.json()
	let hasil = `~> *Judul* : ${json.result.judul}\n\n${json.result.cersex}`
	let haha = json.result.img
	await conn.sendFile(m.chat, haha, 'carsex.jpg', 'nih', m)

}
handler.help = ['cersex'].map(v => v + ' <nama>')
handler.tags = ['quotes']
handler.command = /^(carsex|cerita_sex)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler