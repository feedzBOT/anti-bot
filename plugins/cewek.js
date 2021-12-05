var gis = require('g-i-s');
let handler = async function(m, {
	text
}) {
	let items = ["hijab cantik", "cewek", "korean girl", "remaja cantik", "cewek korea", "cewek jepang"];
	let cewe = items[Math.floor(Math.random() * items.length)]
	gis(`${cewe}`, logResults);

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
handler.help = ['cewek']
handler.tags = ['pic']
handler.command = /^(cewek)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
module.exports = handler