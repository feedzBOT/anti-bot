let fetch = require('node-fetch')
let handler = async (m, {
	text
}) => {
	try {
		if (!text) throw `Uhm.. Teksnya mana?`
		let res = await fetch('https://api.xteam.xyz/kbbi?kata=' + text + '&APIKEY=miminetbot')
		if (!res.ok) throw await res.text()
		let json = await res.json()
		if (!json.status) throw json
		let list = json.message.list.map((v, i) => `${i + 1}. ${v}`).join('\n')
		m.reply(`${json.message.word}
    
${list}
`.trim())
	} catch (e) {
		m.reply(`apikey invalid atau server down`)
	}
}
handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i
module.exports = handler