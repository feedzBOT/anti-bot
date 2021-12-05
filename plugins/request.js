const {
	MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, {
	conn,
	args
}) => {
	conn.req = conn.req ? conn.req : {}
	let text = args.join` `
	if (!text) return conn.reply(m.chat, 'Silahkan masukkan requestnya', m)
	if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
	var nomor = m.sender
	var name = conn.getName(m.sender)
	const teks1 = `*[REQUEST]*\nDari ${name}\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
	conn.req[m.sender] = {
		name,
		text,
		date: new Date
	}
	conn.sendMessage('6282331033919@s.whatsapp.net', teks1, MessageType.text)
	conn.reply(m.chat, 'pesan anda sudah terkirim', m)
}
handler.help = ['request', 'report'].map(v => v + '[teks]')
handler.tags = ['main']
handler.command = /^(re(quest|port)|req|bug)$/i

handler.fail = null

module.exports = handler