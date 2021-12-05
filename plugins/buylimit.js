const xpperlimit = 1000
let handler = async (m, {
	conn,
	command,
	args
}) => {
	let count = command.replace(/^tumbas/i, '')
	count = count ? /nebas/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
	count = Math.max(1, count)
	if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
		global.db.data.users[m.sender].exp -= xpperlimit * count
		global.db.data.users[m.sender].limit += count
		conn.reply(m.chat, `*Terima kasih Telah Membeli ${count} Tiket Dengan harga Rp${Number(xpperlimit * count).toLocaleString().replace(/,/g, '.')},-*`, m)
	} else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk membeli ${count} Tiket, Untuk Harga Tiket Minimal Uang kamu harus di atas *1.000 Exp* ,atau gunakan fitur game yang ada di Bot ini untuk dapetin uang, lalu tukar ke tiket untuk menggunakan fitur yang lain`, m)
}
handler.help = ['tumbas <Jumlah tiket>', 'tumbas <Jumlah tiket>', 'nebas']
handler.tags = ['xp']
handler.command = /^tumbas([0-9]+)|tumbas|nebas$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function getDuration(s) {
	var date = new Date(null)
	date.setSeconds(s)
	return date.toISOString().substr(11, 8)
}