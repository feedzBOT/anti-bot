let handler = async (m, {
	conn,
	args
}) => {
	if (!args[0]) throw 'Uhm...url nya mana?'
	global.API('xteam', '/dl/', {
		url: args[0]
	}, 'APIKEY')
	conn.sendFile(m.chat, undefined, '', '', m)
}
handler.help = [].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^\x00s$/i
handler.disabled = true

module.exports = handler