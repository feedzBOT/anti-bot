const {
	ephoto2
} = require('../lib/ephoto2.js')


let handler = async (m, {
	conn,
	args,
	usedPrefix,
	text
}) => {

	if (!text) throw 'masukan teksnya'
	if (text.length > 35) throw 'kepanjangan kak, maksimal 35 huruf'
	let result = await ephoto2('https://ephoto360.com/hieu-ung-chu/viet-chu-len-so-co-la-chocolate--186.html', `${text}`)
	let uh = `https://s1.ephoto360.com${result.image}`
	await conn.sendFile(m.chat, uh, 'p.jpg', 'wuis', m)

}

handler.help = ['coklat']
handler.tags = ['ep']
handler.command = /^coklat$/i
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler