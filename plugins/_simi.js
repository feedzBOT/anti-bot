let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
	let chat = global.db.data.chats[m.chat]
	if (chat.simi && !chat.isBanned && !m.isGroup) {
		if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
		if (!m.text) return
		try {
			let items = ["simi nggak ngerti kak", "simi capek kak", "bentar kak, saya pusing", "maaf kak simi lagi sedih", "simi bingung kak"];
			let cewe = items[Math.floor(Math.random() * items.length)]
			let res = await fetch('https://api.simsimi.net/v2/?lc=id' + '&text=' + encodeURIComponent(text))
			let json = await res.json()
			conn.reply(m.chat, `*○S I M I* : ` + json.success, m)
		} catch (e) {
			m.reply(cewe)
		}
		return !0
	}
	return true
}
module.exports = handler