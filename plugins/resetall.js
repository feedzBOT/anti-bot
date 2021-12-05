let {
	Presence
} = require('@adiwajshing/baileys')
let handler = async (m, {
	conn,
	args
}) => {
	await conn.updatePresence(m.chat, Presence.composing)
	let list = Object.entries(global.db.data.users)
	if (!args || !args[0]) {
		var lim = 100
	} else {
		var lim = parseInt(args[0])
	}
	if (!args || !args[0]) {
		var li = 10000
	} else {
		var li = parseInt(args[0])
	}
	if (!args || !args[0]) {
		var l = 100000
	} else {
		var l = parseInt(args[0])
	}
	list.slice(0, list.length).map(([user, data], i) => (Number(data.exp = l)))
	list.slice(0, list.length).map(([user, data], i) => (Number(data.money = li)))
	list.slice(0, list.length).map(([user, data], i) => (Number(data.limit = lim)))
	list.slice(0, list.length).map(([user, data], i) => (Number(data.afk = -1)))
	list.slice(0, list.length).map(([user, data], i) => (Number(data.afkReason = '')))
	m.reply('done')
}

handler.help = ['']
handler.tags = ['']
handler.command = /^(resetkabeh)$/i
handler.owner = true
handler.exp = 0
handler.fail = null
module.exports = handler