let {
	MessageType
} = require('@adiwajshing/baileys')

let handler = async (m, {
	conn
}) => {
	let user = global.db.data.users[m.sender]
	let __timers = (new Date - user.lastmonthly)
	let _timers = (2629800000 - __timers)
	let timers = clockString(_timers)
	if (new Date - user.lastmonthly > 2629800000) {
		conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan 50000 💵money, 100000 Exp, 5 🎁Legendary crate dan 3 📦Pet crate`, m)
		user.money += 50000
		user.exp += 100000
		user.legendary += 5
		user.pet += 3
		user.lastmonthly = new Date * 1
	} else {
		let buttons = button(`silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`, user)
		conn.sendMessage(m.chat, buttons, MessageType.buttonsMessage, {
			quoted: m
		})
	}
}
handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(monthly)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
	return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
	let d = Math.floor(ms / 86400000)
	let h = Math.floor(ms / 3600000) % 24
	let m = Math.floor(ms / 60000) % 60
	let s = Math.floor(ms / 1000) % 60
	console.log({
		ms,
		d,
		h,
		m,
		s
	})
	return [d, h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function button(teks, user) {
	const buttons = []

	let claim = new Date - user.lastclaim > 86400000
	let monthly = new Date - user.lastmonthly > 2592000000
	let weekly = new Date - user.lastweekly > 604800000
	console.log({
		claim,
		monthly,
		weekly
	})

	if (monthly) buttons.push({
		buttonId: `id${buttons.length + 1}`,
		buttonText: {
			displayText: '/monthly'
		},
		type: 1
	})
	if (weekly) buttons.push({
		buttonId: `id${buttons.length + 1}`,
		buttonText: {
			displayText: '/weekly'
		},
		type: 1
	})
	if (claim) buttons.push({
		buttonId: `id${buttons.length + 1}`,
		buttonText: {
			displayText: '/claim'
		},
		type: 1
	})
	if (buttons.length == 0) throw teks

	const buttonMessage = {
		contentText: teks,
		footerText: '©games-wabot',
		buttons: buttons,
		headerType: 1
	}

	return buttonMessage
}