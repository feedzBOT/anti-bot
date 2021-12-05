let handler = async (m, {
	conn,
	isOwner
}) => {
	/*  if (!(m.chat in global.db.data.chats)) return m.reply('Chat ini tidak terdaftar dalam DATABASE!')*/
	if (!isOwner) return m.reply("bang?")
	let chat = global.db.data.chats[m.chat]
	/*  if (!chat.isBanned) return m.reply('Chat ini Tidak Terbanned!!')*/
	chat.isBanned = false
}
handler.command = /^of$/i

module.exports = handler