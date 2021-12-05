const imgbb = require('imgbb-uploader')
const fs = require('fs')
const {
	exec
} = require('child_process')
const {
	MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, {
	conn,
	args
}) => {
	const content = JSON.stringify(m.message)
	const type = Object.keys(m.message)[0]
	const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	let text = args.join` `
	const ger = isQuotedAudio ? JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
	const owgi = await conn.downloadAndSaveMediaMessage(ger)
	let rano = getRandom('.mp3')
	exec(`ffmpeg -i ${owgi} -af equalizer=f=${text}:width_type=o:width=2:g=20 ${rano}`, (err, stderr, stdout) => {
		fs.unlinkSync(owgi)
		if (err) return m.reply('emror..')
		nobg = fs.readFileSync(rano)
		conn.sendMessage(m.chat, nobg, MessageType.audio, {
			mimetype: "audio/mp4",
			ptt: true,
			quoted: m
		})
		fs.unlinkSync(rano)
	})
}

handler.help = ['bass (caption|reply media)']
handler.tags = ['so']
handler.command = /^bass$/i
module.exports = handler


const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}