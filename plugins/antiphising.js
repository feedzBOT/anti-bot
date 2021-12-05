let {
	Presence
} = require('@adiwajshing/baileys')
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command,
	isGroup,
	isAdmin,
	isBotAdmin
}) => {

	/*		let enable = global.db.data.chats[m.chat]
			let status = global.db.data.users[m.sender]
			let chats = global.db.data.chats[m.chat]
			// let uS = global.db.data.users[m.chat].block
	     if(enable.nokuotafree && !m.fromMe && m.isGroup && !isAdmin && !isOwner && isBotAdmin) {
	       if(m.text.match(/(kuotagratis.on|kuotabelajar.on|Program kuota belajar|=75G|Bantuan pulsa|kolah.on|kuotagratis.co|v=75GB|kuotafree.on|lajar.on|kuotakemendikbud.)/gi)) {
	       conn.updatePresence(m.chat, Presence.composing)
	       conn.reply(m.chat, `*_Yang share kuota gratis jangan di temenin, kick aja langsung!!!_*`, m).then(() => {
	       conn.groupRemove(m.chat, [m.sender])
	        })
	      }
	    }
	    
	*/
	if (!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing)
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	} else if (args[0] == 'on') {
		let cek = global.db.data.chats[m.chat].nokuotafree
		if (cek) return conn.reply(m.chat, `*Anti-Link kuotafree telah aktif pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing)
		global.db.data.chats[m.chat].nokuotafree = true
		conn.reply(m.chat, `*Anti-Link kuotafree berhasil diaktifkan.*`, m)
	} else if (args[0] == 'off') {
		let cek = global.db.data.chats[m.chat].nokuotafree
		if (!cek) return conn.reply(m.chat, `*Anti-Link kuotafree telah di nonaktifkan pada grup ini.*`, m)
		await conn.updatePresence(m.chat, Presence.composing)
		global.db.data.chats[m.chat].nokuotafree = false
		conn.reply(m.chat, `*Anti-Link kuotafree berhasil di nonaktifkan.*`, m)
	} else {
		await conn.updatePresence(m.chat, Presence.composing)
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} on*\n	*○ ${usedPrefix + command} off*`, m)
	}
}
handler.help = ['antiphising *on / off*']
handler.tags = ['group']
handler.command = /^(antiphising)$/i
handler.owner = false
handler.admin = true
handler.botAdmin = true
handler.exp = 0
handler.limit = false
module.exports = handler