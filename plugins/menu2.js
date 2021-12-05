let fs = require("fs")
let {
	MessageType
} = require("@adiwajshing/baileys")
const moment = require('moment-timezone')
let handler = async (m, {
	conn,
	args,
	usedPrefix
}) => {
	const jam = moment.tz('Asia/Jakarta').format('HH')
	conn.menu = conn.menu ? conn.menu : {}
	let id = m.sender
	if (!id) return
	var ucapanWaktu = 'Selamat Pagi 🌄'

	if (jam >= '03' && jam <= '10') {
		ucapanWaktu = 'Selamat Pagi 🌄'
	} else if (jam >= '10' && jam <= '13') {
		ucapanWaktu = 'Selamat Siang ☀️'
	} else if (jam >= '13' && jam <= '17') {
		ucapanWaktu = 'Selamat Sore 🌅'
	} else if (jam >= '17' && jam <= '23') {
		ucapanWaktu = 'Selamat Malam 🌙'
	} else {
		ucapanWaktu = 'Selamat Malam 🌙'
	}
	const freply = {
		key: {
			participant: '0@s.whatsapp.net',
			remoteJid: 'status@broadcast'
		},
		message: {
			imageMessage: {
				caption: `${pickrando(['Kawaiii','neko nekoo','ayu tenan njim','halo sayang','Aku sayang kamu','ikeh... ikeh...','wibu lu?','cantik cuk'])}`,
				jpegThumbnail: fs.readFileSync(`./src/gambar/${pickRandom(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','t','u','v','w','x','y','z','ab','cd'])}.jpg`)
			}
		}
	}

	let name = conn.getName(id)
	let d = new Date
	let locale = 'id'
	let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
	let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
	let week = d.toLocaleDateString(locale, {
		weekday: 'long'
	})
	let date = d.toLocaleDateString(locale, {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
	let time = d.toLocaleTimeString(locale, {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
	let content = fs.readFileSync('./src/profil.jpg') // change for file type
	/*const media = await conn.prepareMessage(m.chat, content, MessageType.image, { thumbnail: Buffer.alloc(0) })// change for file type

	const buttons = [
	  {buttonId: `${usedPrefix}` + 'abe', buttonText: {displayText: 'menu️'}, type: 1},
	  {buttonId: `${usedPrefix}` + 'owner', buttonText: {displayText: 'owner'}, type: 1}/*,
	   {buttonId: '/wip', buttonText: {displayText: 'info'}, type: 1}
	]
	const buttonMessage = {
	    contentText: `\`\`\`${ucapanWaktu} ${name}\`\`\`\n\n *${week} - ${date}*`,
	    footerText: `Sekarang jam ${time}`,
	    buttons: buttons,
	    headerType: 4, // change for file type
	    imageMessage: media.message.imageMessage // change for file type
	}
	const sendMsg = await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { sendEphemeral: true, quoted: freply, contextInfo : {forwardingScore: 899,
	                isForwarded: true ,"externalAdReply": {
	          "title": "Search Term: kill shot",
	          "body": "👾 YouTube Play Music 👾",
	          "mediaType": "",
	          "thumbnailUrl": `${pickrando(["https://i.ibb.co/HzyRcqX/Pilihan.jpg","https://i.ibb.co/QKmgJ4n/ab.webp","https://i.ibb.co/zhq41zj/2167.jpg","https://i.ibb.co/zHfqLbz/l.jpg","https://i.ibb.co/F81WMyF/20210628-155841.png","https://i.ibb.co/pZdr3sP/images-1.jpg","https://i.ibb.co/Wt6094x/IMG-20210624-WA0636.png","https://telegra.ph/file/c207c163f3aa3c36a3cd6.jpg","https://i.ibb.co/yyKZjgZ/Screenshot-20210704-145052.png"])}`,
	          "mediaUrl": "https://wa.me/6282331033919?text=hai",
	          "thumbnail": ""
	        }}})*/
	const buttonMessage = {
		locationMessage: {
			jpegThumbnail: /*await fetch("https://c4.wallpaperflare.com/wallpaper/436/169/248/nature-landscape-mountains-clouds-wallpaper-preview.jpg").then(res=>res.buffer())*/ content
		},
		contentText: `\`\`\`${ucapanWaktu} ${name}\`\`\`\n\n *${week} - ${date}*`,
		footerText: `Sekarang jam ${time}`,
		buttons: [{
				buttonId: `${usedPrefix}` + 'abe',
				buttonText: {
					displayText: 'menu️'
				},
				type: 1
			},
			{
				buttonId: `${usedPrefix}` + 'owner',
				buttonText: {
					displayText: 'owner'
				},
				type: 1
			}
			/*,
			   {buttonId: '/wip', buttonText: {displayText: 'info'}, type: 1}*/
		],
		headerType: 6
	}
	const sendMsg = await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, m)
	setTimeout(() => {
		conn.deleteMessage(m.chat, sendMsg.key)
	}, 30000)


}
handler.help = ['menu']
handler.tags = ['help']
handler.command = /^(menu|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function clockString(ms) {
	let h = Math.floor(ms / 3600000)
	let m = Math.floor(ms / 60000) % 60
	let s = Math.floor(ms / 1000) % 60
	console.log({
		ms,
		h,
		m,
		s
	})
	return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickrando(list) {
	return list[Math.floor(Math.random() * list.length)]
}

function pickRandom(list) {
	return list[Math.floor(Math.random() * list.length)]
}


/*let fs = require("fs")
let { MessageType } =require("@adiwajshing/baileys")

const media = await conn.prepareMessage(m.chat, {url:`https://i.ibb.co/G9Jwg1p/boy.jpg`}, MessageType.image, { thumbnail: Buffer.alloc(0) })// change for file type

const buttons = [
  {buttonId: '/wip', buttonText: {displayText: 'Info'}, type: 1},
  {buttonId: '/owner', buttonText: {displayText: 'owner aja'}, type: 1},
   {buttonId: '/grup close', buttonText: {displayText: 'tutup grupnya'}, type: 1}
]
const buttonMessage = {
    contentText: "lagi mode testing bang",
    footerText: 'jangan Bumly bang _-',
    buttons: buttons,
    headerType: 4, // change for file type
    imageMessage: media.message.imageMessage // change for file type
}
const sendMsg = await conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
        
        


function pickrando(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}*/