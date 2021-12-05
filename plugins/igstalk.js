let {
	Presence
} = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let limit = 20
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
	await conn.updatePresence(m.chat, Presence.composing)
	if (!args || !args[0]) return conn.reply(m.chat, `*Format salah! Contoh :*\n\n*${usedPrefix + command} hosico_cat*`, m)
	conn.reply(m.chat, `_Scrapping metadata . . ._`, m)
	fetch('https://pencarikode.xyz/stalk/instagram?apikey=pais' + '&username=' + args[0])
		.then(res => res.json())
		.then(json => {
			if (json.result.error == 'true') return conn.reply(m.chat, `*Akun tidak ditemukan.*`, m)
			conn.sendFile(m.chat, json.result.user.hd_profile_pic_url_info.url, 'foto.jpg', `*⺀ IG - STALK ⺀*\n\n	○ *Fullname* : ${json.result.user.full_name}\n	○ *Username* : ${json.result.user.username}\n	○ *Link*: https://instagram.com/${json.result.user.username}\n	○ *Followers* : ${Number(json.result.user.follower_count).toLocaleString().replace(/,/g, '.')}\n	○ *Following* : ${Number(json.result.user.following_count).toLocaleString().replace(/,/g, '.')}\n	○ *Jumlah Postingan* : ${Number(json.result.user.media_count).toLocaleString().replace(/,/g, '.')}\n	○ *Private* : ${json.result.user.is_private}\n	○ *Bio* : ${json.result.user.biography}\n\n▌│█║▌║▌║║▌║▌║█│▌▌│`, m)
		}).catch(() => {
			conn.reply(m.chat, `*Terjadi kesalahan . . .*`, )
		})
}
handler.help = ['igstalk <username>']
handler.tags = ['downloader']
handler.command = /^(igstalk)$/i
handler.limit = true
module.exports = handler