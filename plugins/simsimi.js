let fetch = require('node-fetch')
let handler = async (m, {
	conn,
	text
}) => {
	try {
		if (!text) return conn.reply(m.chat, 'mau ngobrol apa?', m)
		let items = ["simi nggak ngerti kak", "simi capek kak", "bentar kak, saya pusing", "maaf kak simi lagi sedih", "simi bingung kak"];
		let cewe = items[Math.floor(Math.random() * items.length)]
		let res = await fetch('https://api.simsimi.net/v2/?lc=id' + '&text=' + encodeURIComponent(text))
		let json = await res.json()
		conn.reply(m.chat, `*○S I M I* : ` + json.success, m)
	} catch (e) {
		m.reply(cewe)
	}
}
handler.help = ['bot <Teks>']
handler.tags = ['fun', 'game']
handler.command = /^ot$/i

module.exports = handler