/*let handler = async (m, { conn, args, usedPrefix, command }) => {
/*  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
  try { let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
if (!jids) throw `tag atau reply pesan orang yang akan di kick`
await conn.groupRemove(m.chat, jids)} catch { m.reply("gunakan perintah "+ `${usedPrefix+command} reply orangnya`)}
}
handler.help = ['kick','-'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']
handler.command = /^(okick|o\-)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
*/