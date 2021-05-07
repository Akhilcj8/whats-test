let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Made in javascript via NodeJs
╠➥ Rec: Akhil 
╠➥ Script: Akhil ™
║      [ᴅᴏɴᴛ ᴇᴅɪᴛ ᴄʀᴇᴅɪᴛs / ᴄʜᴇᴄᴋ  ʟɪᴄᴇɴsᴇ ]
╠➥ send message : wa.me//+918943192489
║
║>ɪғ ʏᴏɪ ʜᴀᴠᴇ ᴀɴʏ ɪssᴜᴇ sᴇɴᴅ ᴍᴇssᴀɢᴇ? wa.me//+918943192489
║
╠═〘 Akhil BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

