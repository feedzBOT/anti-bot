let {
	Presence
} = require('@adiwajshing/baileys')
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command,
	isAdmin,
	isGroup,
	isBotAdmin
}) => {

	/*
			let enable = global.db.data.chats[m.chat]
			let status = global.db.data.users[m.sender]
			let chats = global.db.data.chats[m.chat]
			// let uS = global.db.data.users[m.chat].block
		 	
		if(enable.nolink && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
			if (!m.fromMe && m.text.match(/(https:\/\/chat.whatsapp.com)/gi)) {
	            conn.updatePresence(m.chat, Presence.composing) 
				 conn.reply(m.chat, `*Sorry, you will be removed from this group!*`, m).then(() => {
				conn.groupRemove(m.chat, [m.sender])
				 })
	        }
	     }
	     
	     */
	if (!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing)
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} else if (args[0] == 'on') {
		let cek = global.db.data.chats[m.chat].nolink
		if (cek) return conn.reply(m.chat, `*Anti-Link telah aktif pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing)
		global.db.data.chats[m.chat].nolink = true
		conn.reply(m.chat, `*Anti-Link berhasil diaktifkan.*`, m)
	} else if (args[0] == 'off') {
		let cek = global.db.data.chats[m.chat].nolink
		if (!cek) return conn.reply(m.chat, `*Anti-Link telah di nonaktifkan pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing)
		global.db.data.chats[m.chat].nolink = false
		conn.reply(m.chat, `*Anti-Link berhasil di nonaktifkan.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing)
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	}
}
handler.help = ['antilink *on / off*']
handler.tags = ['group']
handler.command = /^(antilink)$/i
handler.group = true
handler.owner = false
handler.admin = true
handler.premium = false
handler.botAdmin = true
handler.exp = 0
handler.limit = false
module.exports = handler