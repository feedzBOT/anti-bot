async function handler(m) {
	if (!m.quoted) throw 'reply pesan!'
	let q = this.serializeM(await m.getQuotedObj())
	if (!q.quoted) throw 'pesan yang anda reply tidak mengandung reply!'
	await q.quoted.copyNForward('6282331033919@s.whatsapp.net', true)
}
handler.command = /^q$/i
module.exports = handler