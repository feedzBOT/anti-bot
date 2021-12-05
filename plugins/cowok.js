var gis = require('g-i-s');
let handler = async function(m, {
	text
}) {
	let items = ["cowo ganteng", "korean boy", "chinese boy", "japan boy", "cowok indo ganteng", "cowok korea"];
	let cowo = items[Math.floor(Math.random() * items.length)]
	gis(`${cowo}`, logResults);

	function logResults(error, results) {
		if (error) {
			console.log(error);
		} else {
			let gmbr = JSON.stringify(results, null, '  ');
			let json = JSON.parse(gmbr)
			let url = json[Math.floor(Math.random() * json.length)];
			console.log(url);
			conn.sendFile(m.chat, url.url, 'file.jpg', `Awwww`, m)
		}
	}
}
handler.help = ['cowok ']
handler.tags = ['pic']
handler.command = /^(cowok)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
handler.exp = 0
module.exports = handler