let handler = async (m, {
	conn,
	usedPrefix,
	text,
	isAdmin,
	isOwner
}) => {
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
	if (m.isGroup) {
		if (!(isAdmin || isOwner)) {
			global.dfail('admin', m, conn)
			throw false
		}
	}
	conn.absen = conn.absen ? conn.absen : {}
	let id = m.chat
	if (id in conn.absen) {
		await conn.send2Button(m.chat, `Masih ada absen di chat ini!`, time, 'Hapus', `${usedPrefix}hapusabsen`, 'Cek', `${usedPrefix}cekabsen`, m)
		throw false
	}
	conn.absen[id] = [
		await conn.sendButton(m.chat, `Absen dimulai`, time, 'Absen', `${usedPrefix}absen`, m),
		[],
		text
	]
}
handler.help = ['mulaiabsen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absen$/i

module.exports = handler