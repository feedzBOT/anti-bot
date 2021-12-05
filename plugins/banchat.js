let handler = async (m, {
	conn,
	participants,
	isOwner
}) => {
	let items = ["hai juga", "apa?", "?", "hai", "hmmm"];
	let cewe = items[Math.floor(Math.random() * items.length)]
	if (!isOwner) return m.reply(cewe)
	// if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
	if (!(m.chat in global.db.data.chats)) return m.reply('Chat ini tidak terdaftar dalam DATABASE!')
	let chat = global.db.data.chats[m.chat]
	if (chat.isBanned) return m.reply('Chat ini sudah Terbanned!')
	chat.isBanned = true
	// } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^ai$/i

module.exports = handler