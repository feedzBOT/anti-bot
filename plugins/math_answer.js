global.math = global.math ? global.math : {}
let handler = async (m, {
	conn
}) => {
	let id = m.chat
	if (!m.quoted) return
	if (m.quoted.sender != conn.user.jid) return
	if (!/^Berapa hasil dari/i.test(m.quoted.text)) return
	if (!(m.chat in global.math)) return conn.reply(m.chat, 'Soal itu telah berakhir', m)
	let exp = global.db.data.users[m.sender].exp
	if (m.quoted.id == global.math[id][0].id) {
		let math = global.math[id][1]
		if (m.text == math.result) {
			conn.reply(m.chat, `*Jawaban Benar!*\nKamu mendapatkan Rp${Number(math.bonus).toLocaleString().replace(/,/g, '.')},-\n\nUang kamu sekarang sebesar Rp${Number(exp).toLocaleString().replace(/,/g, '.')},-  `, m)
			global.db.data.users[m.sender].exp += math.bonus
			clearTimeout(global.math[id][3])
			delete global.math[id]
		} else {
			if (--global.math[id][2] == 0) {
				conn.reply(m.chat, `*Kesempatan habis!*\nJawaban: *${math.result}*`, m)
				clearTimeout(global.math[id][3])
				delete global.math[id]
			} else conn.reply(m.chat, `*Jawaban Salah!*\nMasih ada ${global.math[id][2]} kesempatan`, m)
		}
	}
}
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0

module.exports = handler

function getDuration(s) {
	var date = new Date(null)
	date.setSeconds(s)
	return date.toISOString().substr(11, 8)
}

function getDuration(s) {
	var date = new Date(null)
	date.setSeconds(s)
	return date.toISOString().substr(11, 8)
}