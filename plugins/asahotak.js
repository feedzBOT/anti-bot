let fetch = require('node-fetch')
let {
	asahotak
} = require('../lib/game')
let timeout = 120000
let poin = 5000
let handler = async (m, {
	conn,
	usedPrefix
}) => {
	conn.asahotak = conn.asahotak ? conn.asahotak : {}
	let id = m.chat
	if (id in conn.asahotak) {
		conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.asahotak[id][0])
		throw false
	}
	let res = JSON.parse(JSON.stringify(await asahotak()))
	let random = Math.floor(Math.random() * res.length)
	let json = res[random]
	let caption = `
 *♤[A S A H - O T A K]♤*\n\n${json.pertanyaan}\n\n
\`\`\`Timeout: ${(timeout / 1000).toFixed(2)} detik\`\`\`
\`\`\`Ketik ${usedPrefix}ao untuk bantuan\`\`\`
\`\`\`jika jawaban benar kamu akan mendapatkan ${Number(poin).toLocaleString().replace(/,/g, '.')} Exp & Money\`\`\`
    `.trim()
	conn.asahotak[id] = [
		await m.reply(caption),
		json, poin,
		setTimeout(() => {
			if (conn.asahotak[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.asahotak[id][0])
			delete conn.asahotak[id]
		}, timeout)
	]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i

module.exports = handler