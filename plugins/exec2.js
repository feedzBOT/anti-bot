let cp = require('child_process')
let {
	promisify
} = require('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, {
	conn,
	isOwner,
	command,
	text
}) => {
	if (global.conn.user.jid != conn.user.jid) return
	m.reply('Executing...')
	let o
	try {
		o = await exec(command.trimStart() + ' ' + text.trimEnd())
	} catch (e) {
		o = e
	} finally {
		const bugcon = {
			key: {
				fromMe: false,
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			message: {
				"contactMessage": {
					"vcard": ""
				}
			}
		}
		let {
			stdout,
			stderr
		} = o
		if (stdout.trim()) conn.sendMessage(m.chat, stdout, 'conversation', {
			sendEphemeral: true,
			quoted: m,
			contextInfo: {
				forwardingScore: 2,
				isForwarded: false,
				"externalAdReply": {
					"title": "Rina to Ana",
					"body": "🥵Beautiful girl Stuck in Hole🥴",
					"mediaType": "1",
					"thumbnailUrl": "https://i.ibb.co/0hSVBjc/aaa.jpg",
					"mediaUrl": "https://youtu.be/GUIwx38TAZ0",
					//     "thumbnail": "https://i.ibb.co/ysTv8wY/Screenshot-20210808-112316.png",
					"sourceUrl": "https://youtu.be/GUIwx38TAZ0"
				}
			}
		})
		if (stderr.trim()) m.reply(stderr)
	}
}
handler.customPrefix = /^[$] /
handler.command = new RegExp
handler.rowner = true
module.exports = handler

function pickrando(list) {
	return list[Math.floor(Math.random() * list.length)]
}