let fetch = require('node-fetch')

let timeout = 120000
let poin = 2500
let handler = async (m, {
	conn,
	usedPrefix
}) => {
	try {
		conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
		let id = m.chat
		if (id in conn.tebakkata) {
			conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkata[id][0])
			throw false
		}
		let res = await fetch('https://api.xteam.xyz/game/tebakkata?APIKEY=miminetbot')
		if (res.status !== 200) throw await res.text()
		let json = await res.json()
		if (!json.status) throw json
		let caption = `
*「 Tebak Kata 」*
${json.result.level}
Soal: "${json.result.soal}"
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik *${usedPrefix}tkhint* untuk bantuan
Bonus: Rp${poin}
    `.trim()
		conn.tebakkata[id] = [
			await conn.reply(m.chat, caption, m),
			json, poin,
			setTimeout(() => {
				if (conn.tebakkata[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, conn.tebakkata[id][0])
				delete conn.tebakkata[id]
			}, timeout)
		]
	} catch (e) {
		m.reply(`apikey invalid atau server down`)
	}
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i

module.exports = handler