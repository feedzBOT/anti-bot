const {
	igstory
} = require('../lib/scrape')

let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command,
	isPrems
}) => {
	if (!isPrems) return
	if (!args[0]) throw `*Perintah ini untuk mengunduh story instagram*\n\ncontoh:\n\n${usedPrefix + command} Beni_230`
	if (args[0].startsWith('http') || args[0].startsWith('@')) throw `*Username salah! Perintah ini untuk mengunduh story instagram*\n\ncontoh:\n${usedPrefix + command} Kyaaa`

	igstory(args[0]).then(async res => {
		let igs = JSON.stringify(res)
		let json = JSON.parse(igs)
		for (let {
				downloadUrl,
				type
			} of json)
			conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '*Kyaaaa*', m)

	})

}
handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i
module.exports = handler