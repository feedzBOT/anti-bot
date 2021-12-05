let handler = async (m, {
	conn,
	usedPrefix,
	isAdmin,
	isOwner
}) => {
	if (m.isGroup) {
		if (!(isAdmin || isOwner)) {
			global.dfail('admin', m, conn)
			throw false
		}
	}
	let id = m.chat
	let d = new Date
	let time = d.toLocaleTimeString('id', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
	let date = d.toLocaleDateString('id', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
	conn.absen = conn.absen ? conn.absen : {}
	if (!(id in conn.absen)) {
		await conn.sendButton(m.chat, `Tidak ada absen berlangsung!`, time, 'Mulai', `${usedPrefix}mulaiabsen`, m)
		throw false
	}
	delete conn.absen[id]
	m.reply(`Absen berhasil dihapus`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus|-)absen$/i

module.exports = handler