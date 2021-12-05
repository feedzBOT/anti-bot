let {
	Presence,
	GroupSettingChange
} = require('@adiwajshing/baileys')
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
	if (!args || !args[0]) {
		await conn.updatePresence(m.chat, Presence.composing)
		conn.send2Button(m.chat, 'grupnya mau di buka apa di tutup?', 'ehmmm', 'buka grupnya', '.grup open', 'tutup grupnya', '.grup close')
	} else if (args[0] == 'open') {
		let cek = conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, false)
		conn.reply(m.chat, `Group telah dibuka oleh admin @${m.sender.split('@')[0]}`)
	} else if (args[0] == 'close') {
		let cek = conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
		conn.reply(m.chat, `Group telah ditutup oleh admin @${m.sender.split('@')[0]}`)
	} else {
		await conn.updatePresence(m.chat, Presence.composing)
		conn.reply(m.chat, `*Format salah! Contoh :*\n\n	*○ ${usedPrefix + command} close*\n	*○ ${usedPrefix + command} open*`, m)
	}
}
handler.help = ['grup']
handler.tags = ['group']
handler.command = /^(grup)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.exp = 0
module.exports = handler