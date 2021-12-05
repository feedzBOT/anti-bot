let fs = require('fs')
let path = require('path')
let {
	MessageType
} = require('@adiwajshing/baileys')
const moment = require('moment-timezone')
let handler = async (m, {
	conn,
	usedPrefix: _p,
	DevMode
}) => {
	try {
		const jam = moment.tz('Asia/Jakarta').format('HH')
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
					caption: `ups`,
					jpegThumbnail: fs.readFileSync(`./src/gambar/${pickRandom(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','t','u','v','w','x','y','z','ab','cd'])}.jpg`)
				}
			}
		}
		let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
		let name = conn.getName(m.sender)
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
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		let totalreg = Object.keys(global.db.data.users).length
		let tags = {
			'main': 'M A I N',
			'nulis': 'M A G E R - Z O N E',
			'ep': 'E P H O T O - Z O N E',
			'maker': 'M A K E R - Z O N E',
			'te': 'T E K S P R O - Z O N E',
			'ph': 'P H O T O O X Y - Z O N E',
			'photofun': 'P H O T O F U N I A - Z O N E\n!!sering terjadi error mohon jangan terlalu spam fitur yang satu ini',
			/*   'about': 'A B O U T - A N D - I N F O',
			   'creator': 'C R E A T O R - Z O N E',*/
			'rpg': 'R P G',
			'game': 'G A M E S - Z O N E',
			//      'anonymous': 'A N O N Y M O U S - C H A T',
			'sticker': 'S T I C K E R - Z O N E',
			'audio': 'F I L T E R - A U D I O - Z O N E',
			//    'primbon': 'P R I M B O N - Z O N E',
			'kerang': 'K E R A N G - A J A I B',
			'quotes': 'Q U O T E S',
			//  'database': 'D A T A B A S E - Z O N E',
			'absen': 'A B S E N - Z O N E',
			'vote': 'V O T I N G - Z O N E',
			'islam': 'I S L A M - Z O N E',
			'image': 'I M A G E - Z O N E',
			'anime': 'A N I M E - Z O N E',
			//  'internet': 'I N T E R N E T - Z O N E',
			//      'downloader': 'D O W N L O A D E R - Z O N E',
			'fun': 'H A P P Y - Z O N E',
			//    'tools': 'T O O L S - Z O N E',
			'audio': 'A U D I O - Z O N R',
			//      'apk': 'M O D - A P K',
			//     'expression': 'E X P R E S S I O N - Z O N E',
			/*      'spammer': 'S P A M M E R - Z O N E',
			      'premium': 'P R E M I U M - Z O N E',
			      'admin': 'A D M I N - Z O N E',
			      'group': 'G R O U P - Z O N E',
			      'owner': 'O W N E R - Z O N E',
			      'host': 'H O S T - Z O N E',
			      'advanced': 'A D V A N C E D - Z O N E',
			      'info': 'I N F O - Z O N E',
			      '': 'N O - C A T E G O R Y',*/
		}
		for (let plugin of Object.values(global.plugins))
			if (plugin && 'tags' in plugin)
				for (let tag of plugin.tags)
					if (!tag in tags) tags[tag] = tag
		let help = Object.values(global.plugins).map(plugin => {
			return {
				help: plugin.help,
				tags: plugin.tags,
				prefix: 'customPrefix' in plugin,
				limit: plugin.limit
			}
		})
		let groups = {}
		for (let tag in tags) {
			groups[tag] = []
			for (let menu of help)
				if (menu.tags && menu.tags.includes(tag))
					if (menu.help) groups[tag].push(menu)
		}
		conn.menu = conn.menu ? conn.menu : {}
		let before = conn.menu.before || ` ┌──「 ${conn.user.name} 」
│============================
├ Nama : %name!
├ Hari: *%week %weton*
├ Tanggal: *%date*
├ Waktu: *%time*
├ Uptime: *%uptime*
│============================
\nThanks to : \n*الله سبحانه وتعالى*\n\n*N U R U T O M O*\n*W I L D A N - I Z Z U D I N*\n*B E N N Y - I S M A E L*\n*D R A W L - N A G*\n*A R I F F B*\n*F Z N - G A Z*\n\n▌│█║▌║▌║║▌║▌║█│▌▌║▌│█\n`
		let p = 0
		let header = conn.menu.header || '◪「 %category 」'
		let body = conn.menu.body || '├❏ %cmd'
		let footer = conn.menu.footer || '\n\n'
		let after = conn.menu.after || ''
		let _text = before + '\n'
		for (let tag in groups) {
			_text += header.replace(/%category/g, tags[tag]) + '\n'
			for (let menu of groups[tag]) {
				for (let help of menu.help)
					_text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '') + '\n'
			}
			_text += footer + '\n'
		}
		_text += after
		text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
		let replace = {
			'%': '%',
			p: _p,
			uptime,
			npmname: package.name,
			npmdesc: package.description,
			version: package.version,
			github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
			name,
			weton,
			week,
			date,
			time,
			readmore: readMore
		}
		text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
		let bah = await conn.sendMessage(m.chat, text.trim(), 'conversation', {
			sendEphemeral: true,
			quoted: freply,
			contextInfo: {
				mentionedJid: conn.parseMention(text),
				forwardingScore: 899,
				isForwarded: true,
				"externalAdReply": {
					"title": "Search Term: kill shot",
					"body": "👾 YouTube Play Music 👾",
					"mediaType": "",
					"thumbnailUrl": `${pickrando(["https://i.ibb.co/HzyRcqX/Pilihan.jpg","https://i.ibb.co/QKmgJ4n/ab.webp","https://i.ibb.co/zhq41zj/2167.jpg","https://i.ibb.co/zHfqLbz/l.jpg","https://i.ibb.co/F81WMyF/20210628-155841.png","https://i.ibb.co/pZdr3sP/images-1.jpg","https://i.ibb.co/Wt6094x/IMG-20210624-WA0636.png","https://telegra.ph/file/c207c163f3aa3c36a3cd6.jpg","https://i.ibb.co/yyKZjgZ/Screenshot-20210704-145052.png"])}`,
					"mediaUrl": "https://wa.me/6282331033919?text=hai",
					"thumbnail": ""
				}
			}
		})

		setTimeout(() => {
			conn.deleteMessage(m.chat, bah.key)
		}, 300000)
	} catch (e) {
		conn.reply(m.chat, 'Maaf, menu sedang error', m)
		throw e
		if (DevMode) {
			for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
				conn.sendMessage(jid, 'Menu.js error\nNo: *' + m.sender.split`@` [0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
			}
		}
	}
}
handler.command = /^abe$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

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