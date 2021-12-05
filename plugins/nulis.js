let {
	Presence
} = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let limit = 50
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
	await conn.updatePresence(m.chat, Presence.composing)
	if (!args || !args[0]) return conn.reply(m.chat, `*Format salah! Contoh :*\n\n*${usedPrefix + command} bang*`, m)
	let text = args.join` `
	fetch('https://st4rz.herokuapp.com/api/nulis?text=' + encodeURIComponent(text))
		.then(res => res.json())
		.then(json => {
			conn.updatePresence(m.chat, Presence.composing)
			conn.reply(m.chat, `*Tunggu sebentar . . .*`, m)
			conn.sendFile(m.chat, json.result, 'image.jpeg', '', m)
		}).catch(() => {
			conn.reply(m.chat, `*Terjadi kesalahan . . .*`, m)
		})
}
handler.help = ['nulis'].map(v => v + ' <Teks>')
handler.tags = ['nulis']
handler.command = /^(nulis)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 150
module.exports = handler