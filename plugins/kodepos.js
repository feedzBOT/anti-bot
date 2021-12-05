let fetch = require('node-fetch')
let handler = async (m, {
	conn,
	text,
	usedPrefix,
	command
}) => {
	try {
		if (!text) throw `*Perintah ini untuk mencari kode pos berdasarkan kota/pencarian*\n\ncontoh:\n${usedPrefix + command} Lamongan`
		let res = await fetch('https://api.xteam.xyz/kodepos?q=' + text + '&APIKEY=miminetbot')
		if (res.status != 200) throw await res.text()
		let json = await res.json()
		if (!json.status) throw json
		let mes = json.result.map((v, i) => `${i + 1}. Provinsi: ${v.province}\nKota: ${v.city}\nKecamatan: ${v.subdistrict}\nPerkotaan: ${v.urban}\nKode Pos: ${v.postalcode}`).join('\n\n')
		m.reply(mes)
	} catch (e) {
		m.reply(`apikey invalid atau server down`)
	}
}
handler.help = ['kodepos <kota>']
handler.tags = ['tools']
handler.command = /^kodepos$/i

handler.limit = true

module.exports = handler