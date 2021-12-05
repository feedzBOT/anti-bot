let fs = require('fs')
global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/DmYC7VwLxpVIPHrysJFIC7']
global.Owner = {
	// use the phone number with the country code, for example Indonesia '62' America '1' etc
	'6282331033919': { // put your number here
		name: 'R',
		isDev: true, // if true this number will send if bot have bug and developer mode true
		isReport: true, // if true this number will send if user use command /report or /join
		isCreator: true // if true this number will send if user use command /owner or /creator
	},
	'0': { // put your number here
		name: 'D',
		isDev: false, // if true this number will send if bot have bug and developer mode true
		isReport: true, // if true this number will send if user use command /report or /join
		isCreator: false // if true this number will send if user use command /owner or /creator
	}
}
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
	// name: 'https://website'
	nrtm: 'https://nurutomo.herokuapp.com',
	xteam: 'https://api.xteam.xyz',
	nzcha: 'http://nzcha-apii.herokuapp.com',
	bg: 'http://bochil.ddns.net',
	fdci: 'https://api.fdci.se',
	bsbt: 'https://bsbt-api-rest.herokuapp.com',
	zeks: 'https://api.zeks.xyz',
	hardianto: 'https://hardianto-chan.herokuapp.com'

}
global.APIKeys = { // APIKey Here
	// 'https://website': 'apikey'
	'https://api.xteam.xyz': 'faisal123',
	'https://bsbt-api-rest.herokuapp.com': 'benniismael',
	'https://api.zeks.xyz': 'apivinz',
	'https://hardianto-chan.herokuapp.com': 'hardianto'
}

// Sticker WM
const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
	var sticker_name = 'I hope you\'re fine'
	var sticker_author = 'wuis'
} else {
	var sticker_name = stickerpack.spackname
	var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
	fs.unwatchFile(file_exif)
	console.log(chalk.redBright("Update 'exif.json'"))
	delete require.cache[file_exif]
	require('./lib/exif.json')
})

global.packname = sticker_name
global.author = sticker_author


global.multiplier = 69 // The higher, The harder levelup


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	delete require.cache[file]
	require(file)
})