let {
	MessageType
} = require('@adiwajshing/baileys')
let handler = async (m, {
	conn,
	args
}) => {
	conn.req = conn.req ? conn.req : {}
	let text = args.join` `
	let [no, te] = text.split(/[&|.]/i)
	if (!no) return m.reply('masukan Nomernya')
	if (!te) return m.reply('masukan teksnya')
	let bruh = (no + '@s.whatsapp.net')
	let txt = conn.req[bruh].text || m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
	let _text = ('Request: ' + txt + '\n*Balasan:* ' + te + '\n' + readMore + '\n*Dari Moderator*\nModerator: *' + conn.getName(m.sender) + '*')
	conn.reply(m.chat, 'Pesan Anda sudah terkirim', m)
	conn.sendMessage(bruh, _text, MessageType.text)
	delete conn.req[bruh]

}
handler.help = ['balas'].map(v => v + ' [nomor] [teks]')
handler.tags = ['owner']
handler.command = /^(balas|reply)/i

handler.mods = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)