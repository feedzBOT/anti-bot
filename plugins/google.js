let fetch = require('node-fetch')
let googleIt = require('google-it')
let handler = async (m, {
	conn,
	command,
	args
}) => {
	let full = /f$/i.test(command)
	let text = args.join` `
	if (!text) return conn.reply(m.chat, 'Tidak ada teks untuk di cari', m)
	let url = 'https://google.com/search?q=' + encodeURIComponent(text)
	let search = await googleIt({
		query: text
	})
	let msg = search.map(({
		title,
		link,
		snippet
	}) => {
		return `*${title}*\n_${link}_\n_${snippet}_`
	}).join`\n\n`
	let ss = await (await fetch('https://shot.screenshotapi.net/screenshot?fresh=true&output=image&file_type=png&dark_mode=true&wait_for_event=load&delay=2000&url=' + encodeURIComponent(url) + '&full_page=false')).buffer()
	conn.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler