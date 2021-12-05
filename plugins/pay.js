let {
	MessageType
} = require('@adiwajshing/baileys')
let pajak = 0.01
let handler = async (m, {
	conn,
	text
}) => {
	if (!text) throw 'Masukkan jumlah uang yang akan diberi'
	let who
	if (m.isGroup) who = m.mentionedJid[0]
	else who = m.chat
	if (!who) throw 'Tag salah satu lah'
	let txt = text.replace('@' + who.split`@` [0], '').trim()
	if (isNaN(txt)) throw 'Hanya angka'
	let name = conn.getName(who)
	let xp = parseInt(txt)
	let exp = xp
	let pjk = Math.ceil(xp * pajak)
	exp += pjk
	if (exp < 1000) throw 'Minimal Rp1.000,-'
	let users = global.db.data.users
	if (exp > users[m.sender].exp) throw 'Uangmu tidak mencukupi untuk mentransfer'
	users[m.sender].exp -= exp
	users[who].exp += xp
	conn.reply(m.chat, `Berhasil mentransfer Rp${Number(xp).toLocaleString().replace(/,/g, '.')},- ke ${name} Dengan pajak Pengiriman Sebesar Rp${Number(pjk).toLocaleString().replace(/,/g, '.')},- `, who, m)
}
handler.help = ['tf @user <amount>']
handler.tags = ['xp']
handler.command = /^tf$/

module.exports = handler

function getDuration(s) {
	var date = new Date(null)
	date.setSeconds(s)
	return date.toISOString().substr(11, 8)
}