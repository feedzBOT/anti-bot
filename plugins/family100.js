let fetch = require('node-fetch')
let winScore = 5000
async function handler(m) {
	try {
		this.game = this.game ? this.game : {}
		let id = 'family100_' + m.chat
		if (id in this.game) {
			this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg)
			throw false
		}
		let a = await fetch("https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json")
		let bb = await a.json()
		let b = JSON.parse(JSON.stringify(bb))
		let random = Math.floor(Math.random() * bb.length)
		let json = bb[random]
		let caption = `
*Soal:* ${json.soal}
Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
Rp50.000 untuk tiap jawaban benar
    `.trim()
		this.game[id] = {
			id,
			msg: await m.reply(caption),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
			winScore,
		}
	} catch (e) {
		m.reply(`apikey invalid atau server down`)
	}
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i

module.exports = handler